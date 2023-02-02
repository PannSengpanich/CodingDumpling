function splitify(str) {
  let array = str.split(/\W/);
  return array;
}

console.log(splitify("Hello World,I-am code"));

function sentensify(str) {
  let array = str.split(/\W/);
  let newstr = array.join(" ");

  return newstr;
}

console.log(sentensify("May-the-force-be-with-you"));

function urlSlug(title) {
  let newstr = title.trim().toLowerCase().split(/\s+/).join("-");
  return newstr;
}
console.log(urlSlug(" Winter Is Coming"));
