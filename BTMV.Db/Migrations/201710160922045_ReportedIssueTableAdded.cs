namespace BTMV.Db.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ReportedIssueTableAdded : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ReportedIssues",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        IssueTitle = c.String(maxLength: 100),
                        IssueDetails = c.String(maxLength: 500),
                        DepartmentId = c.Int(nullable: false),
                        CityId = c.Int(nullable: false),
                        UserId = c.Int(nullable: false),
                        AddedOn = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Cities", t => t.CityId, cascadeDelete: true)
                .ForeignKey("dbo.Departments", t => t.DepartmentId, cascadeDelete: true)
                .Index(t => t.DepartmentId)
                .Index(t => t.CityId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ReportedIssues", "DepartmentId", "dbo.Departments");
            DropForeignKey("dbo.ReportedIssues", "CityId", "dbo.Cities");
            DropIndex("dbo.ReportedIssues", new[] { "CityId" });
            DropIndex("dbo.ReportedIssues", new[] { "DepartmentId" });
            DropTable("dbo.ReportedIssues");
        }
    }
}
