namespace BTMV.Db.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialiseWorkTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Works",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        WorkTitle = c.String(maxLength: 100),
                        Aim = c.String(maxLength: 250),
                        DepartmentId = c.Int(nullable: false),
                        CityId = c.Int(nullable: false),
                        FundRequired = c.Int(nullable: false),
                        UserId = c.Int(nullable: false),
                        AddedOn = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.UserInformation", "CreatedOn", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.UserInformation", "CreatedOn");
            DropTable("dbo.Works");
        }
    }
}
