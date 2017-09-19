using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
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

            if (actionContext.Request.Headers.Authorization == null)
            {                
                HandleUnauthorizedRequest(actionContext);
                return;
            }
            // get value from header
            var authenticationToken = Convert.ToString(
              actionContext.Request.Headers.GetValues("Authorization").FirstOrDefault());

            var jwtEncodedString = authenticationToken.Substring(7);
            var hasExpired = HasExpired(jwtEncodedString);
            if(hasExpired)
            {
                HandleUnauthorizedRequest(actionContext);
                return;
            }

            HttpContext.Current.Response.AddHeader("authenticationToken", authenticationToken);
            HttpContext.Current.Response.AddHeader("AuthenticationStatus", "Authorized");
            return;            
        }

        protected override void HandleUnauthorizedRequest(HttpActionContext actionContext)
        {
            HttpContext.Current.Response.AddHeader("AuthenticationStatus", "NotAuthorized");
            actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Forbidden);
            return;
        }

        //private static bool DecodeToken(string authToken)
        //{

        //    var jwtEncodedString = authToken.Substring(7);
        //    var token = new JwtSecurityToken(jwtEncodedString: jwtEncodedString);
        //    var userName = token.Claims.First(c => c.Type == "user").Value;

        //    return false;
        //}

        private static bool HasExpired(string authToken)
        {
            var token = new JwtSecurityToken(jwtEncodedString: authToken);

            if (token.ValidTo > DateTime.Now)
                return false;
            else
                return true;
        }


    }
}