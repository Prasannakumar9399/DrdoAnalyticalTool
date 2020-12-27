const User = require('../db/user');
const Ill = require('../db/previousill');
const symp = require('../db/symptoms');
const HelperChart1 = require('../chartFunction/chart1');
module.exports.getAllUser = (req, res) => {
    User.findAll((err, data) => {
        if (err) {
            res.send(err);
            console.log(err);
        } else {
            res.send({ user_data: data });
        }
    });
}
module.exports.getPrevIll = (req, res) => {
    Ill.findById(req.params.id, (err, data) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(data);
        }
    })
}
module.exports.getSymptom = (req, res) => {
    const errMsg = {};
    symp.getSymptom(req.params.id, (err, data) => {
        if (err) {
            errMsg.error = true;
            errMsg.msg = err;
            res.send(errMsg);
        }
        else {
            res.send(data);
        }
    })
}
module.exports.getAllCharInfo = async (req, res) => {

    var responseData = {
        "status": "True",
        "message": "Successfully got chart Info !!",
        "data": {
            "chart1": "",
            "chart2": "",
            "chart3": "",
            "chart4": "",
        }
    }
    HelperChart1.helperChart1((err, data) => {
        if (!err) {
            responseData.data.chart1 = data;
        }
        HelperChart1.helperChart2((err, data1) => {
            if (!err) {
                responseData.data.chart2 = data1;
            }
            HelperChart1.helperChart3((err, data2) => {
                if (!err) {
                    responseData.data.chart3 = data2;
                }
                HelperChart1.helperChart4((err, data3) => {
                    if (!err) {
                        responseData.data.chart4 = data3;
                        res.send(responseData);
                    }
                })
            })

        })

    })

}
