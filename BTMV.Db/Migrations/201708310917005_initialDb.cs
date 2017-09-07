namespace BTMV.Db.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initialDb : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Cities",
                c => new
                    {
                        CityId = c.Int(nullable: false, identity: true),
                        CityName = c.String(),
                        StateId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.CityId);
            
            CreateTable(
                "dbo.Departments",
                c => new
                    {
                        DeptartmentId = c.Int(nullable: false, identity: true),
                        DeptartmentName = c.String(),
                    })
                .PrimaryKey(t => t.DeptartmentId);
            
            CreateTable(
                "dbo.Occupations",
                c => new
                    {
                        OccupationId = c.Int(nullable: false, identity: true),
                        OccupationName = c.String(),
                    })
                .PrimaryKey(t => t.OccupationId);
            
            CreateTable(
                "dbo.States",
                c => new
                    {
                        StateId = c.Int(nullable: false, identity: true),
                        StateName = c.String(),
                    })
                .PrimaryKey(t => t.StateId);
            
            CreateTable(
                "dbo.UserInformation",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FirstName = c.String(),
                        LastName = c.String(),
                        Email = c.String(),
                        DOB = c.String(),
                        Phone = c.String(),
                        AltPhone = c.String(),
                        Address = c.String(),
                        Gender = c.String(),
                        CityId = c.Int(nullable: false),
                        StateId = c.Int(nullable: false),
                        OccupationId = c.String(),
                        isSelected = c.Boolean(nullable: false),
                        RoleId = c.Int(nullable: false),
                        Password = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.UserRoles",
                c => new
                    {
                        RoleId = c.Int(nullable: false, identity: true),
                        RoleName = c.String(),
                    })
                .PrimaryKey(t => t.RoleId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.UserRoles");
            DropTable("dbo.UserInformation");
            DropTable("dbo.States");
            DropTable("dbo.Occupations");
            DropTable("dbo.Departments");
            DropTable("dbo.Cities");
        }
    }
}
