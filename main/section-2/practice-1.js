'use strict';

module.exports = function countSameElements(collection) {
    let result = [];
    collection.filter(function (item) {
        let obj = result.find((n) => n.key === item);
        if (obj) {
            obj.count++;
        } else {
            result.push({key:item,count:1});
        }
    });
    return result;
};
