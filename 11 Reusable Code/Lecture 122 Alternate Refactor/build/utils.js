"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    //  28/10/2018
    const dateToParts = dateString.split('/').map((value) => {
        return parseInt(value);
    });
    return new Date(dateToParts[2], dateToParts[1] - 1, dateToParts[0]);
};
exports.dateStringToDate = dateStringToDate;
