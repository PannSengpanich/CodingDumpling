const person = {
  name: "Leeroy",
};

export default person; // default export
export const clean = () => {}; // named export
export const number = 10; //named export

import imPerson from "./exportimport.js";
import imPrs from "./exportimport.js"; // both import person but with different names (person, prs)
import { clean } from "./exportimport.js"; //name must be same as the export
import { number as imNumber } from "./exportimport.js"; // change name
import * as bundled from "./exprotimport.js"; // can use only all named exports ex.bundled.clean, bundled.number
import person1, { clean, number } from "./exportimport.js"; // import everything
