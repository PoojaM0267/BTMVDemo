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
    }
}
