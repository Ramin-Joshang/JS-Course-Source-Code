// * DOM => Document Object Model

// const parent = document.getElementsByClassName("parent")[0];
// console.log(parent);

const parent = document.querySelector(".parent");
parent.style.backgroundColor = "yellow";
// console.log(parent);

const newElm = document.createElement("h3");
newElm.innerHTML = "Java Script";
newElm.setAttribute("id", "title");
newElm.setAttribute("class", "new-element item");
newElm.style.color = "green";
newElm.style.fontSize = "50px";

const newElm2 = document.createElement("h2");
newElm2.innerHTML = "React";
newElm2.setAttribute("id", "title");
newElm2.setAttribute("class", "new-element item");
newElm2.style.color = "red";
newElm2.style.fontSize = "50px";

// parent.appendChild(newElm);
// parent.append(newElm);
// document.body.appendChild(newElm);

// console.log(newElm, newElm2);

// parent.append('Hello');
// parent.appendChild("Hello");

// parent.append(newElm, newElm2);
// parent.appendChild(newElm, newElm2);

// const result = parent.append(newElm);
// console.log(result);

const result = parent.appendChild(newElm);
console.log(result);


// console.log(newElm);