using System;

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
    }
}
