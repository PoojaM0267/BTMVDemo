using BTMV.Db;
using BTMV_Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace BTMV_Core.Service
{
    public class AccountService :  IAccountService
    {
        private BTMVContext db = new BTMVContext();
        public string ComputeHash(string salt, string password)
        {
            byte[] saltBytes = Encoding.UTF32.GetBytes(salt);
            using (var rfc2898DeriveBytes = new Rfc2898DeriveBytes(password, saltBytes, 1000))
            return Convert.ToBase64String(rfc2898DeriveBytes.GetBytes(256));
        }       
    }
}
