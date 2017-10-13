using System.Data.Entity.ModelConfiguration;
using BTMV_Model.DataModel;

namespace BTMV.Db.FluentMapping
{
    public class WorkStatusMapping : EntityTypeConfiguration<WorkStatus>
    {
        public WorkStatusMapping()
        {
            HasKey(model => model.WorkStatusId);
            Property(model => model.WorkStatusName);
        }
    }
}
