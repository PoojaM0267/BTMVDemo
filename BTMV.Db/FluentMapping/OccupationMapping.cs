using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BTMV_Model.DataModel;
using System.Data.Entity.ModelConfiguration;

namespace BTMV.Db.FluentMapping
{
    public class OccupationMapping : EntityTypeConfiguration<Occupation>
    {
        public OccupationMapping()
        {
            HasKey(model => model.OccupationId);
            Property(model => model.OccupationName);
        }
    }
}
