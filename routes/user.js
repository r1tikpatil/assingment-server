const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.post("/submit", (req, res) => {
  const { name1, employeeId, designation, organization, dob, gender, image } =
    req.body;
  const user = new User();
  user.name = name1;
  user.employeeId = employeeId;
  user.designation = designation;
  user.organization = organization;
  user.dob = dob;
  user.gender = gender;
  user.pic = image;

  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes();
  var dateTime = date + " " + time;
  user.toe = dateTime;

  var db = new Date(dob);
  var month_diff = Date.now() - db.getTime();
  var age_dt = new Date(month_diff);
  var year = age_dt.getUTCFullYear();
  var age = Math.abs(year - 1970);
  user.age = age;

  user.save().then(() => {
    res.status(200).json({
      message: "user succesfully created",
    });
  });
});

router.get("/alluser", (req, res) => {
  User.find({}, (err, user) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    return res.status(200).json({
      users: user,
    });
  });
});

router.post("/search", (req, res) => {
  let userPattern = new RegExp("^" + req.body.name);

  User.find({ name: { $regex: userPattern } })
    .then((user) =>
      res.json({
        users: user,
      })
    )
    .catch((err) => {
      console.log(err);
    });
});

setInterval(() => {
  User.find({}, (err, users) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    // console.log("%");
    users.map((user) => {
      const a = user.age;
      user.age = a + 1;
      user.save();
    });
  });
}, 3600000);

module.exports = router;
