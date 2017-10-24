using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BTMV_Model.ViewModel
{
    public class WorkViewModel
    {
        public int id { get; set; }
        public string workTitle { get; set; }
        public string aim { get; set; }
        public string cityName { get; set; }
        public string stateName { get; set; }
        public string departmentName { get; set; }
        public int departmentId { get; set; }
        public int cityId { get; set; }
        public int fundRequired { get; set; }
        public int fundUsed { get; set; }
        public int fundGranted { get; set; }
        public int userId { get; set; }
        //public string UserName { get; set; }
        public DateTime addedOn { get; set; }
        public string workStatus { get; set; }
        public string addedBy { get; set; }
    }
}
