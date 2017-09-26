using System.Data.Entity;
using BTMV_Model.DataModel;
using BTMV.Db.FluentMapping;

namespace BTMV.Db
{
    public class BTMVContext : DbContext
    {
         public BTMVContext() : base("BTMV")
        {

        }
        public DbSet<UserInformation> UserInformation { get; set; }
        public DbSet<State> States { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<Occupation> Occupations { get; set; }
        public DbSet<UserRoles> UserRoles { get; set; }
        public DbSet<Department> Departments { get; set; }
        public DbSet<Work> Works { get; set; }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            modelBuilder.Configurations.Add(new UserInformationMapping());
            modelBuilder.Configurations.Add(new StateMapping());
            modelBuilder.Configurations.Add(new CityMapping());
            modelBuilder.Configurations.Add(new OccupationMapping());
            modelBuilder.Configurations.Add(new DepartmentMapping());
            modelBuilder.Configurations.Add(new UserRolesMapping());
            modelBuilder.Configurations.Add(new WorkMapping());
        }
    }
}
