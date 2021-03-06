﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BTMV_Model.ViewModel
{
    public class UserRegistrationViewModel
    {
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public DateTime DOB { get; set; }
        public string Phone { get; set; }
        public string AltPhone { get; set; }
        public string Address { get; set; }
        public string Gender { get; set; }
        public int CityId { get; set; }
        public int StateId { get; set; }
        public int OccupationId { get; set; }
        public bool isSelected { get; set; }
        public int RoleId { get; set; }
        public string Password { get; set; }
        public string RoleName { get; set; }
        public string CityName { get; set; }
        public string  StateName { get; set; }
        public string OccupationName { get; set; }
}
}
