﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BTMV_Core.Interfaces
{
    public interface IAccountService
    {
         string ComputeHash(string salt, string password);
    }
}
