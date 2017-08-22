'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
    return collectionA.map(function (item) {
        if (objectB.value.includes(item.key)) {
            item.count--;
        }
        return item;
    });
}
