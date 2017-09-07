using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BTMV_Model.DataModel;
using System.Data.Entity.ModelConfiguration;

namespace BTMV.Db.FluentMapping
{
    public class StateMapping : EntityTypeConfiguration<State>
    {
        public StateMapping()
        {
            this.HasKey<int>(model => model.StateId);
            this.Property(model => model.StateName);
        }
    }
}
