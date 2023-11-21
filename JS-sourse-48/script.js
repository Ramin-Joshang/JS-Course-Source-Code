// * BOM => Browser Object Model

// * Section 1 : Window
// * Section 2 : Location
// * Section 3 : Navigator
// * Section 4 : Screen
// * Section 5 : History

// * Navigator

console.log(window.navigator);

const title = document.getElementById("title");
const btn = document.getElementById("btn");
let btnText = btn.innerHTML;

// btn.addEventListener("click", () => {
//     window.navigator.clipboard.writeText(title.innerHTML);
//     alert("متن مورد نظر کپی شد")
// })

btn.addEventListener("click", () => {
    window.navigator.clipboard.writeText(title.innerHTML);
    btn.innerHTML = "متن مورد نظر کپی شد"
    setTimeout(() => {
        btn.innerHTML = btnText;
    }, 3000)
})
