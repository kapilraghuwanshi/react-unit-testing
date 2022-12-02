import "@testing-library/jest-dom/extend-expect";
import {
	cleanup,
	fireEvent,
	render,
	waitFor,
	screen
} from "@testing-library/react";
import axiosMock from "axios";
import React from "react";
import TextAxios from "./TextAxios";

afterEach(cleanup);

jest.mock("axios");

it("should display a loading text", () => {
	render(<TextAxios />);
	expect(screen.getByTestId("loading-text")).toHaveTextContent("Loading...");
});

it("should load and display the data", async () => {
	//Arrange
	const url = "https://jsonplaceholder.typicode.com/todos/1";
	render(<TextAxios url={url} />);

	// mock API response
	axiosMock.get.mockResolvedValueOnce({
		data: {
			"title": "delectus aut autem",
		  },
	});

	// Act
	fireEvent.click(screen.getByTestId("fetch-data"));

	// Assert - true / false
	await waitFor(() => {
		const mockData = screen.getByTestId("show-data");
		expect(axiosMock.get).toHaveBeenCalledTimes(1);
		expect(axiosMock.get).toHaveBeenCalledWith(url);
		expect(mockData).toHaveTextContent("delectus aut autem");
	});

});