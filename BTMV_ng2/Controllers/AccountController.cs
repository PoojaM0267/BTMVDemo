using BTMV.Db;
using BTMV_Model.DataModel;
using BTMV_Model.ViewModel;
using System;
using System.Linq;
using System.Web.Http;
using System.Security.Cryptography;
using BTMV_Core.Interfaces;
using Newtonsoft.Json;
using System.Text;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using BTMV_ng2.Filters;

namespace BTMV_ng2.Controllers
{
    public class AccountController : CommonController
    {

        private readonly IAccountService _accountService;
        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpPost]
        public IHttpActionResult Register(UserRegistrationViewModel userModel)
        {
            try
            {
                var db = new BTMVContext();

                if (!ModelState.IsValid)
                {
                    return Json(new { isSuccess = false, message = "Please provide appropriate data." });
                }

                if(string.IsNullOrEmpty(userModel.Email) && string.IsNullOrEmpty(userModel.Password))
                {
                    return Json(new { isSuccess = false, message = "Input Fields cannot be empty." });
                }
                
                var userExists = db.UserInformation
                   .Where(x => x.Email == userModel.Email)
                   .SingleOrDefault();

                if (userExists != null)
                {
                    return Json(new { isSuccess = false, message = "User with this Email Already Exists." });                    
                }

                    var hashedPassword = ComputeHash(userModel.Email, userModel.Password);

                    var user = new UserInformation
                    {
                        FirstName = userModel.FirstName,
                        LastName = userModel.LastName,
                        Email = userModel.Email,
                        DOB = Convert.ToDateTime("04/19/2016"),
                        CityId = userModel.CityId,
                        OccupationId = userModel.OccupationId,
                        RoleId = 2,
                        isSelected = false,
                        Password = hashedPassword
                    };

                    db.UserInformation.Add(user);
                    db.SaveChanges();

                return Json(new { isSuccess = true, message = "Registration Successful." });
            }
            catch (Exception ex)
            {
                return Json(new { isSuccess = false, message = "Something went wrong. Please try again." });
            }
        }
        
        [HttpGet]
        public IHttpActionResult GetAllStates()
        {
            try
            {
                var db = new BTMVContext();
                var states = db.States.ToList();
                return Json(states);
            }
            catch (Exception ex)
            {
                return null;
            }
            
        }

        [HttpGet]
        public IHttpActionResult GetAllCities()
        {
            try
            {
                var db = new BTMVContext();
                var cities = db.Cities.ToList();
                return Json(cities);
            }
            catch (Exception ex)
            {
                return null;
            }

        }
        
        [AcceptVerbs("Post", "Head", "Options")]
        public IHttpActionResult GetCitiesByState(State state)
        {
            try
            {
                var db = new BTMVContext();
                var cities = db.Cities.Where(x => x.StateId == state.StateId).ToList();
                return Json(cities);
            }
            catch (Exception ex)
            {
                return null;
            }

        }

        [HttpGet]
        public IHttpActionResult GetAllOccupations()
        {
            try
            {
                var db = new BTMVContext();
                var occupations = db.Occupations.ToList();
                return Json(occupations);
            }
            catch (Exception ex)
            {
                //return new HttpResponseMessage(HttpStatusCode.InternalServerError);
                return null;
            }

        }

        [ HttpPost]
        public IHttpActionResult Login(UserLoginViewModel userModel)
        {
            try
            {
                var db = new BTMVContext();
                var isUserValid = false;

                if (string.IsNullOrEmpty(userModel.Email) && string.IsNullOrEmpty(userModel.Password))
                {
                    return Json(new { isUserValid = false, message = "Input Fields cannot be empty." });
                }

                var userCredentials = db.UserInformation
                    .Where(x => x.Email == userModel.Email)
                    .Select(x => new
                    {
                        Email = x.Email,
                        Password = x.Password,
                        Id = x.Id,
                        RoleId = x.RoleId
                    })
                    .SingleOrDefault();

                if (userCredentials == null)
                {
                    // return User does not exists.
                    return Json(new { isUserValid = false, message = "User Not Found." });
                }

                // TODO: update last login date time in db here
                // TODO: update login failure count on failed login

                isUserValid = Verify(userModel.Email, userModel.Password, userCredentials.Password);

                if(!isUserValid)
                {
                    return Json(new { isUserValid = isUserValid, id = userCredentials.Id, message = "Invalid Credentials" });
                }
                
                var token = GenerateToken(userCredentials.Email, userCredentials.RoleId );
               

                return Json(new { isUserValid = isUserValid, id = userCredentials.Id, message = "Login Successful", jwtToken = token });
            }
            catch (Exception ex)
            {
                return null;
            }
        }        

        public static string ComputeHash(string salt,string password)
        {
            byte[] saltBytes = Encoding.UTF32.GetBytes(salt);
            using (var rfc2898DeriveBytes = new Rfc2898DeriveBytes(password, saltBytes, 1000))
                return Convert.ToBase64String(rfc2898DeriveBytes.GetBytes(256));
        }

        public static bool Verify(string salt, string password, string hashedPassword)
        {
            return hashedPassword == ComputeHash(salt, password);
            //return hashedPassword = _accountService.ComputeHash(salt, password);
        }
        
        [CustomAuthorize]
        [HttpPost]
        //public IHttpActionResult GetUserDetailsById(IdDemo param)
        public IHttpActionResult GetUserDetailsById(IdDemo param)
        {
            try
            {
                var db = new BTMVContext();
                if(param.Id < 0)
                {
                    // return error
                }

                var user = db.UserInformation
                       .Where(x => x.Id == param.Id)
                       .SingleOrDefault();

                //if(userDetails == null)
                //{
                //    return Json(new { userDetails = null });
                //}

                var userDetails = new UserRegistrationViewModel {
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Email = user.Email,
                    Gender = user.Gender,
                    DOB = user.DOB,
                    RoleName = user.UserRoles.RoleName,
                    OccupationName = user.Occupation.OccupationName,
                    CityName = user.City.CityName,
                    StateName = user.City.State.StateName,
                    Address = user.Address,
                    Phone = user.Phone,
                    AltPhone = user.AltPhone
                };

                return Json(new { userDetails = userDetails });
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public static string GenerateToken(string username, int roleId)
        {
            var segments = new List<string>();

            var header = new
            {
                typ = "JWT",
                alg = "HMAC SHA256"
            };

            // Header of JWT
            byte[] headerBytes = Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(header, Formatting.None));
            var headerStr = Base64UrlEncode(headerBytes);

            // Payload of JWT
            var utc0 = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
            var issueTime = DateTime.Now;

            var iat = (int)issueTime.Subtract(utc0).TotalSeconds;
            var exp = (int)issueTime.AddMinutes(55).Subtract(utc0).TotalSeconds; // Expiration time is up to 1 hour, but lets play on safe side

            var payload = new
            {
                iss = "BTMV",
                exp = exp,
                iat = iat,
                user = username,
                role = roleId
            };

            byte[] payloadBytes = Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(payload, Formatting.None));
            var payloadStr = Base64UrlEncode(payloadBytes);

            // Signature of JWT
            var plainTextSecurityKey = "This is my shared, not so secret, secret!";
            byte[] securityKeyBytes = Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(plainTextSecurityKey, Formatting.None));
            var encodedString = headerStr + "." + payloadStr;

            var bytesToSign = Encoding.UTF8.GetBytes(encodedString);
            var sha = new HMACSHA256(securityKeyBytes);
            byte[] signature = sha.ComputeHash(bytesToSign);
            var signatureStr = Base64UrlEncode(signature);

            segments.Add(headerStr);
            segments.Add(payloadStr);
            segments.Add(signatureStr);

            return string.Join(".", segments.ToArray());
        }

        private static string Base64UrlEncode(byte[] input)
        {
            var output = Convert.ToBase64String(input);
            output = output.Split('=')[0]; // Remove any trailing '='s
            output = output.Replace('+', '-'); // 62nd char of encoding
            output = output.Replace('/', '_'); // 63rd char of encoding
            return output;
        }

        private static byte[] Base64UrlDecode(string input)
        {
            var output = input;
            output = output.Replace('-', '+'); // 62nd char of encoding
            output = output.Replace('_', '/'); // 63rd char of encoding
            switch (output.Length % 4) // Pad with trailing '='s
            {
                case 0: break; // No pad chars in this case
                case 2: output += "=="; break; // Two pad chars
                case 3: output += "="; break; // One pad char
                default: throw new System.Exception("Illegal base64url string!");
            }
            var converted = Convert.FromBase64String(output); // Standard base64 decoder
            return converted;
        }

        private static bool DecodeToken(string authToken)
        {

            var jwtEncodedString = authToken.Substring(7);
            var token = new JwtSecurityToken(jwtEncodedString: jwtEncodedString);
            var userName = token.Claims.First(c => c.Type == "user").Value;

            return false;
        }
    }
}
