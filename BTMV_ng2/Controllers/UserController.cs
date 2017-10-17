using BTMV.Db;
using BTMV_Core.Interfaces;
using BTMV_Model.DataModel;
using BTMV_Model.ViewModel;
using BTMV.Common;
using System;
using System.Collections.Generic;
using System.Web.Http;
using BTMV_ng2.Filters;

namespace BTMV_ng2.Controllers
{
    public class UserController : CommonController
    {
        private readonly IWorkService _workService;

        public UserController(IWorkService workService)
        {
            _workService = workService;
        }

        [CustomAuthorize]
        [HttpPost]
        public IHttpActionResult AddWork(WorkViewModel workModel)
        {
            try
            {
                var db = new BTMVContext();

                if (!ModelState.IsValid)
                {
                    return Json(new { isSuccess = false, message = BTMV.Common.BTMV.DataErrorMsg });
                }

                var work = new Work
                {
                    WorkTitle = workModel.workTitle,
                    Aim = workModel.aim,
                    CityId = workModel.cityId,
                    FundRequired = workModel.fundRequired,
                    UserId = workModel.userId,
                    DepartmentId = (int)BTMV_Enums.Department.Education,
                    WorkStatusId = (int)BTMV_Enums.WorkStatus.Pending,
                    AddedOn = DateTime.Now
                };

                _workService.SaveNewWork(work);
                //db.Works.Add(work);
                //db.SaveChanges();

                return Json(new { isSuccess = true, message = BTMV.Common.BTMV.WorkAddedSuccessMsg });
            }
            catch (Exception ex)
            {
                Elmah.ErrorSignal.FromCurrentContext().Raise(ex);
                return Json(new { isSuccess = false, message = BTMV.Common.BTMV.CommonErrorMsg });
            }
        }

        [CustomAuthorize]
        [HttpPost]
        public IHttpActionResult GetUserWorks(IdDemo param)
        {
            try
            {
                var db = new BTMVContext();

                if (param.Id > 0)
                {
                    var userWorks = _workService.GetWorksByUserId(param.Id);                    
                    List<WorkViewModel> workDetails = new List<WorkViewModel>();

                    foreach (var userWork in userWorks)
                    {
                        var workDetail = new WorkViewModel
                        {
                            workTitle = userWork.WorkTitle,
                            aim = userWork.Aim,
                            fundRequired = userWork.FundRequired,
                            departmentName = userWork.Department.DeptartmentName,
                            stateName = userWork.City.State.StateName,
                            cityName = userWork.City.CityName,
                            addedOn = userWork.AddedOn,
                            workStatus = userWork.WorkStatus.WorkStatusName
                        };
                        
                        workDetails.Add(workDetail);
                    };

                    return Json(new { isSuccess = true, userWorks = workDetails });
                }

                return Json(new { isSuccess = false, message = BTMV.Common.BTMV.CommonErrorMsg });
            }
            catch (Exception ex)
            {
                Elmah.ErrorSignal.FromCurrentContext().Raise(ex);
                return Json(new { isSuccess = false, message = BTMV.Common.BTMV.CommonErrorMsg });
            }
        }

        [CustomAuthorize]
        [HttpPost]
        public IHttpActionResult AddReportedIssue(ReportedIssueViewModel reportedIssue)
        {
            try
            {
                if (reportedIssue == null)
                {
                    return Json(new { isSuccess = false, message = BTMV.Common.BTMV.DataErrorMsg });
                }

                if (!ModelState.IsValid)
                {
                    return Json(new { isSuccess = false, message = BTMV.Common.BTMV.DataErrorMsg });
                }

                var issueDetails = new ReportedIssue
                {
                    IssueTitle = reportedIssue.issueTitle,
                    IssueDetails = reportedIssue.issueDetails,
                    CityId = reportedIssue.cityId,
                    // DepartmentId = reportedIssue.departmentId,
                    DepartmentId = (int)BTMV_Enums.Department.Education,
                    AddedOn = DateTime.Now,
                    UserId = reportedIssue.userId,
                };

                _workService.SaveReportedIssue(issueDetails);
                return Json(new { isSuccess = true, message = BTMV.Common.BTMV.IssueAddedSuccessMsg });
            }
            catch (Exception ex)
            {
                Elmah.ErrorSignal.FromCurrentContext().Raise(ex);
                return Json(new { isSuccess = false, message = BTMV.Common.BTMV.IssueAddedFailureMsg });
            }
        }
    }
}