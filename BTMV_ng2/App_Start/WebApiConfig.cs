using BTMV_Core.Interfaces;
using BTMV_Core.Service;
using BTMV_ng2.Resolver;
using Microsoft.Practices.Unity;
using System.Web.Http;

namespace BTMV_ng2
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services 
            var container = new UnityContainer();
            container.RegisterType<IAccountService, AccountService>(new HierarchicalLifetimeManager());
            container.RegisterType<ITokenService, TokenService>(new HierarchicalLifetimeManager());

            //RegisterTypes(container);

            config.DependencyResolver = new UnityResolver(container);

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{Action}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }

        //private static void RegisterTypes(UnityContainer container)
        //{
        //    container.RegisterType<IAccountService, AccountService>(new HierarchicalLifetimeManager());
        //    container.RegisterType<ITokenService, TokenService>(new HierarchicalLifetimeManager());
        //}
    }
}
