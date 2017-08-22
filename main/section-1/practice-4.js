'use strict';
module.exports = function collectSameElements(collectionA, objectB) {
    let result = [];
     collectionA.filter(function (a) {
        if (objectB.value.includes(a.key))
            result.push(a.key);
    });
    return result;
}
