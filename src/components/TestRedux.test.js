import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, fireEvent, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import TestRedux from "./TestRedux";
import { reducer } from "./reducer";

afterEach(cleanup);

const renderWithRedux = (
	component,
	{ initialState, store = createStore(reducer, initialState) } = {},
) => {
	return {
		...render(<Provider store={store}>{component}</Provider>),
		store,
	};
};

it("checks initial state is equal to 0", () => {
    // Arrange
	renderWithRedux(<TestRedux />);
    // Act
    const counterText = screen.getByTestId("abcd");
    // Assert
	expect(counterText).toHaveTextContent(0);
});

it("increments the counter through redux", () => {
	renderWithRedux(<TestRedux />, {
		initialState: { count: 5 },
	});
	fireEvent.click(screen.getByTestId("button-up"));
	expect(screen.getByTestId("abcd")).toHaveTextContent("6");
});

it("decrements the counter through redux", () => {
	renderWithRedux(<TestRedux />, {
		initialState: { count: 100 },
	});
	fireEvent.click(screen.getByTestId("button-down"));
	expect(screen.getByTestId("abcd")).toHaveTextContent("99");
});