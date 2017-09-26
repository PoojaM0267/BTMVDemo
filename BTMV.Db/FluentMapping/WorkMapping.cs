using BTMV_Model.DataModel;
using System.Data.Entity.ModelConfiguration;

namespace BTMV.Db.FluentMapping
{
    public class WorkMapping : EntityTypeConfiguration<Work>
    {
        public WorkMapping()
        {
            ToTable("Works");
            HasKey(model => model.Id);
            Property(model => model.WorkTitle).HasColumnType("nvarchar").HasMaxLength(100);
            Property(model => model.Aim).HasColumnType("nvarchar").HasMaxLength(250);
            Property(model => model.FundRequired);
            Property(model => model.CityId);
            Property(model => model.DepartmentId);
            Property(model => model.UserId);
            Property(model => model.AddedOn);
        }
    }
}
