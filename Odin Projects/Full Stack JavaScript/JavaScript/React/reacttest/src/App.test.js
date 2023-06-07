import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";
import "@testing-library/jest-dom"; // optional
import userEvent from "@testing-library/user-event";

//! QUERIES

/*

*Single Elements ( return element or error or null)
getBy
queryBy
findBy

*Multiple Elements (return array or error)
getAllBy
queryAllBy
findAllBy

document.body = screen;

*/

//!PRIORITY

/*
- getByRole: query elements that is exposed in accessibility tree(name,description,...).
ex. getByRole('button', {name: /submit/i})
- getByLabelText(string)
- getByPlaceHolderText(string)
- getByText(string || RegExp)
- getByDisplayValue(string || RegExp)

- getByAltText(string || RegExp)
- getByTitle(string || RegExp)

- getByTestId (string)

*/
describe("App component", () => {
  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  });
});
