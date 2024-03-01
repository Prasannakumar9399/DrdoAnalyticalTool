'use strict';
var dbConn = require('../config/dbconfig');

module.exports.saveSymptoms = function (value, result) {
    dbConn.query("INSERT INTO symptoms (symptoms,jan,feb,mar,apr,may,june,jul,aug,sep,oct,nov,dece,score,user_id) VALUES ?", [value], function (err, res) {
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

module.exports.getSymptom = function (id, result) {
    dbConn.query("Select * from symptoms where user_id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
// User.findAll = function (result) {
//     dbConn.query("Select * from user", function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//         }
//         else {
//             console.log('employees : ', res);
//             result(null, res);
//         }
//     });
// };
// Employee.update = function (id, employee, result) {
//     dbConn.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [employee.first_name, employee.last_name, employee.email, employee.phone, employee.organization, employee.designation, employee.salary, id], function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//         } else {
//             result(null, res);
//         }
//     });
// };
// Employee.delete = function (id, result) {
//     dbConn.query("DELETE FROM employees WHERE id = ?", [id], function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//         }
//         else {
//             result(null, res);
//         }
//     });
// };
// module.exports = Symptoms;