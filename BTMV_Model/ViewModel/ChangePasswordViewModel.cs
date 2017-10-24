namespace BTMV_Model.ViewModel
{
    public class ChangePasswordViewModel
    {
        public string currentPassword { get; set; }
        public string newPassword { get; set; }
        public string confirmNewPassword { get; set; }
        public int userId { get; set; }
    }
}
