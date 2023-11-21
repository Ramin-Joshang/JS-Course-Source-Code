// * API => Application Programming Interface

// * Fetch
// * AJAX => Asynchronous Javascript And XML

const btn = document.getElementById("btn");
const box = document.getElementById("box");

console.log(btn, box);

btn.addEventListener("click", () => {

    let http = new XMLHttpRequest();
    http.open("GET", "./example.txt");

    http.onreadystatechange = () => {
        if (http.readyState == 4 && http.status == 200) {
            box.innerHTML = http.responseText;
        }
    }
    http.send();

})