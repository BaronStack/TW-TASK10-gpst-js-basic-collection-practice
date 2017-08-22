'use strict';
module.exports = function collectSameElements(collectionA, collectionB) {
    return collectionA.filter(function (a) {
        if (collectionB.includes(a))
            return a;
    },[]);
};
