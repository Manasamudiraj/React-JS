import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");

  //Assertion
  expect(heading).toBeInTheDocument();
});

test("Should load button inside contact us component", () => {
  render(<Contact />);
  // const button=screen.getByRole("button");
  const button = screen.getByText("Submit");

  //Assertion
  expect(button).toBeInTheDocument();
});

test("Should load 2 input boxes in contact us page", () => {
  render(<Contact />);
  const inputBoxes = screen.getAllByRole("textbox");
  expect(inputBoxes.length).toBe(2);
});
