namespace BTMV.Db.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class WorkStatusRelationshipAddedtoWork : DbMigration
    {
        public override void Up()
        {
            CreateIndex("dbo.Works", "WorkStatusId");
            AddForeignKey("dbo.Works", "WorkStatusId", "dbo.WorkStatus", "WorkStatusId", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Works", "WorkStatusId", "dbo.WorkStatus");
            DropIndex("dbo.Works", new[] { "WorkStatusId" });
        }
    }
}
