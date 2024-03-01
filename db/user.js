'use strict';
var dbConn = require('../config/dbconfig');
//User object create
var User = function (user) {
    this.fullname = user.fullName;
    this.gender = user.gender;
    this.age = user.age;
    this.height = user.height;
    this.weight = user.weight;
    this.city = user.city;
    this.pincode = user.pinCode;
    this.email = user.email;
    this.phonenumber = user.phone;
    this.total_score = user.total_score;
};
User.create = function (newUser, result) {
    dbConn.query("INSERT INTO user set ?", newUser, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            // console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
User.findAll = function (result) {

    var query = "select user_id,fullname,gender,age,height,weight,city,pincode,email,phonenumber,total_score from user ";
    dbConn.query(query, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            // console.log('result : ', res);
            result(null, res);
        }
    });
};

User.char1Data = function (result) {
    var query = 'Select total_score from user';

    dbConn.query(query, (err, res) => {
        if (err)
            result(null, err);
        else
            result(null, res);
    })
}

User.char2Data = function (result) {
    var query = 'SELECT symptoms,sum(score) as sum from symptoms  GROUP BY symptoms';

    dbConn.query(query, (err, res) => {
        if (err)
            result(null, err);
        else
            result(null, res);
    })
}
User.char3Data = function (result) {
    var query = 'select total_score from user where gender="M"';

    dbConn.query(query, (err, res) => {
        if (err)
            result(null, err);
        else
            result(null, res);
    })
}
User.char4Data = function (result) {
    var query = 'select total_score from user where gender="F"';

    dbConn.query(query, (err, res) => {
        if (err)
            result(null, err);
        else
            result(null, res);
    })
}

module.exports = User;