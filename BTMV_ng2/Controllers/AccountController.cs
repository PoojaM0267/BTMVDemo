using BTMV.Db;
using BTMV.Common;
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
                    return Json(new { isSuccess = false, message = BTMV.Common.BTMV.DataErrorMsg });
                }

                if(string.IsNullOrEmpty(userModel.Email) && string.IsNullOrEmpty(userModel.Password))
                {
                    return Json(new { isSuccess = false, message = BTMV.Common.BTMV.EmptyInputMsg });
                }
                
                var userExists = db.UserInformation
                   .Where(x => x.Email == userModel.Email)
                   .SingleOrDefault();

                if (userExists != null)
                {
                    return Json(new { isSuccess = false, message = BTMV.Common.BTMV.UserExistsMsg  });                    
                }
                
                var hashedPassword = _accountService.ComputeHash(userModel.Email, userModel.Password);

                var user = new UserInformation
                {
                    FirstName = userModel.FirstName,
                    LastName = userModel.LastName,
                    Email = userModel.Email,
                    DOB = Convert.ToDateTime("04/19/2016"),
                    CityId = userModel.CityId,
                    OccupationId = userModel.OccupationId,
                    RoleId = (int)BTMV_Enums.UserRoles.Admin,
                   // isSelected = false,
                    Password = hashedPassword,
                    CreatedOn = DateTime.Now
                    };

                    db.UserInformation.Add(user);
                    db.SaveChanges();

                return Json(new { isSuccess = true, message = BTMV.Common.BTMV.RegistrationSuccessMsg });
            }
            catch (Exception ex)
            {
                Elmah.ErrorSignal.FromCurrentContext().Raise(ex);
                return Json(new { isSuccess = false, message = BTMV.Common.BTMV.CommonErrorMsg });
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
                    return Json(new { isUserValid = false, message = BTMV.Common.BTMV.EmptyInputMsg });
                }

                var userCredentials = db.UserInformation
                    .Where(x => x.Email == userModel.Email)
                    .Select(x => new
                    {
                        Email = x.Email,
                        Password = x.Password,
                        Id = x.Id,
                        RoleId = x.RoleId,
                        RoleName = x.UserRoles.RoleName,
                        FirstName = x.FirstName,
                        LastName = x.LastName
                    })
                    .SingleOrDefault();

                if (userCredentials == null)
                {
                    return Json(new { isUserValid = false, message = BTMV.Common.BTMV.UserNotFoundMsg });
                }

                // TODO: update last login date time in db here
                // TODO: update login failure count on failed login
                
                isUserValid = (userCredentials.Password == _accountService.ComputeHash(userModel.Email, userModel.Password));

                if (!isUserValid)
                {
                    return Json(new { isUserValid = isUserValid, id = userCredentials.Id, message = BTMV.Common.BTMV.InvalidCredentialsMsg });
                }
                
                var token = _tokenService.GenerateToken(userCredentials.Email, userCredentials.RoleId); 

                return Json(new {
                    isUserValid = isUserValid,
                    id = userCredentials.Id,
                    message = BTMV.Common.BTMV.LoginSuccessMsg,
                    jwtToken = token,
                    roleId = userCredentials.RoleId,
                    roleName = userCredentials.RoleName,
                    firstName = userCredentials.FirstName,
                    lastName = userCredentials.LastName
                });
            }
            catch (Exception ex)
            {
                Elmah.ErrorSignal.FromCurrentContext().Raise(ex);
                return Json(new { isUserValid = false, message = BTMV.Common.BTMV.CommonErrorMsg });
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
                
                var user = _accountService.GetUserById(param.Id);

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
                Elmah.ErrorSignal.FromCurrentContext().Raise(ex);
                return null;
            }
        }

        [CustomAuthorize]
        [HttpPost]
        public IHttpActionResult EditBasicInfo(UserRegistrationViewModel userModel)
        {
            try
            {
                var db = new BTMVContext();
                if(userModel == null)
                {
                    return Json(new { isSuccess = false, message = BTMV.Common.BTMV.CommonErrorMsg });
                }

                //var userDetails = _accountService.GetUserById(userModel.UserId);

                //if(userDetails != null)
                //{
                //    userDetails.FirstName = userModel.FirstName;
                //    userDetails.LastName = userModel.LastName;
                //    userDetails.OccupationId = userModel.OccupationId;
                //    userDetails.DOB = userModel.DOB;
                //    userDetails.Gender = userModel.Gender;

                //    _accountService.UpdateBasicInfo(userDetails);

                //}

                _accountService.UpdateBasicInfo(userModel);

                return Json(new { isSuccess = true, message = BTMV.Common.BTMV.ProfileUpdateSuccessMsg });
            }
            catch (Exception ex)
            {
                Elmah.ErrorSignal.FromCurrentContext().Raise(ex);
                return Json(new { isSuccess = false, message = BTMV.Common.BTMV.CommonErrorMsg });
            }
        }

        /// <summary>
        /// Edits the contact information.
        /// </summary>
        /// <param name="userModel">The user model.</param>
        /// <returns></returns>
        [CustomAuthorize]
        [HttpPost]
        public IHttpActionResult EditContactInfo(UserRegistrationViewModel userModel)
        {
            try
            {
                var db = new BTMVContext();
                if (userModel == null)
                {
                    return Json(new { isSuccess = false, message = BTMV.Common.BTMV.CommonErrorMsg });
                }
                
                _accountService.UpdateContactInfo(userModel);

                return Json(new { isSuccess = true, message = BTMV.Common.BTMV.ProfileUpdateSuccessMsg });
            }
            catch (Exception ex)
            {
                Elmah.ErrorSignal.FromCurrentContext().Raise(ex);
                return Json(new { isSuccess = false, message = BTMV.Common.BTMV.CommonErrorMsg });
            }

        }

        [CustomAuthorize]
        [HttpPost]
        public IHttpActionResult ValidateCurrentPassword(ChangePasswordViewModel passwordModel)
        {
            try
            {
                var db = new BTMVContext();
                var isPasswordValid = false;

                if (passwordModel == null)
                {
                    return Json(new {isValid = false, message = BTMV.Common.BTMV.CommonErrorMsg });
                }

                //var userCredentials = _accountService.GetUserCredentials(passwordModel.userId);
                // TODO : refactor this

                var userCredentials = db.UserInformation
                    .Where(x => x.Id == passwordModel.userId)
                    .Select(x => new
                    {
                        Email = x.Email,
                        Password = x.Password
                    })
                    .SingleOrDefault();

                isPasswordValid = (userCredentials.Password == _accountService.ComputeHash(userCredentials.Email, passwordModel.currentPassword));

               //var isValidPassword =  _accountService.ValidateCurrentPassword(passwordModel);

               return Json(new {isValid = isPasswordValid });
            }
            catch (Exception ex)
            {
                Elmah.ErrorSignal.FromCurrentContext().Raise(ex);
                return Json(new {isValid = false, message = BTMV.Common.BTMV.CommonErrorMsg });
            }
        }

        [CustomAuthorize]
        [HttpPost]
        public IHttpActionResult ChangePassword(ChangePasswordViewModel passwordModel)
        {
            try
            {
                var db = new BTMVContext();

                if (passwordModel == null)
                {
                    return Json(new { isSuccess = false, message = BTMV.Common.BTMV.CommonErrorMsg });
                }

                _accountService.UpdatePassword(passwordModel);

                return Json(new { isSuccess = true, message = BTMV.Common.BTMV.PasswordUpdateSuccessMsg });
            }
            catch (Exception ex)
            {
                Elmah.ErrorSignal.FromCurrentContext().Raise(ex);
                return Json(new { isSuccess = false, message = BTMV.Common.BTMV.CommonErrorMsg });
            }
        }

        [CustomAuthorize]
        [HttpPost]
        public IHttpActionResult DeleteUserById(IdDemo param)
        {
            try
            {
                var db = new BTMVContext();

                if (param.Id <= 0)
                {
                    return Json(new { isSuccess = false, message = BTMV.Common.BTMV.CommonErrorMsg });
                }

                _accountService.DeleteAccount(param.Id);

                return Json(new { isSuccess = true, message = BTMV.Common.BTMV.AccountDeletedMsg });
            }
            catch (Exception ex)
            {
                Elmah.ErrorSignal.FromCurrentContext().Raise(ex);
                return Json(new { isSuccess = false, message = BTMV.Common.BTMV.CommonErrorMsg });
            }
        }
    }
}
