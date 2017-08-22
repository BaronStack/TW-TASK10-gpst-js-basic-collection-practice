'use strict';

function summarize(collection) {
    let result = [];
    collection.forEach(function (item) {
        let obj = result.find((n) => n.key === item);
        if (obj) {
            obj.count++;
        } else {
            result.push({key: item, count: 1});
        }
    });
    return result;
}

function split(item) {
    let array = item.split("-");
    return {key: array[0], count: parseInt(array[1], 10)};
}

function push(result, key, count) {
    for (var i = 0; i < count; i++) {
        result.push(key);
    }
}

function expand(collection) {
    let result = [];
    collection.forEach(function (item) {
        if (item.length === 1) {
            result.push(item);
        } else {
            let {key, count} = split(item);
            push(result, key, count);
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
    let expandedArray = expand(collectionA);
    let summarizedArray = summarize(expandedArray);
    return discount(summarizedArray, objectB.value);
}
