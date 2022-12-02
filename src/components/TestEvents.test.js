import "@testing-library/jest-dom/extend-expect";
import { cleanup, fireEvent, render } from "@testing-library/react";
import React from "react";
import TestEvents from "./TestEvents";

afterEach(cleanup);

it("increments counter", () => {
  // Arrange
	const { getByTestId } = render(<TestEvents />);
  // Act
  const Upbutton = getByTestId("button-up");
	fireEvent.click(Upbutton);
  // Assert
  const counterText = getByTestId("counter");
	expect(counterText).toHaveTextContent("1");
});

it("decrements counter", () => {
  // Arrange
	const { getByTestId } = render(<TestEvents />);
  // Act
  const downButton = getByTestId("button-down");
	fireEvent.click(downButton);
  // Assert
  const counterText = getByTestId("counter");
	expect(counterText).toHaveTextContent("-1");
});