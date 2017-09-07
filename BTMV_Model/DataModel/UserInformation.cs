using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BTMV_Model.DataModel
{
    public class UserInformation
    {
        public int Id { get; set; }
        
        public string FirstName { get; set; }
        
        public string LastName { get; set; }
        
        public string Email { get; set; }
        
        public DateTime DOB { get; set; }
        
        public string Phone { get; set; }
        
        public string AltPhone { get; set; }
        
        public string Address { get; set; }
        
        public string Gender { get; set; }
        
        public int CityId { get; set; }
      //  public int StateId { get; set; }
        public int OccupationId { get; set; }        
        public bool isSelected { get; set; }
        public int RoleId { get; set; }        
        public string Password { get; set; }

        //[ForeignKey("StateId")]
        //public virtual State State { get; set; }

        [ForeignKey("CityId")]
        public virtual City City { get; set; }

        [ForeignKey("OccupationId")]
        public virtual Occupation Occupation { get; set; }

        [ForeignKey("RoleId")]
        public virtual UserRoles UserRoles { get; set; }
    }
}
