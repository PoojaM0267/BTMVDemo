using BTMV_Model.DataModel;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BTMV.Db.FluentMapping
{
    public class UserRolesMapping : EntityTypeConfiguration<UserRoles>
    {
        public UserRolesMapping()
        {
            this.HasKey<int>(model => model.RoleId);
            this.Property(model => model.RoleName);
        }
        
    }
}
