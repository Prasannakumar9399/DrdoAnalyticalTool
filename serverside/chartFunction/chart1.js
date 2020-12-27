const User = require('../db/user');

module.exports.helperChart1 = async (result) => {

    User.char1Data((err, res) => {
        let total = 0, no = 0, mild = 0, moderate = 0, severe = 0
        var arr = [];
        if (!err) {
            for (let i = 0; i < res.length; i++) {
                let score = parseInt(res[i].total_score);

                if (score <= 31) {
                    no++;
                }
                else if (score <= 62)
                    mild++;
                else if (score <= 93)
                    moderate++;
                else
                    severe++;
            }
            total = no + mild + moderate + severe;

            let perNo = (no / total) * 100;
            let perMil = (mild / total) * 100;
            let perMod = (moderate / total) * 100;
            let perSev = (severe / total) * 100;
            arr.push(perNo.toFixed(2));
            arr.push(perMil.toFixed(2));
            arr.push(perMod.toFixed(2));
            arr.push(perSev.toFixed(2));
            var char1DataObj = {
                "labels": ['No syptoms', 'Mild Symptoms', 'Moderate Symptoms', 'Severe Symptoms'],
                "datasets": [{ 'data': arr, 'label': 'Percentage' }]
            }
            result(null, char1DataObj);
        }
    })
    module.exports.helperChart2 = async (result) => {

        User.char2Data((err, data) => {
            if (!err) {
                let labelArr = [];
                let dataArr = [];
                for (let i = 0; i < data.length; i++) {
                    labelArr.push(data[i].symptoms);
                    dataArr.push(data[i].sum);
                }

                var char2DataObj = {
                    "labels": labelArr,
                    "datasets": [{ 'data': dataArr, 'label': 'Max Score' }]
                }
                result(null, char2DataObj);
            }
        })
    }
    module.exports.helperChart3 = async (result) => {
        let total = 0, no = 0, mild = 0, moderate = 0, severe = 0;
        let labelArr = ['Male No Symptoms', 'Male Mild Symptoms', 'Male Moderate Symptoms', 'Male Severe Symptoms'];
        let dataArr = [];
        User.char3Data((err, data) => {
            if (!err) {

                for (let i = 0; i < data.length; i++) {
                    let score = parseInt(data[i].total_score);

                    if (score <= 31) {
                        no++;
                    }
                    else if (score <= 62)
                        mild++;
                    else if (score <= 93)
                        moderate++;
                    else
                        severe++;
                }
                total = no + mild + moderate + severe;

                let perNo = (no / total) * 100;
                let perMil = (mild / total) * 100;
                let perMod = (moderate / total) * 100;
                let perSev = (severe / total) * 100;
                dataArr.push(perNo.toFixed(2));
                dataArr.push(perMil.toFixed(2));
                dataArr.push(perMod.toFixed(2));
                dataArr.push(perSev.toFixed(2));
            }

            var char3DataObj = {
                "labels": labelArr,
                "datasets": [{ 'data': dataArr, 'label': 'Percentage' }]
            }
            result(null, char3DataObj);

        })
    }
    module.exports.helperChart4 = async (result) => {
        let total = 0, no = 0, mild = 0, moderate = 0, severe = 0;
        let labelArr = ['Female No Symptoms', 'Female Mild Symptoms', 'Female Moderate Symptoms', 'Female Severe Symptoms'];
        let dataArr = [];
        User.char4Data((err, data) => {
            if (!err) {

                for (let i = 0; i < data.length; i++) {
                    let score = parseInt(data[i].total_score);

                    if (score <= 31) {
                        no++;
                    }
                    else if (score <= 62)
                        mild++;
                    else if (score <= 93)
                        moderate++;
                    else
                        severe++;
                }
                total = no + mild + moderate + severe;

                let perNo = (no / total) * 100;
                let perMil = (mild / total) * 100;
                let perMod = (moderate / total) * 100;
                let perSev = (severe / total) * 100;
                dataArr.push(perNo.toFixed(2));
                dataArr.push(perMil.toFixed(2));
                dataArr.push(perMod.toFixed(2));
                dataArr.push(perSev.toFixed(2));
            }

            var char4DataObj = {
                "labels": labelArr,
                "datasets": [{ 'data': dataArr, 'label': 'Percentage' }]
            }
            result(null, char4DataObj);

        })
    }
}
