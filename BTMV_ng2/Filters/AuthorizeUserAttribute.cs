using BTMV.Db;
using System;
using System.Linq;
using System.Web;
//using System.Web.Http;
using System.Web.Mvc;
using static BTMV.Common.BTMV_Enums;

namespace BTMV_ng2.Filters
{
    public class AuthorizeUserRoleAttribute : AuthorizeAttribute
    {
        private readonly string[] _userRoles;

        public AuthorizeUserRoleAttribute(params string[] allowedRoles)
        {
            _userRoles = allowedRoles;
        }

        protected override bool AuthorizeCore(HttpContextBase httpContext)
        {
            var roleName = string.Empty;

            if (HttpContext.Current.Session["user"] != null)
            {
                int userId = (int)HttpContext.Current.Session["user"];
                var roleId = GetRole(userId);
                return IsUserValid(roleId, _userRoles);
            }
            return false;
        }

        public int GetRole(int userId)
        {
            var db = new BTMVContext();
            var role = db.UserInformation
                    .Where(x => x.Id == userId)
                    .Select(x => new
                    {
                        RoleId = x.RoleId
                    })
                    .SingleOrDefault();

            return role.RoleId;
        }

        public bool IsUserValid(int userId, string[] roles)
        {
            var roleName = string.Empty;
            switch (userId)
            {
                case (int)UserRoles.Admin:
                    roleName = "Admin";
                    break;
                case (int)UserRoles.GroupMember:
                    roleName = "GroupMember";
                    break;
                case (int)UserRoles.User:
                    roleName = "User";
                    break;
            }

            foreach (var role in roles)
            {
                return roleName == role;
            }

            return false;
        }

    }
}