using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BTMV_Model.DataModel;
using System.Data.Entity.ModelConfiguration;

namespace BTMV.Db.FluentMapping
{
    public class CityMapping : EntityTypeConfiguration<City>
    {
        public CityMapping()
        {
            this.HasKey<int>(model => model.CityId);
            this.Property(model => model.CityName);
            this.Property(model => model.StateId);
        }
    }
}
