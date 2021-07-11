'use strict'

function filterBy(array, type){
    const arrayType = array.filter(function(array) {
        return typeof array !== type;
    });
    console.log(arrayType)

}

filterBy(['hello', 'world', 23, '23', null], `string`)
