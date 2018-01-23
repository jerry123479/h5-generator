//show dao
const activityModel = require('../model/activitySchema');
exports.findActById = (actId)=>{
    return new Promise((resolve) => {
        activityModel.findOne({actId:actId})
        .exec(function(err,doc){
            resolve(doc);
        });
    });
}
