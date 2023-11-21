// * API => Application Programming Interface

// * Fetch
// * AJAX => Asynchronous Javascript And XML

const btn = document.getElementById("btn");
const box = document.getElementById("box");

// * XMl - JSON

btn.addEventListener("click", () => {
    const request = new XMLHttpRequest();

    request.open("GET", "https://apitester.ir/api/Products");

    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
            const data = JSON.parse(request.responseText);
            console.log(data);
            // for (const item of data) {
            //     box.innerHTML += item.productName + " - " + item.unitPrice + "<hr>";
            // }
            data.map(item => {
                box.innerHTML += item.productName + " - " + item.unitPrice + "<hr>";
            })
        }
    }

    request.send();
})