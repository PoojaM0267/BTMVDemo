﻿using BTMV.Db;
using BTMV_Model.DataModel;
using BTMV_Model.ViewModel;
using System;
using System.Linq;
using System.Web.Http;
using BTMV_Core.Interfaces;
using BTMV_ng2.Filters;

namespace BTMV_ng2.Controllers
{
    public class AccountController : ApiController
    {
        private readonly IAccountService _accountService;
        private readonly ITokenService _tokenService;
        public AccountController(IAccountService accountService, ITokenService tokenService)
        {
            _accountService = accountService;
            _tokenService = tokenService;
        }

        /// <summary>
        /// Registers the specified user model.
        /// </summary>
        /// <param name="userModel">The user model.</param>
        /// <returns></returns>
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

                //var hashedPassword = ComputeHash(userModel.Email, userModel.Password);
                var hashedPassword = _accountService.ComputeHash(userModel.Email, userModel.Password);

                var user = new UserInformation
                {
                    FirstName = userModel.FirstName,
                    LastName = userModel.LastName,
                    Email = userModel.Email,
                    DOB = Convert.ToDateTime("04/19/2016"),
                    CityId = userModel.CityId,
                    OccupationId = userModel.OccupationId,
                    RoleId = 2,
                   // isSelected = false,
                    Password = hashedPassword,
                    CreatedOn = DateTime.Now
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

        /// <summary>
        /// Logins the specified user model.
        /// </summary>
        /// <param name="userModel">The user model.</param>
        /// <returns></returns>
        [HttpPost]
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
                    return Json(new { isUserValid = false, message = "User Not Found." });
                }

                // TODO: update last login date time in db here
                // TODO: update login failure count on failed login
                
                isUserValid = (userCredentials.Password == _accountService.ComputeHash(userModel.Email, userModel.Password));

                if (!isUserValid)
                {
                    return Json(new { isUserValid = isUserValid, id = userCredentials.Id, message = "Invalid Credentials" });
                }
                
                var token = _tokenService.GenerateToken(userCredentials.Email, userCredentials.RoleId);                

                return Json(new { isUserValid = isUserValid, id = userCredentials.Id, message = "Login Successful", jwtToken = token });
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        /// <summary>
        /// Gets the user details by identifier.
        /// </summary>
        /// <param name="param">The parameter.</param>
        /// <returns></returns>
        [CustomAuthorize]
        [HttpPost]
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
