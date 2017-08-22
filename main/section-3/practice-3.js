'use strict';
function summarize(collection) {
    let result = [];
    collection.filter(function (item){
        let obj = result.find((n) => n.key === item);
        if (obj) {
            obj.count++;
        } else {
            result.push({key: item, count: 1});
        }
    });
    return result;
}

function discount(collection, promotionItems) {
    return collection.map(function (item) {
        if (promotionItems.includes(item.key)) {
            item.count = item.count - Math.floor(item.count / 3);
        }
        return item;
    });
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let summarized = summarize(collectionA);
    return discount(summarized, objectB.value);
}
