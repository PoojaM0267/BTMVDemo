namespace BTMV_Core.Interfaces
{
    public interface ITokenService
    {
        string GenerateToken(string username, int roleId);
        string Base64UrlEncode(byte[] input);
        byte[] Base64UrlDecode(string input);
        bool DecodeToken(string authToken);
    }
}
