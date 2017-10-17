using BTMV_Model.DataModel;
using System.Data.Entity.ModelConfiguration;

namespace BTMV.Db.FluentMapping
{
    public class ReportedIssueMapping : EntityTypeConfiguration<ReportedIssue>
    {
        public ReportedIssueMapping()
        {
            ToTable("ReportedIssues");
            HasKey(model => model.Id);
            Property(model => model.IssueTitle).HasColumnType("nvarchar").HasMaxLength(100);
            Property(model => model.IssueDetails).HasColumnType("nvarchar").HasMaxLength(500);
            Property(model => model.CityId);
            Property(model => model.DepartmentId);
            Property(model => model.UserId);
            Property(model => model.AddedOn);
        }
    }
}
