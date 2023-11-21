// * Promise

const testPromise = new Promise((resolve, reject) => {
    const data = null;
    if (data) {
        resolve(data);
    } else {
        reject("Some Errors");
    }
});


console.log(testPromise);

const testAsync = async () => {
const response=await testPromise;
console.log(response);
}
testAsync();


// async function testAsync() {
    // }
    

// testPromise.then(data => {
//     return "Hello " + data;
// }).then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// })

