using BTMV.Db;
using BTMV_Model.DataModel;
using BTMV_Model.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using System.Security.Cryptography;

namespace BTMV_ng2.Controllers
{
    public class AccountController : CommonController
    {
        public AccountController()
        {

        }

        [System.Web.Http.HttpPost]
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
        
        [System.Web.Http.HttpGet]
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

        [System.Web.Http.HttpGet]
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
        
        [System.Web.Http.AcceptVerbs("Post", "Head", "Options")]
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

        [System.Web.Http.HttpGet]
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

        [System.Web.Http.HttpPost]
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
                        // RoleId = x.RoleId
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

                return Json(new { isUserValid = isUserValid, id = userCredentials.Id, message = (isUserValid) ? "Login Successful" : "Invalid Credentials" });
            }
            catch (Exception ex)
            {
                return null;
            }

        }

        //[System.Web.Http.HttpPost]
        //public IHttpActionResult Login(UserLoginViewModel userModel)
        //{
        //    try
        //    {
        //        var db = new BTMVContext();
        //        var isUserValid = false;

        //        if (string.IsNullOrEmpty(userModel.Email) && string.IsNullOrEmpty(userModel.Password))
        //        {
        //            return Json(new { isUserValid = false, message = "Input Fields cannot be empty." });
        //        }

        //        var user = db.UserInformation
        //               .Where(x => x.Email == userModel.Email)
        //               .SingleOrDefault();

        //        if (user == null)
        //        {
        //            // return User does not exists.
        //            return Json(new { isUserValid = false, message = "User Not Found." });
        //        }

        //        // TODO: update last login date time in db here
        //        // TODO: update login failure count on failed login

        //        isUserValid = Verify(userModel.Email, userModel.Password, user.Password);

        //        if(!isUserValid)
        //        {
        //            return Json(new { isUserValid = isUserValid, id = user.Id, message = "Invalid Credentials" });
        //        }

        //        var userDetails = new UserRegistrationViewModel
        //        {
        //            FirstName = user.FirstName,
        //            LastName = user.LastName,
        //            Email = user.Email,
        //            Gender = user.Gender,
        //            DOB = user.DOB,
        //            RoleName = user.UserRoles.RoleName,
        //            OccupationName = user.Occupation.OccupationName,
        //            CityName = user.City.CityName,
        //            StateName = user.City.State.StateName,
        //            Address = user.Address,
        //            Phone = user.Phone,
        //            AltPhone = user.AltPhone
        //        };


        //        return Json(new { isUserValid = isUserValid, id = user.Id, message = "Login Successful", userDetails = userDetails});
        //    }
        //    catch (Exception ex)
        //    {
        //        return null;
        //    }

        //}

        public static string ComputeHash(string salt,string password)
        {
            byte[] saltBytes = System.Text.Encoding.UTF32.GetBytes(salt);           
            using (var rfc2898DeriveBytes = new Rfc2898DeriveBytes(password, saltBytes, 1000))
            return Convert.ToBase64String(rfc2898DeriveBytes.GetBytes(256));
        }

        public static bool Verify(string salt, string password, string hashedPassword)
        {
            return hashedPassword == ComputeHash(salt, password);
        }
        
       // [System.Web.Http.Authorize]
        [System.Web.Http.HttpPost]
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
    }
}
