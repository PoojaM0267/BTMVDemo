namespace BTMV_Core.Interfaces
{
    public interface IAccountService
    {
         string ComputeHash(string salt, string password);
    }
}
