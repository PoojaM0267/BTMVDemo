namespace BTMV.Db.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class StateIDRemoved : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.UserInformation", "StateId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.UserInformation", "StateId", c => c.Int(nullable: false));
        }
    }
}
