using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BTMV_Model.ViewModel
{
    public class WorkViewModel
    {
        public int Id { get; set; }
        public string WorkTitle { get; set; }
        public string Aim { get; set; }
        public string CityName { get; set; }
        public string StateName { get; set; }
        public string DepartmentName { get; set; }
        public int FundRequired { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
        public DateTime AdddedOn { get; set; }
    }
}
