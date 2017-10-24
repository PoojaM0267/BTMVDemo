using BTMV.Db;
using BTMV_Core.Interfaces;
using BTMV_Model.ViewModel;
using BTMV_ng2.Filters;
using System;
using System.Collections.Generic;
using System.Web.Http;

namespace BTMV_ng2.Controllers
{
    public class AdminController : CommonController
    {
        private readonly IAccountService _accountService;
        private readonly IWorkService _workService;
        private BTMVContext db = new BTMVContext();

        public AdminController(IWorkService workService, IAccountService accountService)
        {
            _workService = workService;
            _accountService = accountService;
        }

        [CustomAuthorize]
        [HttpPost]
        public IHttpActionResult GetWorkRequests(IdDemo param)
        {
            try
            {
                var db = new BTMVContext();
                var workRequests = _workService.GetWorkRequests();
                List<WorkViewModel> workDetails = new List<WorkViewModel>();

                foreach (var work in workRequests)
                {
                    var workDetail = new WorkViewModel
                    {
                        workTitle = work.WorkTitle,
                        aim = work.Aim,
                        fundRequired = work.FundRequired,
                        departmentName = work.Department.DeptartmentName,
                        stateName = work.City.State.StateName,
                        cityName = work.City.CityName,
                        addedOn = work.AddedOn,
                        userId = work.UserId,
                        id = work.Id
                    };

                    //todo: refactor this by making user id in WORKs a FK
                    var user = _accountService.GetUserById(work.UserId);
                    workDetail.addedBy = user.FirstName + " " + user.LastName;

                    workDetails.Add(workDetail);
                };

                return Json(new { isSuccess = true, workRequests = workDetails });
            }
            catch (Exception ex)
            {
                Elmah.ErrorSignal.FromCurrentContext().Raise(ex);
                return Json(new { isSuccess = false, message = BTMV.Common.BTMV.CommonErrorMsg });
            }
        }

        [CustomAuthorize]
        [HttpPost]
        public IHttpActionResult RejectWorkRequest(IdDemo param)
        {
            try
            {
                if(param.Id <= 0)
                {
                    return Json(new { isSuccess = false, message = BTMV.Common.BTMV.CommonErrorMsg });
                }

                _workService.RejectWorkRequest(param.Id);
                return Json(new { isSuccess = true, message = BTMV.Common.BTMV.WorkRejectionMsg });
            }
            catch (Exception ex)
            {
                Elmah.ErrorSignal.FromCurrentContext().Raise(ex);
                return Json(new { isSuccess = false, message = BTMV.Common.BTMV.CommonErrorMsg });
            }
        }
    }
}