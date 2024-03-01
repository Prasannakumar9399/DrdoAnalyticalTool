const User = require('../db/user');
const Ill = require('../db/previousill');
const AllSymptom = require('../db/symptoms');
module.exports.saveUser = (req, res, next) => {
    var mon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var symptomsArr = Object.keys(req.body.sympData);
    var big = [];
    for (let i = 0; i < symptomsArr.length; i++) {
        var monObj = Object.values(req.body.sympData)[i];
        temp = Object.values(monObj);
        temp.unshift(symptomsArr[i]);
        big.push(temp);
    }

    const new_user = new User(req.body.demoData);
    const pre = new Ill(req.body.demoData);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Please provide all required field' });
    } else {
        User.create(new_user, function (err, user) {
            if (err)
                res.send(err);
            else {
                for (let i = 0; i < big.length; i++) {
                    big[i].push(user);
                }

                AllSymptom.saveSymptoms(big, (err, result) => {
                    if (err)
                        res.send(err);
                });
                pre.user_id = user;

                Ill.create(pre, function (err, result) {
                    if (err)
                        res.send(err);
                    else {
                        res.json({ error: false, message: " successfully added!", data: 1 });
                    }
                })

            }
        });
    }
}