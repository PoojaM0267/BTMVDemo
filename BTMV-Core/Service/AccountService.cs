using BTMV.Db;
using BTMV_Core.Interfaces;
using BTMV_Model.DataModel;
using BTMV_Model.ViewModel;
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

        /// <summary>
        /// Computes the hash.
        /// </summary>
        /// <param name="salt">The salt.</param>
        /// <param name="password">The password.</param>
        /// <returns></returns>
        public string ComputeHash(string salt, string password)
        {
            byte[] saltBytes = Encoding.UTF32.GetBytes(salt);
            using (var rfc2898DeriveBytes = new Rfc2898DeriveBytes(password, saltBytes, 1000))
            return Convert.ToBase64String(rfc2898DeriveBytes.GetBytes(256));
        }

        /// <summary>
        /// Gets the user by identifier.
        /// </summary>
        /// <param name="userId">The user identifier.</param>
        /// <returns></returns>
        public UserInformation GetUserById(int userId)
        {
            return db.UserInformation.Where(x => x.Id == userId).FirstOrDefault();
        }

        /// <summary>
        /// Updates the basic information.
        /// </summary>
        /// <param name="userBasicInfo">The user basic information.</param>
        public void UpdateBasicInfo(UserRegistrationViewModel userBasicInfo)
        {
            var userDetails = GetUserById(userBasicInfo.UserId);

            if (userDetails != null)
            {
                userDetails.FirstName = userBasicInfo.FirstName;
                userDetails.LastName = userBasicInfo.LastName;
                userDetails.OccupationId = userBasicInfo.OccupationId;
                userDetails.DOB = userBasicInfo.DOB;
                userDetails.Gender = userBasicInfo.Gender;
            }

            db.SaveChanges();
        }

        /// <summary>
        /// Updates the contact information.
        /// </summary>
        /// <param name="userContactInfo">The user contact information.</param>
        public void UpdateContactInfo(UserRegistrationViewModel userContactInfo)
        {
            var userDetails = GetUserById(userContactInfo.UserId);

            if (userDetails != null)
            {
                userDetails.Address = userContactInfo.Address;
                userDetails.Phone = userContactInfo.Phone;
                userDetails.CityId = userContactInfo.CityId;
            }

            db.SaveChanges();
        }
    }
}
