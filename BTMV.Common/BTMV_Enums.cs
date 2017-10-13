namespace BTMV.Common
{
    public class BTMV_Enums
    {
        public enum UserRoles : int
        {
            Admin = 1,
            GroupMember = 2,
            User = 3
        }

       public enum WorkStatus : int
        {
            Initialised = 1,
            Started = 2,
            InProgress = 3,
            Closed = 4,
            Pending = 5,
            Rejected = 6
        }

        public enum Department : int
        {
            Education = 1,
            Infrastructure = 2,
            Health = 3,
            WomenEmpowerment = 4,
            Agriculture = 5
        }
        public enum Occupation : int
        {
            Employee = 1,
            Teacher = 2,
            Student = 3,
            Business = 4,
            HouseWife = 5
        }
    }
  
}
