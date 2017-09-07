using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BTMV_Model.DataModel;
using System.Data.Entity.ModelConfiguration;

namespace BTMV.Db.FluentMapping
{
    public class UserInformationMapping : EntityTypeConfiguration<UserInformation>
    {
        public UserInformationMapping()
        {
            this.ToTable("UserInformation");
            this.HasKey<int>(model => model.Id);

            this.Property(model => model.FirstName).HasColumnType("nvarchar").HasMaxLength(100);

            this.Property(model => model.LastName).HasColumnType("nvarchar").HasMaxLength(100);

            this.Property(model => model.Email).HasColumnType("varchar").HasMaxLength(320);

            this.Property(model => model.DOB);

            this.Property(model => model.Phone).HasColumnType("varchar").HasMaxLength(10);

            this.Property(model => model.AltPhone).HasColumnType("varchar").HasMaxLength(10);

            this.Property(model => model.Address);

            this.Property(model => model.Gender).HasColumnType("varchar").HasMaxLength(10);

            this.Property(model => model.CityId);

           // this.Property(model => model.StateId);
            this.Property(model => model.OccupationId);
            this.Property(model => model.Password);
            this.Property(model => model.RoleId);
            this.Property(model => model.isSelected);
        }
    }
}
    