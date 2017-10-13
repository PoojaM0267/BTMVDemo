namespace BTMV.Db.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class WorkModifications : DbMigration
    {
        public override void Up()
        {
            CreateIndex("dbo.Works", "DepartmentId");
            CreateIndex("dbo.Works", "CityId");
            AddForeignKey("dbo.Works", "CityId", "dbo.Cities", "CityId", cascadeDelete: true);
            AddForeignKey("dbo.Works", "DepartmentId", "dbo.Departments", "DeptartmentId", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Works", "DepartmentId", "dbo.Departments");
            DropForeignKey("dbo.Works", "CityId", "dbo.Cities");
            DropIndex("dbo.Works", new[] { "CityId" });
            DropIndex("dbo.Works", new[] { "DepartmentId" });
        }
    }
}
