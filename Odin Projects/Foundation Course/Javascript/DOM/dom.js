//!referencing and creating variables
const container = document.querySelector("#container");
const content = document.createElement("div");
const p = document.createElement("p");
const h3 = document.createElement("h3");
const content2 = document.createElement("div");
const h1InDiv = document.createElement("h1");
const pInDiv = document.createElement("p");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

//!assigning the variables & creating function
p.textContent = "Hey I'm red!";
h3.textContent = "I'm a blue h3!";
h1InDiv.textContent = "I'm in a div";
pInDiv.textContent = "ME TOO!";
content.textContent = "This is the glorious text-content!";

btn1.onclick = () => alert("Hello World 2");

btn2.addEventListener("click", () => {
  alert("Hello World 3");
});

function alertFunction() {
  alert("Hello World 4");
}

/*
btn2.onclick = alertFunction;

btn2.addEventListener("click", alertFunction);
*/

btn3.addEventListener("click", function (e) {
  console.log(e, e.target);
  e.target.style.background = "pink";
  e.target.textContent = "Clicked!";
});

//!styling the variables
p.style.color = "red";
h3.style.color = "blue";
content2.setAttribute(
  "style",
  "border:solid; border-color:black; background-color:pink"
);

//!adding attribute to variables
content.classList.add("content");

//!appending variables
container.appendChild(content);
container.appendChild(p);
container.appendChild(h3);
content2.appendChild(h1InDiv);
content2.appendChild(pInDiv);
container.appendChild(content2);
