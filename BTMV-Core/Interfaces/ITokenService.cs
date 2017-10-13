namespace BTMV_Core.Interfaces
{
    public interface ITokenService
    {
        /// <summary>
        /// Generates the token.
        /// </summary>
        /// <param name="username">The username.</param>
        /// <param name="roleId">The role identifier.</param>
        /// <returns></returns>
        string GenerateToken(string username, int roleId);

        /// <summary>
        /// Base64s the URL encode.
        /// </summary>
        /// <param name="input">The input.</param>
        /// <returns></returns>
        string Base64UrlEncode(byte[] input);

        /// <summary>
        /// Base64s the URL decode.
        /// </summary>
        /// <param name="input">The input.</param>
        /// <returns></returns>
        byte[] Base64UrlDecode(string input);

        /// <summary>
        /// Decodes the token.
        /// </summary>
        /// <param name="authToken">The authentication token.</param>
        /// <returns></returns>
        bool DecodeToken(string authToken);
    }
}
