// * API => Application Programming Interface

// * Fetch
// * AJAX => Asynchronous Javascript And XML

const btn = document.getElementById("btn");
const categoryName = document.getElementById("name");
const categoryDescription = document.getElementById("description");
const box = document.getElementById("box");

// * XMl - JSON

btn.addEventListener("click", () => {
    const request = new XMLHttpRequest();

    const category = {
        categoryName: categoryName.value,
        description: categoryDescription.value
    }

    request.open("POST", "https://apitester.ir/api/Categories");

    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 201) {
            console.log(request.responseText);
        }
    }

    request.setRequestHeader("Content-Type", "application/json");

    request.send(JSON.stringify(category));
})