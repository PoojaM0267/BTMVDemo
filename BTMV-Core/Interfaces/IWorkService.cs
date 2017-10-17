using BTMV_Model.DataModel;
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
    }
}
