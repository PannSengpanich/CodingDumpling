import _ from "lodash";
import myName from "./myName";
import "./style.css";
import capybara from "./capybara-square-1.jpg.optimal.jpg";
import Data from "./data.xml";
import Notes from "./data.csv";
import toml from "./data.toml";
import yaml from "./data.yaml";
import json from "./data.json5";

import printMe from "./print";

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
  const element1 = document.createElement("div");
  const element2 = document.createElement("div");
  const div = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, now imported by this script
  element1.innerHTML = _.join(["Hello", "webpack"], " ");
  element2.textContent = myName("Pann Sengpanich");
  btn.innerHTML = "Click me and check the console";
  btn.onclick = printMe;
  element1.classList.add("hello");
  element2.classList.add("name");

  //Add the image to our existing div.
  const image = new Image();
  image.src = capybara;

  div.appendChild(element1);
  div.appendChild(element2);
  div.appendChild(image);
  div.appendChild(btn);
  console.log(Data);
  console.log(Notes);

  return div;
}

document.body.appendChild(component());
