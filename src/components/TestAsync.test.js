import "@testing-library/jest-dom/extend-expect";
import {
	cleanup,
	fireEvent,
	render,
	screen,
	waitFor,
} from "@testing-library/react";
import { act } from 'react-dom/test-utils';
import React from "react";
import TestAsync from "./TestAsync";

beforeEach(() => {
	jest.useFakeTimers()
})

it("increments counter after 1 sec", async () => {
    // Arrange
	render(<TestAsync/>)
    // Act
	const upButton = screen.getByTestId("button-up");
	fireEvent.click(upButton);
	jest.runAllTimers();
	await screen.findByText('1'); // [findByText = getBytext + waitFor]
});