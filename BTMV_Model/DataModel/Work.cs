using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace BTMV_Model.DataModel
{
    public class Work
    {
        public int Id { get; set; }
        public string WorkTitle { get; set; }
        public string Aim { get; set; }
        public int DepartmentId { get; set; }
        public int CityId { get; set; }
        public int FundRequired { get; set; }
        public int UserId { get; set; }
        public DateTime AddedOn { get; set; }
        public int WorkStatusId { get; set; }

        [ForeignKey("CityId")]
        public virtual City City { get; set; }

        [ForeignKey("DepartmentId")]
        public virtual Department Department { get; set; }

        [ForeignKey("WorkStatusId")]
        public virtual WorkStatus WorkStatus { get; set; }
    }
}
