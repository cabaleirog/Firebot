"use strict";

const moment = require("moment");

const model = {
    definition: {
        handle: "time",
        description: "Outputs the current time."
    },
    evaluator: (_, template = 'h:mm a') => {
        let now = moment();
        return now.format(template.toString());
    }
};

module.exports = model;