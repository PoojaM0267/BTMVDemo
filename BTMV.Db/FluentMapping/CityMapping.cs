using BTMV_Model.DataModel;
using System.Data.Entity.ModelConfiguration;

namespace BTMV.Db.FluentMapping
{
    public class CityMapping : EntityTypeConfiguration<City>
    {
        public CityMapping()
        {
            HasKey(model => model.CityId);
            Property(model => model.CityName);
            Property(model => model.StateId);
        }
    }
}
