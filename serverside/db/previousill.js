'use strict';
var dbConn = require('../config/dbconfig');
//Prev Illness object create
var PrevIll = function (user) {
    this.asthama = user.prevAshthama;
    this.hypertension = user.prevHypertension;
    this.fibrosis = user.prevFibrosis;
    this.obesity = user.prevObesity;
    this.user_id = user.user_id;
};
PrevIll.create = function (newUser, result) {
    dbConn.query("INSERT INTO previousill set ?", newUser, function (err, res) {
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

PrevIll.findById = function (id, result) {
    dbConn.query("Select  asthama, hypertension, fibrosis, obesity from previousill where user_id = ? ", id, function (err, res) {
        if (err) {
            // console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
// Employee.findAll = function (result) {
//     dbConn.query("Select * from employees", function (err, res) {
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
module.exports = PrevIll;