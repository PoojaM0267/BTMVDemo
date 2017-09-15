using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Controllers;
namespace BTMV_ng2.Filters
{
    public class CustomAuthorize : AuthorizeAttribute
    {       
        public override void OnAuthorization(HttpActionContext actionContext)
        {
            // get value from header
            string authenticationToken = Convert.ToString(
              actionContext.Request.Headers.GetValues("Authorization").FirstOrDefault());

            if(string.IsNullOrEmpty(authenticationToken))
            {
                HttpContext.Current.Response.AddHeader("Authorization", authenticationToken);
                HttpContext.Current.Response.AddHeader("AuthenticationStatus", "NotAuthorized");
                actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Forbidden);
                return;                
            }

            HttpContext.Current.Response.AddHeader("authenticationToken", authenticationToken);
            HttpContext.Current.Response.AddHeader("AuthenticationStatus", "Authorized");
            return;
        }

        //protected override void HandleUnauthorizedRequest(HttpActionContext actionContext)
        //{
        //    HttpContext.Current.Response.AddHeader("AuthenticationStatus", "NotAuthorized");
        //    actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Forbidden);
        //    return;
        //}


    }
}