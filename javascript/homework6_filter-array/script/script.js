'use strict'

// 1 //

function filterBy(array, type){
    const arrayType = array.filter(array => typeof array !== type)
    console.log(arrayType)
}

filterBy(['hello', 'world', 23, '23', null], `string`)



// 2 //

// function filterBy(array, type){
//     const arrayType = array.filter(function(array) {
//         return typeof array !== type;
//     });
//     console.log(arrayType)
//
// }
//
// filterBy(['hello', 'world', 23, '23', null], `string`)






