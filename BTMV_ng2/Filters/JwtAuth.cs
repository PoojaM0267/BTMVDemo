﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;

namespace BTMV_ng2.Filters
{
    public class JwtAuth
    {
        public static string GenerateToken(string username, int roleId)
        {
            var segments = new List<string>();

            var header = new
            {
                typ = "JWT",
                alg = "HMAC SHA256"
            };

            // Header of JWT
            byte[] headerBytes = Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(header, Formatting.None));
            var headerStr = Base64UrlEncode(headerBytes);

            // Payload of JWT
            var utc0 = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
            var issueTime = DateTime.Now;

            var iat = (int)issueTime.Subtract(utc0).TotalSeconds;
            var exp = (int)issueTime.AddMinutes(55).Subtract(utc0).TotalSeconds; // Expiration time is up to 1 hour, but lets play on safe side

            var payload = new
            {
                iss = "BTMV",
                exp = exp,
                iat = iat,
                user = username,
                role = roleId
            };

            byte[] payloadBytes = Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(payload, Formatting.None));
            var payloadStr = Base64UrlEncode(payloadBytes);

            // Signature of JWT
            var plainTextSecurityKey = "This is my shared, not so secret, secret!";
            byte[] securityKeyBytes = Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(plainTextSecurityKey, Formatting.None));
            var encodedString = headerStr + "." + payloadStr;

            var bytesToSign = Encoding.UTF8.GetBytes(encodedString);
            var sha = new HMACSHA256(securityKeyBytes);
            byte[] signature = sha.ComputeHash(bytesToSign);
            var signatureStr = Base64UrlEncode(signature);

            segments.Add(headerStr);
            segments.Add(payloadStr);
            segments.Add(signatureStr);

            return string.Join(".", segments.ToArray());
        }

        private static string Base64UrlEncode(byte[] input)
        {
            var output = Convert.ToBase64String(input);
            output = output.Split('=')[0]; // Remove any trailing '='s
            output = output.Replace('+', '-'); // 62nd char of encoding
            output = output.Replace('/', '_'); // 63rd char of encoding
            return output;
        }

        private static byte[] Base64UrlDecode(string input)
        {
            var output = input;
            output = output.Replace('-', '+'); // 62nd char of encoding
            output = output.Replace('_', '/'); // 63rd char of encoding
            switch (output.Length % 4) // Pad with trailing '='s
            {
                case 0: break; // No pad chars in this case
                case 2: output += "=="; break; // Two pad chars
                case 3: output += "="; break; // One pad char
                default: throw new System.Exception("Illegal base64url string!");
            }
            var converted = Convert.FromBase64String(output); // Standard base64 decoder
            return converted;
        }

        public static bool DecodeToken(string authToken)
        {
            var jwtEncodedString = authToken.Substring(7);
            var token = new JwtSecurityToken(jwtEncodedString: jwtEncodedString);
            //var userName = token.Claims.First(c => c.Type == "user").Value;
            //var role = token.Claims.First(c => c.Type == "role").Value;            
            return false;
        }

        public static string GetCurrentUserName(string authToken)
        {
            var jwtEncodedString = authToken.Substring(7);
            var token = new JwtSecurityToken(jwtEncodedString: jwtEncodedString);
            var userName = token.Claims.First(c => c.Type == "user").Value;
            return userName;
        }

        public static string GetCurrentUserRole(string authToken)
        {
            var jwtEncodedString = authToken.Substring(7);
            var token = new JwtSecurityToken(jwtEncodedString: jwtEncodedString);
           
            var role = token.Claims.First(c => c.Type == "role").Value;
            return role;
        }
    }
}