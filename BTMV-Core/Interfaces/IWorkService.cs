using BTMV_Model.DataModel;
using BTMV_Model.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BTMV_Core.Interfaces
{
    public interface IWorkService
    {
        /// <summary>
        /// Gets the works by user identifier.
        /// </summary>
        /// <param name="userId">The user identifier.</param>
        /// <returns></returns>
        IEnumerable<Work> GetWorksByUserId(int userId);

        /// <summary>
        /// Saves the new work.
        /// </summary>
        /// <param name="work">The work.</param>
        void SaveNewWork(Work work);

        /// <summary>
        /// Saves the reported issue.
        /// </summary>
        /// <param name="reportedIssue">The reported issue.</param>
        void SaveReportedIssue(ReportedIssue reportedIssue);

        /// <summary>
        /// Updates the work.
        /// </summary>
        /// <param name="workDetails">The work details.</param>
        void UpdateWork(WorkViewModel workDetails);

        /// <summary>
        /// Gets the work by identifier.
        /// </summary>
        /// <param name="workId">The work identifier.</param>
        /// <returns></returns>
        Work GetWorkById(int workId);

        /// <summary>
        /// Deletes the work by identifier.
        /// </summary>
        /// <param name="workId">The work identifier.</param>
        void DeleteWorkById(int workId);

        /// <summary>
        /// Gets the work requests.
        /// </summary>
        /// <returns></returns>
        IEnumerable<Work> GetWorkRequests();

        /// <summary>
        /// Rejects the work request.
        /// </summary>
        /// <param name="workId">The work identifier.</param>
        void RejectWorkRequest(int workId);
    }
}
