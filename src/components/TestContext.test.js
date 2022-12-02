import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import CounterProvider, {
	Counter,
	CounterContext,
} from "./TestContext";

afterEach(cleanup);

const renderWithContext = component => {
	return {
		...render(
			<CounterProvider value={CounterContext}>{component}</CounterProvider>,
		),
	};
};

it("checks if initial state is equal to 0", () => {
	//Arrange
    renderWithContext(<Counter />);
    // Act
    const countertextH1 = screen.getByTestId("counter")
    // Assert
	expect(countertextH1).toHaveTextContent(0);
});

it("increments the counter", () => {
	renderWithContext(<Counter />);

	fireEvent.click(screen.getByTestId("button-up"));
	expect(screen.getByTestId("counter")).toHaveTextContent("1");
});

it("decrements the counter", () => {
	renderWithContext(<Counter />);

	fireEvent.click(screen.getByTestId("button-down"));
	expect(screen.getByTestId("counter")).toHaveTextContent("-1");
});