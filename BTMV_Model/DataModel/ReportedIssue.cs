using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BTMV_Model.DataModel
{
    public class ReportedIssue
    {
        public int Id { get; set; }
        public string IssueTitle { get; set; }
        public string IssueDetails { get; set; }
        public int DepartmentId { get; set; }
        public int CityId { get; set; }
        public int UserId { get; set; }
        public DateTime AddedOn { get; set; }

        [ForeignKey("CityId")]
        public virtual City City { get; set; }

        [ForeignKey("DepartmentId")]
        public virtual Department Department { get; set; }
    }
}
