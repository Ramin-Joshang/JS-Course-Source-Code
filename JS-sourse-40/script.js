// * DOM => Document Object Model

// * Events

const username = document.getElementById("username");
const password = document.getElementById("password");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
const error = document.getElementById("error")
console.log(error);
// btn.addEventListener("click", () => {
//     let usernameValue = username.value;
//     let passwordValue = password.value;
//     console.log(usernameValue.length);
//     console.log(passwordValue.length);
//     if (usernameValue.length >= 5 && passwordValue.length >= 8) {
//         result.innerHTML = usernameValue + " " + passwordValue;
//     } else {
//         alert("Data is invalid.")
//     }
// })

username.addEventListener("blur", () => {
    if (username.value.length < 5) {
        error.innerHTML = "مقدار وارد شده کمتر از 5 کاراکتر است."
    } else {
        error.innerHTML = "";
    }
})

// console.log(result);
// console.log(input);

// input.addEventListener("change", () => {
//     console.log(input.value);
// })

// input.addEventListener("keypress", () => {
//     result.innerHTML = input.value;
// })

