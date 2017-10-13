namespace BTMV.Db.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class WorkStatusTableAdded : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.WorkStatus",
                c => new
                    {
                        WorkStatusId = c.Int(nullable: false, identity: true),
                        WorkStatusName = c.String(),
                    })
                .PrimaryKey(t => t.WorkStatusId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.WorkStatus");
        }
    }
}
