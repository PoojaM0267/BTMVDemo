using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace BTMV_ng2.Filters
{
    public class AuthenticateUserAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if (HttpContext.Current.Session["user"] == null)
            {
                filterContext.Result = new RedirectToRouteResult(new RouteValueDictionary
                                                                        {
                                                                            { "controller", "Home" },
                                                                            { "action", "Index" }
                                                                        });
            }
        }
    }
}