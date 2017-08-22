'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    return collectionA.filter(function (a) {
        if (collectionB[0].includes(a))
            return a;
    },[]);
};
