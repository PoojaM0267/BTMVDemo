using BTMV.Db;
using BTMV_Model.DataModel;
using System;
using System.Linq;
using System.Web.Http;

namespace BTMV_ng2.Controllers
{
    public class CommonController : ApiController
    { 
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
        public IHttpActionResult GetAllDepartments()
        {
            try
            {
                var db = new BTMVContext();
                var departments = db.Departments.ToList();
                return Json(departments);
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
                return null;
            }

        }



        //protected HttpResponseMessage ToJson(dynamic obj)
        //{
        //    var response = Request.CreateResponse(HttpStatusCode.OK);
        //    response.Content = new StringContent(JsonConvert.SerializeObject(obj), Encoding.UTF8, "application/json");
        //    return response;
        //}




    }
}