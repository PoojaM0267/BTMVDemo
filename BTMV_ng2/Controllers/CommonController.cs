using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BTMV.Db;
using Newtonsoft.Json;
using System.Text;

namespace BTMV_ng2.Controllers
{
    public class CommonController : ApiController
    {
        protected readonly BTMVContext UserDB = new BTMVContext();

        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
                        
        //protected HttpResponseMessage ToJson(dynamic obj)
        //{
        //    var response = Request.CreateResponse(HttpStatusCode.OK);
        //    response.Content = new StringContent(JsonConvert.SerializeObject(obj), Encoding.UTF8, "application/json");
        //    return response;
        //}
    }
}