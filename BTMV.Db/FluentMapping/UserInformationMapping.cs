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
            ToTable("UserInformation");
            HasKey<int>(model => model.Id);
            Property(model => model.FirstName).HasColumnType("nvarchar").HasMaxLength(100);
            Property(model => model.LastName).HasColumnType("nvarchar").HasMaxLength(100);
            Property(model => model.Email).HasColumnType("varchar").HasMaxLength(320);
            Property(model => model.DOB);
            Property(model => model.Phone).HasColumnType("varchar").HasMaxLength(10);
            Property(model => model.AltPhone).HasColumnType("varchar").HasMaxLength(10);
            Property(model => model.Address);
            Property(model => model.Gender).HasColumnType("varchar").HasMaxLength(10);
            Property(model => model.CityId);
            Property(model => model.OccupationId);
            Property(model => model.Password);
            Property(model => model.RoleId);
            Property(model => model.isSelected);
            Property(model => model.CreatedOn);
        }
    }
}
    