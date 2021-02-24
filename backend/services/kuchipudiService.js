let moment = require("moment");

exports.kuchipudiRegistration = (data, callback) => {
  let creationdate = getDefaultLongFormattedDate(new Date())
  let updationdate = getDefaultLongFormattedDate(new Date())
  var coupon = "1"
  try {
    executeQuery.queryForAll(
      sqlQueryMap["getPaymentHistoryById"],
      [data.code],
      (err, result) => {
        console.log("getPaymentHistoryById", err, result)
        if (result.length == 0) {
          return callback(err, "payment is not done");
        } else {
          {
            try {
              executeQuery.queryForAll(
                sqlQueryMap["getAvaliableSlotById"],
                [data.slot_id],
                (err, result) => {
                  console.log("getAvaliableSlotById", err, result)
                  if (result.length == 0) {
                    return callback(err, "slot is not avaliable");
                  } else {
                    {
                      // callback(err,result) register insert
                      executeQuery.queryForAll(
                        sqlQueryMap["kuchipudiRegistration"],
                        // code,name,email,slot_id,country,coupon,phone_number,creation_date,updation_date
                        [
                          data.code,
                          data.name,
                          data.email,
                          data.slot_id,
                          data.country,
                          coupon,
                          data.phone_number,
                          creationdate,
                          updationdate
                        ],
                        (err, result) => {
                          if (err) {
                            callback(err, null);
                          } else {
                            callback(null, result);
                            updateSlotTable(data.slot_id)
                            updatePaymentHistoryById(data.code)

                          }
                        }
                      );
                    }
                  }
                }
              );
            } catch (err) {
              if (err) {
                callback(err, null);
                console.log("Login Error", err);
              }
            }

          }
        }
      }
    );
  } catch (err) {
    if (err) {
      callback(err, null);
      console.log("Login Error", err);
    }
  }
};


exports.getAvaliableSlot = (slotType, callback) => {
  try {
    executeQuery.queryForAll(
      sqlQueryMap["getAvaliableSlot"],
      [slotType],
      (err, result) => {
        if (err) {
          callback(err, null);
        } else {
          {
            callback(err, result)
          }
        }
      }
    );
  } catch (err) {
    if (err) {
      callback(err, null);
      console.log("Login Error", err);
    }
    // eslint-disable-next-line no-console
  }
};

function getDefaultLongFormattedDate(date) {
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
}

// queriessss





function updateSlotTable(id) {
  // return moment(date).format('YYYY-MM-DD HH:mm:ss');
  executeQuery.queryForAll(
    sqlQueryMap["updateAvaliableSlot"],
    [id],
    (err, result) => {
      if (err) {
        // callback(err, null);
        // return err
      } else {
        {
          // callback(err,result)
          // return result
        }
      }
    }
  );
}


function updatePaymentHistoryById(id) {
  // return moment(date).format('YYYY-MM-DD HH:mm:ss');
  executeQuery.queryForAll(
    sqlQueryMap["updatePaymentHistoryById"],
    [id],
    (err, result) => {
      if (err) {
        // callback(err, null);
        // return err
      } else {
        {
          // callback(err,result)
          // return result
        }
      }
    }
  );
}