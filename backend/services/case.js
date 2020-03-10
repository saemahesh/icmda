/* eslint-disable no-console */
let moment = require("moment");
let _ = require("lodash");
let async = require("async");
let today = moment().toDate();
let bcrypt = require("bcryptjs");

exports.dashboard = (dashboard, callback) => {
  let roleName;
  console.log("dashboardReq", dashboard);
  if (dashboard.fromDate) {
    dashboard.fromDate =
      dashboard.fromDate.year +
      "-" +
      dashboard.fromDate.month +
      "-" +
      dashboard.fromDate.day;
  } else {
    dashboard.fromDate = null;
  }
  if (dashboard.toData) {
    dashboard.toData =
      dashboard.toData.year +
      "-" +
      dashboard.toData.month +
      "-" +
      dashboard.toData.day;
  } else {
    dashboard.toData = null;
  }
  if (
    dashboard.view &&
    dashboard.view.length &&
    dashboard.view[0].name == "READ"
  ) {
    dashboard.view = "YES";
  } else if (
    dashboard.view &&
    dashboard.view.length &&
    dashboard.view[0].name == "UNREAD"
  ) {
    dashboard.view = "NO";
  } else {
    dashboard.view = null;
  }
  let org_ids = [];
  if (dashboard.orgids) {
    dashboard.orgids.forEach(item => {
      org_ids.push(item.id);
    });
  }
  if (org_ids.length) {
    dashboard.orgids = org_ids.join(",");
  } else {
    dashboard.orgids = null;
  }
  if (dashboard.status == "ALL") {
    dashboard.status = null;
  }
  if (!dashboard.orderByColumn) {
    dashboard.orderByColumn = "P.petitionDate";
  }
  if (dashboard.pageNumber >= 1) {
    dashboard.offset = (dashboard.pageNumber - 1) * 20;
    dashboard.limit = 20;
  } else {
    dashboard.offset = 0;
    dashboard.limit = 10000;
  }
  if (!dashboard.type) {
    dashboard.type = "desc";
  }
  if (dashboard.userId) {
    executeQuery.queryForAll(
      sqlQueryMap["getRole"],
      [
        dashboard.userId //userId
      ],
      (err, result) => {
        if (err) {
          callback(new Error(err), null);
          console.log("gud mrng");
        } else {
          console.log("role-----------", result);
          console.log("dashboard---------", dashboard);
          roleName = result[0].name;
          console.log("--------------------------->", roleName);
          let superAdmin = ["CP", "CCC", "JCP", "DCP-ADMN", "ACP-CSB"];
          let isSuperAdmin = false;
          for (let i = 0; i < superAdmin.length; i++) {
            if (superAdmin[i] === roleName) {
              isSuperAdmin = true;
            }
          }
          console.log("super", isSuperAdmin);
          let lowerLevel = [
            "SI",
            "CI",
            "INS",
            "RI-ADMN",
            "RI-MTO",
            "RI-WELFARE",
            "RI-HOME",
            "HC",
            "RI-HOME GUARDS",
            "RI CSW"
          ];
          let isLowerLevel = false;
          for (let i = 0; i < lowerLevel.length; i++) {
            if (lowerLevel[i] === roleName) {
              isLowerLevel = true;
            }
          }
          console.log("lower", isLowerLevel);

          try {
            if (isSuperAdmin) {
              executeQuery.queryForAll(
                sqlQueryMap["CPDashboard"],
                [
                  dashboard.userId, //userId
                  dashboard.fromDate, //StartpetitionDate
                  dashboard.toData, //EndpetitionDate
                  dashboard.view, //isVeiw
                  dashboard.success, //var_isSuccess
                  dashboard.orgids, //orgId
                  dashboard.status, //Status
                  dashboard.searchValue, //searchValue
                  dashboard.orderByColumn, //columnName
                  dashboard.type, //OrderType
                  dashboard.offset, //Offset
                  dashboard.limit //limit
                ],
                (err, result) => {
                  console.log("dashboardDataDateOrg Query Error ", err);
                  if (err) {
                    callback(new Error(err), null);
                  } else {
                    callback(null, result);
                  }
                }
              );
            } else {
              if (isLowerLevel) {
                executeQuery.queryForAll(
                  sqlQueryMap["SiDashboardData"],
                  [
                    dashboard.userId, //userId
                    dashboard.fromDate, //StartpetitionDate
                    dashboard.toData, //EndpetitionDate
                    dashboard.view, //isVeiw
                    dashboard.success, //var_isSuccess
                    // dashboard.orgids, //orgId
                    // dashboard.status, //Status
                    dashboard.searchValue, //searchValue
                    dashboard.orderByColumn, //columnName
                    dashboard.type, //OrderType
                    dashboard.offset, //Offset
                    dashboard.limit //limit
                  ],
                  (err, result) => {
                    console.log("dashboardDataDateOrg Query Error ", err);
                    if (err) {
                      callback(new Error(err), null);
                    } else {
                      callback(null, result);
                    }
                  }
                );
              } else {
                executeQuery.queryForAll(
                  sqlQueryMap["NonCPDashboard"],
                  [
                    dashboard.userId, //userId
                    dashboard.fromDate, //StartpetitionDate
                    dashboard.toData, //EndpetitionDate
                    dashboard.view, //isVeiw
                    dashboard.success, //var_isSuccess
                    dashboard.orgids, //orgId
                    dashboard.status, //Status
                    dashboard.searchValue, //searchValue
                    dashboard.orderByColumn, //columnName
                    dashboard.type, //OrderType
                    dashboard.offset, //Offset
                    dashboard.limit //limit
                  ],
                  (err, result) => {
                    console.log("dashboardDataDateOrg Query Error ", err);
                    if (err) {
                      callback(new Error(err), null);
                    } else {
                      callback(null, result);
                    }
                  }
                );
              }
            }
          } catch (e) {
            callback(new Error(e), null);
            console.log("Dashboard Catch Error ", e);
          }
        }
      }
    );
  } else {
    err => {
      if (err) {
        callback(new Error(err), null);
      }
    };
  }
};

exports.createComplaint = (complaint, callback) => {
  console.log("createComplaint", complaint);
  try {
    if (complaint.dateOfBirth) {
      complaint.dateOfBirth = moment(
        `${complaint.dateOfBirth.year}-${complaint.dateOfBirth.month}-${
          complaint.dateOfBirth.day
        } 00:00:00`
      ).format("YYYY-MM-DD 00:00:00");
    }
    if (complaint.createdDate) {
      let petitionTime = moment().format("HH:mm:ss");
      let petitionDate = moment(
        `${complaint.createdDate.year}-${complaint.createdDate.month}-${
          complaint.createdDate.day
        }`
      ).format("YYYY-MM-DD");
      complaint.createdDate = petitionDate + " " + petitionTime;
    }
    if (complaint.targetDate) {
      complaint.targetDate = moment(
        `${complaint.targetDate.year}-${complaint.targetDate.month}-${
          complaint.targetDate.day
        } 00:00:00`
      ).format("YYYY-MM-DD 00:00:00");
    }
    let year = moment().format("YYYY");
    // console.log("year",year);
    complaint.id = complaint.id + "-" + year;
    // console.log("complaint",complaint.id);
    executeQuery.queryForAll(
      sqlQueryMap["petitionerDetails"],
      [
        complaint.name,
        complaint.gender,
        complaint.additional.fatherHusbandGuardianName,
        complaint.dateOfBirth,
        complaint.age,
        complaint.additional.caste,
        complaint.cellNo,
        today,
        complaint.address
      ],
      (err, result1) => {
        if (err) {
          callback(new Error(err), null);
          console.log("complaintErr", err);
        } else {
          async.parallel(
            {
              pititionDetails: pititionDetailscallback => {
                executeQuery.queryForAll(
                  sqlQueryMap["petitionDetails"],
                  [
                    complaint.id,
                    result1.insertId,
                    complaint.policeStation_division_cricle,
                    complaint.additional.source,
                    complaint.subject,
                    complaint.briefFactsOfPetition,
                    complaint.additional.severity,
                    complaint.isVisited,
                    complaint.orderByCommisioner,
                    complaint.createdDate,
                    complaint.targetDate,
                    complaint.actionToBeTaken,
                    complaint.response,
                    complaint.remarks,
                    "PENDING",
                    complaint.additional.fileType,
                    complaint.additional.fileSubType,
                    complaint.file,
                    complaint.additional.fileDescription,
                    today,
                    complaint.userId
                  ],
                  (err, result2) => {
                    if (err) {
                      pititionDetailscallback(new Error(err), null);
                    } else {
                      pititionDetailscallback(null, result2);
                    }
                  }
                );
              },
              pititionerAddress: pititionerAddresscallback => {
                console.log("nandu", complaint.additional);
                executeQuery.queryForAll(
                  sqlQueryMap["petitionerAddress"],
                  [
                    result1.insertId,
                    complaint.additional.presentCountry,
                    complaint.additional.presentLocality,
                    complaint.additional.presentWardColony,
                    complaint.additional.presentAreaMandal,
                    complaint.additional.presentStateUT,
                    complaint.additional.presentDistrictCommissionerate,
                    complaint.additional.presentPoliceStation,
                    today
                  ],
                  (err, result3) => {
                    if (err) {
                      pititionerAddresscallback(new Error(err), null);
                      console.log("petitionerAddress", err);
                    } else {
                      pititionerAddresscallback(null, result3);
                    }
                  }
                );
              },
              respondentDetails: respondentDetailscallback => {
                executeQuery.queryForAll(
                  sqlQueryMap["respondantDetails"],
                  [result1.insertId, complaint.additional.res_name, today],
                  (err, result4) => {
                    if (err) {
                      respondentDetailscallback(new Error(err), null);
                      console.log("respondentDetails", err);
                    } else {
                      respondentDetailscallback(null, result4);
                    }
                  }
                );
              }
            },
            (err, result5) => {
              if (err) {
                callback(err, null);
                console.log("createComplaintErr", err);
              } else {
                // console.log("5",result);
                // executeQuery.queryForAll(
                //   sqlQueryMap["viewByUser"],
                //   [result.pititionDetails.insertId, complaint.createdDate],
                //   (err, view) => {
                //     if (err) {
                //       callback(err, null);
                //     } else {
                //       result.vewCase = view;
                callback(null, result5);
                //     }
                //   }
                // );
              }
            }
          );
        }
      }
    );
  } catch (error) {
    console.log("catch error", error);
    callback(error, null);
  }
};

exports.updateComplaint = (updateComplaint, callback) => {
  console.log("updateComplaint", updateComplaint);
  let today = moment().toDate();

  if (updateComplaint.targetDate && updateComplaint.targetDate !== null) {
    if (updateComplaint.targetDate.year) {
      updateComplaint.targetDate =
        updateComplaint.targetDate.year +
        "-" +
        updateComplaint.targetDate.month +
        "-" +
        updateComplaint.targetDate.day;
    } else {
      updateComplaint.targetDate = new Date(updateComplaint.targetDate);
    }
  }
  if (updateComplaint.dateOfBirth) {
    updateComplaint.dateOfBirth = moment(
      `${updateComplaint.dateOfBirth.year}-${
        updateComplaint.dateOfBirth.month
      }-${updateComplaint.dateOfBirth.day} 00:00:00`
    ).format("YYYY-MM-DD 00:00:00");
  }
  if (updateComplaint.createdDate) {
    let petitionTime = moment().format("HH:mm:ss");
    let petitionDate = moment(
      `${updateComplaint.createdDate.year}-${
        updateComplaint.createdDate.month
      }-${updateComplaint.createdDate.day}`
    ).format("YYYY-MM-DD");
    updateComplaint.createdDate = petitionDate + " " + petitionTime;
  }
  console.log("created date", updateComplaint.createdDate);
  executeQuery.queryForAll(
    sqlQueryMap["UpdateComplaint"],
    [
      updateComplaint.briefFactsOfPetition,
      updateComplaint.isVisited,
      updateComplaint.orderByCommisioner,
      updateComplaint.actionToBeTaken,
      updateComplaint.targetDate,
      updateComplaint.response,
      updateComplaint.remarks,
      updateComplaint.file,
      today,
      updateComplaint.userId,
      updateComplaint.policeStation_division_cricle,
      updateComplaint.subject,
      updateComplaint.createdDate,
      updateComplaint.name,
      updateComplaint.cellNo,
      updateComplaint.address,
      today,
      updateComplaint.userId,
      updateComplaint.dateOfBirth,
      updateComplaint.age,
      updateComplaint.gender,
      updateComplaint.id
    ],
    (err, result) => {
      if (err) {
        console.log("updateComplaintErr", err);
        callback(new Error(err), null);
      } else {
        callback(null, result);
      }
    }
  );
};

exports.searchByReceipt = (searchReceipt, callback) => {
  console.log("searchByReceipt", searchReceipt);
  executeQuery.queryForAll(
    sqlQueryMap["getByCaseNo"],
    [searchReceipt.receipt, searchReceipt.receipt, searchReceipt.receipt],
    (err, result) => {
      console.log(
        "searchByReceipt",
        err,
        result,
        moment().format("YYYY-MM-DD HH:MM:SS")
      );
      if (err) {
        console.log("searchReceipt err >", err);
        callback(new Error(err), null);
      } else {
        callback(null, result);
      }
    }
  );
};
/*
exports.completedCases = callback => {
  executeQuery.queryForAll(
    sqlQueryMap["getAllCompltedCase"],
    [],
    (err, result) => {
      console.log(
        "completedCase",
        err,
        result,
        moment().format("YYYY-MM-DD HH:MM:SS")
      );
      if (err) {
        callback(new Error(err), null);
        console.log("completedCase", err);
      } else {
        callback(null, result);
      }
    }
  );
};

exports.pendingCases = callback => {
  executeQuery.queryForAll(
    sqlQueryMap["getAllPendingCase"],
    [],
    (err, result) => {
      console.log(
        "pendingCase",
        err,
        result,
        moment().format("YYYY-MM-DD HH:MM:SS")
      );
      if (err) {
        callback(new Error(err), null);
        console.log("pendingCase", err);
      } else {
        callback(null, result);
      }
    }
  );
};


exports.searchCaseDate = (searchCase, callback) => {
  console.log("searchCaseDate", searchCase);
  searchCase.fromDate = moment(searchCase.fromDate).format("YYYY-MM-DD");
  searchCase.toDate = moment(searchCase.toDate).format("YYYY-MM-DD");
  executeQuery.queryForAll(
    sqlQueryMap["searchCaseDate"],
    [searchCase.fromDate, searchCase.toDate],
    (err, result) => {
      console.log(
        "searchCaseDate ",
        err,
        result,
        moment().format("YYYY-MM-DD HH:MM:SS")
      );
      if (err) {
        callback(new Error(err), null);
        console.log("searchDate", err);
      } else {
        callback(null, result);
      }
    }
  );
};

exports.addCommentFun = (addComment, callback) => {
  let today = moment().toDate();
  executeQuery.queryForAll(
    sqlQueryMap["addComment"],
    [
      addComment.userId,
      addComment.complaint_id,
      addComment.message,
      today,
      addComment.attachmentUrl
    ],
    (err, result) => {
      console.log(
        "addCommentFun",
        err,
        result,
        moment().format("YYYY-MM-DD HH:MM:SS")
      );
      if (err) {
        callback(new Error(err), null);
      } else {
        callback(null, result);
      }
      // user_id, complaint_id, message, comment_date;
    }
  );
};
*/
exports.addComment = (addComment, callback) => {
  executeQuery.insertAndReturnKey(
    sqlQueryMap["saveComments"],
    [
      addComment.comment,
      addComment.caseId,
      addComment.userId,
      addComment.attachmentUrl,
      moment().format("YYYY-MM-DD HH:mm:ss")
    ],
    (err, result) => {
      console.log(
        "addComment ",
        err,
        result,
        moment().format("YYYY-MM-DD HH:MM:SS")
      );
      if (err) {
        callback(new Error(err), null);
        console.log("profileData", err);
      } else {
        exports.newNotification(addComment, (err, result) => {
          console.log(
            "addComment_newNotification",
            err,
            result,
            moment().format("YYYY-MM-DD HH:MM:SS")
          );
          if (err) {
            callback(new Error(err), null);
            console.log("addcomment", err);
          } else {
            callback(null, result);
            // global.sendNotify = globalObject;
          }
        });
      }
    }
  );
};
/*
exports.getCommentByCase = (getComment, callback) => {
  console.log("commentByCase", getComment);
  async.parallel({
      comment: commentcallback => {
        executeQuery.queryForAll(
          sqlQueryMap["getCommentBycaseId"],
          [getComment.complaint_id],
          (err, result) => {
            console.log(
              "getCommentBYcase",
              err,
              result,
              moment().format("YYYY-MM-DD HH:MM:SS")
            );
            if (err) {
              commentcallback(new Error(err), null);
              console.log("getComment", err);
            } else {
              commentcallback(null, result);
            }
          }
        );
      },
      user: usercallback => {
        executeQuery.queryForAll(
          sqlQueryMap["getUserDetails"],
          [getComment.userId],
          (err, result) => {
            console.log(
              "getCommentBYcase_userCallback",
              err,
              result,
              moment().format("YYYY-MM-DD HH:MM:SS")
            );
            if (err) {
              usercallback(new Error(err), null);
              console.log("user", err);
            } else {
              usercallback(null, result);
            }
          }
        );
      }
    },
    (err, result) => {
      console.log(
        "getCommentBYcase_ASYNCParallel",
        err,
        result,
        moment().format("YYYY-MM-DD HH:MM:SS")
      );
      if (err) {
        callback(err, null);
        console.log("commentCase", err);
      } else {
        let obj = {};
        obj.fullName = result.user[0].fullName;
        obj.comment_date = result.comment[0].comment_date;
        obj.message = result.comment[0].message;
        callback(null, obj);
      }
    }
  );
};
*/
exports.getUsersByRoleFun = (userNameAtComment, callback) => {
  console.log("userRole", userNameAtComment);
  executeQuery.queryForAll(
    sqlQueryMap["getUsersByRole"],
    [
      userNameAtComment.userId,
      userNameAtComment.userId,
      userNameAtComment.userId,
      userNameAtComment.userId,
      userNameAtComment.userId,
      userNameAtComment.userId,
      userNameAtComment.userId,
      userNameAtComment.userId
    ],
    (err, result) => {
      console.log(
        "getUserByRole ",
        err,
        result,
        moment().format("YYYY-MM-DD HH:MM:SS")
      );
      if (err) {
        callback(err, null);
        console.log("getUserbyRole", err);
      } else {
        callback(null, result);
      }
    }
  );
};

exports.newNotification = (notification, callback) => {
  console.log("newNotification", notification);
  async.eachSeries(
    notification.mentionedUser,
    (mentions, outCb) => {
      executeQuery.queryForAll(
        sqlQueryMap["notificationData"],
        [
          notification.caseId,
          mentions.id,
          notification.userId,
          "NO",
          "COMMENT",
          today
        ],
        (err, result) => {
          console.log(
            "newNOtification",
            err,
            result,
            moment().format("YYYY-MM-DD HH:MM:SS")
          );
          if (err) {
            outCb(err);
            console.log("newNotificationErr", err);
          } else {
            executeQuery.queryForAll(
              sqlQueryMap["socketNotification"],
              [result.insertId],
              (err, result) => {
                console.log(
                  "newNOtification_ASYNCEACH",
                  err,
                  result,
                  moment().format("YYYY-HH-DD HH:MM:SS")
                );
                if (err) {
                  outCb(err);
                  console.log("commit Selection", err);
                } else {
                  // console.log('Socket Emit',result)
                  global.io.emit("sendNotify", result);
                  outCb(null);
                }
              }
            );
          }
        }
      );
    },
    err => {
      if (err) {
        callback(err, null);
        console.log("asyncEach", err);
      } else {
        callback(null, {});
        console.log("No Error");
      }
    }
  );
};

exports.updateNotification = (updateNotification, callback) => {
  console.log("updateNotification", updateNotification);
  executeQuery.queryForAll(
    sqlQueryMap["updateNotification"],
    [updateNotification.isView, updateNotification.id],
    (err, result) => {
      console.log(
        "updateNotification ",
        err,
        result,
        moment().format("YYYY-MM-DD HH:MM:SS")
      );
      if (err) {
        callback(err, null);
        console.log("updateNotificationErr", err);
      } else {
        callback(null, result);
      }
    }
  );
};

exports.getNotificationDataForSocket = (comment, callback) => {
  console.log("getNotification", comment);
  let idArr = [];
  let recordArr = [];
  idArr = _.map(comment.mentionedUser, "id");
  async.each(
    idArr,
    (user, cb) => {
      console.log("User", idArr);
      executeQuery.queryForAll(
        sqlQueryMap["getNotificationById"],
        [user],
        (err, result) => {
          console.log(
            "getNotification",
            err,
            result,
            moment().format("YYYY-MM-DD HH:MM:SS")
          );
          if (err) {
            cb(err);
            console.log("getNotificationErr", err);
          } else {
            recordArr = recordArr.concat(result);
            cb(null);
          }
        }
      );
    },
    err => {
      if (err) {
        callback(err, null);
        console.log("getNotification_ASYNC ERROR", err);
      } else {
        callback(null, recordArr);
      }
    }
  );
};

exports.getNotificationDataForDash = (notification, callback) => {
  console.log("getNotificationDash", notification);
  executeQuery.queryForAll(
    sqlQueryMap["getNotificationById"],
    [notification.userId],
    (err, result) => {
      console.log(
        "getNOtificationDash",
        err,
        result,
        moment().format("YYYY-MM-DD HH:MM:SS")
      );
      if (err) {
        callback(err, null);
        console.log("notificationDash", err);
      } else {
        callback(null, result);
      }
    }
  );
};

/*
exports.getDesignations = (designation, callback) => {
  console.log("getDesignations", designation);
  executeQuery.queryForAll(sqlQueryMap["getDesignation"],[], (err, result) => {
    console.log('getDesignations ',err,result,moment().format('YYYY-MM-DD HH:MM:SS'))
    if (err) {
      callback(err, null);
      console.log("designations", err);
    } else {
      callback(null, result);
    }
  });
};*/

exports.updateViewByUser = (updateView, callback) => {
  console.log("updateViewByUser", updateView);
  executeQuery.queryForAll(
    sqlQueryMap["updateViewCase"],
    [
      updateView.userId,
      updateView.caseId,
      "YES",
      moment().format("YYYY-MM-DD HH:mm:ss")
    ],
    (err, result) => {
      console.log(
        "updateViewByUser",
        err,
        result,
        moment().format("YYYY-MM-DD HH:MM:SS")
      );
      if (err) {
        callback(err, null);
        console.log("updateCase", err);
      } else {
        callback(null, result);
      }
    }
  );
};

exports.getForwardList = (forwardList, callback) => {
  executeQuery.queryForAll(
    sqlQueryMap["getforwardList"],
    [forwardList.id, forwardList.id, forwardList.id],
    (err, result) => {
      console.log(
        "getForwardList ",
        err,
        result,
        moment().format("YYYY-MM-DD HH:MM:SS")
      );
      if (err) {
        callback(err, null);
        console.log("getforwardList Query Err", err);
      } else {
        callback(null, result);
      }
    }
  );
};

exports.forwardTo = (forwardCaseReq, callback) => {
  console.log("fjkdnaskjfna  ", sqlQueryMap["caseForwardTo"], forwardCaseReq);
  executeQuery.queryForAll(
    sqlQueryMap["caseForwardTo"],
    [
      forwardCaseReq.userId,
      forwardCaseReq.designationId,
      forwardCaseReq.caseId
    ],
    (err, result1) => {
      console.log(
        "forwardTO",
        err,
        result1,
        moment().format("YYYY-MM-DD HH:MM:SS")
      );
      if (err) {
        callback(new Error(err), null);
        console.log("forwardTo Query Error", err);
      } else {
        let today = moment().toDate();
        executeQuery.queryForAll(
          sqlQueryMap["notificationData"],
          [
            forwardCaseReq.caseId,
            forwardCaseReq.designationId,
            forwardCaseReq.userId,
            "NO",
            "FORWARD",
            today
          ],
          (err, result2) => {
            console.log(
              "forwardTONotification",
              err,
              result2,
              moment().format("YYYY-MM-DD HH:MM:SS")
            );
            if (err) {
              callback(new Error(err), null);
              console.log("forward Query Error", err);
            } else {
              executeQuery.queryForAll(
                sqlQueryMap["socketNotification"],
                [result2.insertId],
                (err, result3) => {
                  console.log(
                    "socketNotification",
                    err,
                    result3,
                    moment().format("YYYY-MM-DD HH:MM:SS")
                  );
                  if (err) {
                    callback(new Error(err), null);
                    console.log("forward Selection query Error", err);
                  } else {
                    // console.log('Socket Emit',result)
                    global.io.emit("sendNotify", result3);
                    callback(null, result3);
                  }
                }
              );
            }
          }
        );
      }
    }
  );
};

exports.rejectCase = (rejectCaseReq, callback) => {
  executeQuery.queryForAll(
    sqlQueryMap["rejectForwardCase"],
    [rejectCaseReq.caseId],
    (err, result1) => {
      console.log(
        "rejectForwardCase",
        err,
        result1,
        moment().format("YYYY-MM-DD HH:MM:SS")
      );
      if (err) {
        console.log("rejectCase Query error", err);
        callback(new Error(err), null);
      } else {
        let today = moment().toDate();
        executeQuery.queryForAll(
          sqlQueryMap["notificationData"],
          [
            rejectCaseReq.caseId,
            rejectCaseReq.designationId,
            rejectCaseReq.userId,
            "NO",
            "REJECT",
            today
          ],
          (err, result2) => {
            console.log(
              "rejectForwardCase_notificationData",
              err,
              result2,
              moment().format("YYYY-MM-DD HH:MM:SS")
            );
            if (err) {
              callback(new Error(err), null);
              console.log("rejectCaseNotificationData Query error", err);
            } else {
              executeQuery.queryForAll(
                sqlQueryMap["socketNotification"],
                [result2.insertId],
                (err, result3) => {
                  console.log(
                    "rejectForwardCase_socketNotification",
                    err,
                    result3,
                    moment().format("YYYY-MM-DD HH:MM:SS")
                  );
                  if (err) {
                    callback(new Error(err), null);
                    console.log("rejectCaseSelection Query error", err);
                  } else {
                    // console.log('Socket Emit',result)
                    global.io.emit("sendNotify", result3);
                    callback(null, result3);
                  }
                }
              );
            }
          }
        );
      }
    }
  );
};

exports.assignTo = (assignTo, callback) => {
  executeQuery.queryForAll(
    sqlQueryMap["assignCase"],
    [assignTo.stationId, assignTo.caseId],
    (err, result) => {
      console.log(
        "assignTo",
        err,
        result,
        moment().format("YYYY-MM-DD HH:MM:SS")
      );
      if (err) {
        callback(new Error(err), null);
        console.log("assignto query Error", err);
      } else {
        /*let today = moment().toDate();
        executeQuery.queryForAll(
          sqlQueryMap["assignNotification"],
          [assignTo.caseId, assignTo.userId, today, assignTo.stationId],
          (err, result) => {
            if (err) {
              callback(new Error(err),null);
            } else {
              let assignNotify = [
                {
                  id: result.insertedId,
                  caseId: assignTo.caseId,
                  stationId: assignTo.stationId,
                  userId: assignTo.userId
                }
              ];
              global.io.emit("sendNotify", assignNotify);*/
        callback(null, result);
        // }
        // }
        // );
      }
    }
  );
};

exports.isSuccess = (success, callback) => {
  console.log("success", success);
  executeQuery.queryForAll(
    sqlQueryMap["markAsSuccess"],
    [success.status, success.caseId],
    (err, result) => {
      console.log(
        "isSuccess",
        err,
        result,
        moment().format("YYYY-MM-DD HH:MM:SS")
      );
      if (err) {
        callback(err, null);
        console.log("marksuccess", err);
      } else {
        callback(null, result);
      }
    }
  );
};

/*
exports.isUnSuccess = (successStatus, callback) => {
  console.log("unsuccess", successStatus);
  executeQuery.queryForAll(
    sqlQueryMap["markAsSuccess"],
    [null, successStatus.caseId],
    (err, result) => {
      if (err) {
        callback(err, null);
        console.log("markunsuccess", err);
      } else {
        callback(null, result);
      }
    }
  );
};*/

exports.setReminder = (reminder, callback) => {
  console.log("setReminder", reminder);
  reminder.remindTime = moment(reminder.remindTime).format("HH:mm:ss");
  let setRemainder = reminder.remindDate + " " + reminder.remindTime;
  executeQuery.queryForAll(
    sqlQueryMap["setReminder"],
    [reminder.userId, setRemainder, reminder.caseId],
    (err, result) => {
      console.log(
        "setRemainder",
        err,
        result,
        moment().format("YYYY-MM-DD HH:MM:SS")
      );
      if (err) {
        callback(err, null);
        console.log("reminder", err);
      } else {
        callback(null, result);
      }
    }
  );
};

//Change Password
exports.changePassword = (password, callback) => {
  console.log("changePassword", password);
  executeQuery.queryForAll(
    sqlQueryMap["checkingPassword"],
    [password.userId],
    (err, result1) => {
      console.log(
        "change Password",
        err,
        result1,
        moment().format("YYYY-MM-DD HH:MM:SS")
      );
      if (err) {
        callback(err, null);
      } else {
        if (password.oldPassword === result1[0].password) {
          executeQuery.queryForAll(
            sqlQueryMap["changePassword"],
            [
              password.newPassword,
              (password.newisSuccessPassword = bcrypt.hashSync(
                password.newPassword,
                8
              )),
              moment().format("YYYY-MM-DD HH:mm:ss"),
              password.userId
            ],
            (err, result2) => {
              console.log(
                "HasPassword",
                err,
                result2,
                moment().format("YYYY-MM-DD HH:MM:SS")
              );
              if (err) {
                callback(new Error(err), null);
                console.log("changePasswordErr", err);
              } else {
                callback(null, result2);
              }
            }
          );
        } else {
          callback("false", null);
        }
      }
    }
  );
};

exports.validateReceipt = (receipt, callback) => {
  console.log("receiptVlidate", receipt);
  executeQuery.queryForAll(
    sqlQueryMap["validateReceipt"],
    [receipt.receiptId],
    (err, result) => {
      console.log("validateReceipt", err, result, moment().format());
      if (err) {
        callback(err, null);
        console.log("receipt", err);
      } else {
        callback(null, result.length);
      }
    }
  );
};
exports.getUserId = callback => {
  executeQuery.queryForAll(sqlQueryMap["getUserId"], [], (err, result) => {
    console.log("getUserId", err, moment().format("YYYY-MM-DD HH:MM:SS"));
    if (err) {
      callback(err, null);
      console.log("getUser", err);
    } else {
      let userIds = {};
      result.forEach(result => {
        userIds[result.id] = result.userName;
      });
      callback(null, userIds);
    }
  });
};

exports.userCreation = (newUser, callback) => {
  let today = moment().format("YYYY-MM-DD HH:MM:00");
  console.log("date ", today);
  userName = newUser.roles.name + " " + newUser.organization.name;
  console.log("userName ", userName);
  executeQuery.queryForAll(
    sqlQueryMap["userCreation"],
    [userName],
    (err, result) => {
      if (err) {
        callback(err, null);
      } else {
        userStatus = {
          status: "error",
          message: "this username is already existed"
        };
        console.log("result in usercreation ", result[0].result);
        if (result[0].result == 0) {
          executeQuery.queryForAll(
            sqlQueryMap["userTableInsert"],
            [userName, newUser.roles.id, newUser.createdPassword, today],
            (err, result) => {
              if (err) {
                console.log("err in insert into usertable ");
                callback(err, null);
              } else {
                console.log("result in insert into usertable ", result);
                executeQuery.queryForAll(
                  sqlQueryMap["userOrgTableInsert"],
                  [result.insertId, newUser.organization.name, today],
                  (err, result) => {
                    if (err) {
                      console.log("error in insert into userOrgtable ");
                      callback(new Error(err), null);
                    } else {
                      console.log(
                        "result in insert into userOrgtable ",
                        result
                      );
                      callback(null, result);
                    }
                  }
                );
              }
            }
          );
        } else {
          callback(null, userStatus);
        }
      }
    }
  );
};
