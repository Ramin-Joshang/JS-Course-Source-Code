// * Callback Function

// function firstFunction() {
//     console.log("This is first.");
//     secondFunction();
// }

// function secondFunction() {
//     console.log("This is second.");
//     thirdFunction();
// }

// function thirdFunction() {
//     console.log("This is third");
// }

// firstFunction();


// function firstFunctions(callback) {
//     console.log("Hello");
//     callback();
// }

// function anotherFunction() {
//     for (let i = 1; i <= 10; i++) {
//         console.log(i);
//     }
// }

// firstFunctions(anotherFunction);

// const print = function (text) {
//     console.log(text);
// }

// const run = function (callback, input) {
//     callback(input);
// }

// run(print, "Ramin");


// * Callback Hell
getUser(function (user) {
    getOrders(user.id, function (order) {
        getOrderDetails(order[0].id, function (orderDetails) {
            ShowOrderDetails(orderDetails);
        })
    })
})
