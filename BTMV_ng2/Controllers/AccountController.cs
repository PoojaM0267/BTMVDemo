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

namespace BTMV_ng2.Controllers
{
    public class AccountController : CommonController
    {
        public AccountController()
        {

        }

        [System.Web.Http.HttpPost]
        public HttpResponseMessage Register(UserRegistrationViewModel userModel)
        {
            // return null;
            try
            {
                var db = new BTMVContext();

                if (!ModelState.IsValid)
                {
                    return new HttpResponseMessage(HttpStatusCode.ExpectationFailed);
                }

                var user = new UserInformation
                {
                    FirstName = userModel.FirstName,
                    LastName = userModel.LastName,
                    Email = userModel.Email,
                    //DOB = Convert.ToDateTime(userModel.DOB),                   
                    Phone = "7205595660",
                    AltPhone = "7205595660",
                    Address = "HIG 228",
                    Gender = "Female",
                    //StateId = 1,
                    CityId = userModel.CityId,
                    OccupationId = userModel.OccupationId,
                    RoleId = 2,
                    isSelected = true,
                    Password = userModel.Password
                };

                db.UserInformation.Add(user);
                db.SaveChanges();

                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            catch (Exception ex)
            {
                // If we got this far, something failed, redisplay form
                //Elmah.ErrorSignal.FromCurrentContext().Raise(ex);
                //ModelState.AddModelError("Error", BTV_Constants.ModelError);
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
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
                //return new HttpResponseMessage(HttpStatusCode.InternalServerError);
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
                // return new HttpResponseMessage(HttpStatusCode.InternalServerError);
                return null;
            }

        }

        //[System.Web.Http.AcceptVerbs(HttpVerbs.Post | HttpVerbs.Head | HttpVerbs.Options)]
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


    }
}
