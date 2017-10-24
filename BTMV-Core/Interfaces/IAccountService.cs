using BTMV_Model.DataModel;
using BTMV_Model.ViewModel;

namespace BTMV_Core.Interfaces
{
    public interface IAccountService
    {
        /// <summary>
        /// Computes the hash.
        /// </summary>
        /// <param name="salt">The salt.</param>
        /// <param name="password">The password.</param>
        /// <returns></returns>
        string ComputeHash(string salt, string password);
        UserInformation GetUserById(int userId);

        //void UpdateBasicInfo(UserInformation userBasicInfo);
        void UpdateBasicInfo(UserRegistrationViewModel userBasicInfo);
        void UpdateContactInfo(UserRegistrationViewModel userContactInfo);
        void UpdatePassword(ChangePasswordViewModel passwordModel);
        void DeleteAccount(int userId);
        //UserInformation GetUserCredentials(int userId);
    }
}
