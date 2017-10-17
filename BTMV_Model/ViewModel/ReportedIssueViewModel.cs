using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BTMV_Model.ViewModel
{
    public class ReportedIssueViewModel
    {
        public int id { get; set; }
        public string issueTitle { get; set; }
        public string issueDetails { get; set; }
        public int departmentId { get; set; }
        public int cityId { get; set; }
        public int stateId { get; set; }
        public string cityName { get; set; }
        public string stateName { get; set; }
        public string departmentName { get; set; }
        public int userId { get; set; }
        public DateTime addedOn { get; set; }        
    }
}
