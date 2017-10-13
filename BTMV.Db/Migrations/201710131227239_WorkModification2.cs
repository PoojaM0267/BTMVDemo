namespace BTMV.Db.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class WorkModification2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Works", "WorkStatusId", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Works", "WorkStatusId");
        }
    }
}
