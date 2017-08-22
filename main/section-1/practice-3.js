'use strict';
module.exports = function collectSameElements(collectionA, objectB) {
    return collectionA.filter(function (a) {
        if (objectB.value.includes(a))
            return a;
    },[]);
}
