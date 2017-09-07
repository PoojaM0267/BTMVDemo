namespace BTMV.Db.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DatatypesModifiedforUserInformation : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.UserInformation", "FirstName", c => c.String(maxLength: 100));
            AlterColumn("dbo.UserInformation", "LastName", c => c.String(maxLength: 100));
            AlterColumn("dbo.UserInformation", "Email", c => c.String(maxLength: 320, unicode: false));
            AlterColumn("dbo.UserInformation", "DOB", c => c.DateTime(nullable: false));
            AlterColumn("dbo.UserInformation", "Phone", c => c.String(maxLength: 10, unicode: false));
            AlterColumn("dbo.UserInformation", "AltPhone", c => c.String(maxLength: 10, unicode: false));
            AlterColumn("dbo.UserInformation", "Gender", c => c.String(maxLength: 10, unicode: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.UserInformation", "Gender", c => c.String());
            AlterColumn("dbo.UserInformation", "AltPhone", c => c.String());
            AlterColumn("dbo.UserInformation", "Phone", c => c.String());
            AlterColumn("dbo.UserInformation", "DOB", c => c.String());
            AlterColumn("dbo.UserInformation", "Email", c => c.String());
            AlterColumn("dbo.UserInformation", "LastName", c => c.String());
            AlterColumn("dbo.UserInformation", "FirstName", c => c.String());
        }
    }
}
