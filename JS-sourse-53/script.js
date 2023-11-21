// * Promise

const testPromise = new Promise((resolve, reject) => {
    // console.log("hello");
    // * ...
    const data = "Ramin";
    if (data) {
        resolve(data);
    } else {
        reject("Some Errors");
    }
})

testPromise.then(data => {
    return "Hello " + data;
}).then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
})



// testPromise.then(data => console.log(data))

// testPromise.catch(msg => {
//     console.log(msg);
// })
// console.log(testPromise);