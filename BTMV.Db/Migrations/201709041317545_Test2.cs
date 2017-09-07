namespace BTMV.Db.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Test2 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.UserInformation", "OccupationId", c => c.Int(nullable: false));
            CreateIndex("dbo.Cities", "StateId");
            CreateIndex("dbo.UserInformation", "CityId");
            CreateIndex("dbo.UserInformation", "OccupationId");
            CreateIndex("dbo.UserInformation", "RoleId");
            AddForeignKey("dbo.Cities", "StateId", "dbo.States", "StateId", cascadeDelete: true);
            AddForeignKey("dbo.UserInformation", "CityId", "dbo.Cities", "CityId", cascadeDelete: true);
            AddForeignKey("dbo.UserInformation", "OccupationId", "dbo.Occupations", "OccupationId", cascadeDelete: true);
            AddForeignKey("dbo.UserInformation", "RoleId", "dbo.UserRoles", "RoleId", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.UserInformation", "RoleId", "dbo.UserRoles");
            DropForeignKey("dbo.UserInformation", "OccupationId", "dbo.Occupations");
            DropForeignKey("dbo.UserInformation", "CityId", "dbo.Cities");
            DropForeignKey("dbo.Cities", "StateId", "dbo.States");
            DropIndex("dbo.UserInformation", new[] { "RoleId" });
            DropIndex("dbo.UserInformation", new[] { "OccupationId" });
            DropIndex("dbo.UserInformation", new[] { "CityId" });
            DropIndex("dbo.Cities", new[] { "StateId" });
            AlterColumn("dbo.UserInformation", "OccupationId", c => c.String());
        }
    }
}
