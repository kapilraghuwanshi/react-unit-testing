import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen } from "@testing-library/react";

import React from "react";
import TestElements from "./TestElements";

afterEach(cleanup);

it("should equal to 0", () => {
  // Arrange
	const { getByTestId } = render(<TestElements />);
  // Act
  const counterBox = getByTestId("counterText"); // getElementById
  // Evaluate/test/expect
	expect(counterBox).toHaveTextContent(0);
});

//it("", ()=>{})

it("should be enabled", () => {
  // Arrange
	render(<TestElements />);
  // Act
  const buttonActive = screen.getByTestId("button-up");
  // Expect
	expect(buttonActive).not.toHaveAttribute("disabled");
});

it("should be disabled", () => {
	render(<TestElements />);
	expect(screen.getByTestId("button-down")).toBeDisabled();
});