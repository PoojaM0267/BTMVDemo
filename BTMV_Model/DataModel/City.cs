using System.ComponentModel.DataAnnotations.Schema;

namespace BTMV_Model.DataModel
{
    public class City
    {
        public int CityId { get; set; }
        public string CityName { get; set; }
        public int StateId { get; set; }

        [ForeignKey("StateId")]
        public virtual State State { get; set; }
    }
}
