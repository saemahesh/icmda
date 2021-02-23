let moment = require("moment");

exports.kuchipudiRegistration = (data, callback) => {
  let today = getDefaultLongFormattedDate(new Date())
  console.log("data.formValues",data,today)
  // name,email,slot_id,country,coupon,phone_number,creation_date,updation_date
  // executeQuery.queryForAll(
  //   sqlQueryMap["kuchipudiRegistration"],
  //   [
  //    data.name,
  //    data.email,
  //    data.slot_id,
  //    data.country,
  //    data.coupon,
  //    data.phone_number,
  //    today,
  //    today      
  //   ],
  //   (err, result) => {
  //     if (err) {
  //       callback(err, null);
  //     } else {
  //       data.formValues.id = result.insertId;
  //       this.sendMail(data)
  //      console.log('result ', result.insertId)
  //       callback(null, result);
  //     }
  //   }
  // );
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
            callback(err,result)
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