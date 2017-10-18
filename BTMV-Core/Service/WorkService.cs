using BTMV.Db;
using BTMV_Core.Interfaces;
using BTMV_Model.DataModel;
using BTMV_Model.ViewModel;
using System.Collections.Generic;
using System.Linq;

namespace BTMV_Core.Service
{
    public class WorkService : IWorkService
    {
        private BTMVContext db = new BTMVContext();

        /// <summary>
        /// Gets the works by user identifier.
        /// </summary>
        /// <param name="userId">The user identifier.</param>
        /// <returns></returns>
        public IEnumerable<Work> GetWorksByUserId(int userId)
        {
            //var db = new BTMVContext();
            var worksList = db.Works.Where(x => x.UserId == userId).ToList();
            return worksList;
        }

        /// <summary>
        /// Saves the new work.
        /// </summary>
        /// <param name="work">The work.</param>
        public void SaveNewWork(Work work)
        {
            //var db = new BTMVContext();
            db.Works.Add(work);
            db.SaveChanges();
        }

        /// <summary>
        /// Saves the reported issue.
        /// </summary>
        /// <param name="reportedIssue">The reported issue.</param>
        public void SaveReportedIssue(ReportedIssue reportedIssue)
        {
            //var db = new BTMVContext();
            db.ReportedIssues.Add(reportedIssue);
            db.SaveChanges();
        }

        /// <summary>
        /// Updates the work.
        /// </summary>
        /// <param name="workDetails">The work details.</param>
        public void UpdateWork(WorkViewModel workDetails)
        {
            var work = GetWorkById(workDetails.Id);
            if(work != null)
            {
                work.WorkTitle = workDetails.WorkTitle;
                work.Aim = workDetails.Aim;
                work.CityId = workDetails.CityId;
                work.FundRequired = workDetails.FundRequired;
                // map status, department, fund used etc
            }
            db.SaveChanges();
        }

        /// <summary>
        /// Gets the work by identifier.
        /// </summary>
        /// <param name="workId">The work identifier.</param>
        /// <returns></returns>
        public Work GetWorkById(int workId)
        {
            return db.Works.Where(x => x.Id == workId).FirstOrDefault();
        }
    }
}
