import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import TestRouter from "./TestRouter";

afterEach(cleanup);

const renderWithRouter = component => {
	const history = createMemoryHistory();
	return {
		...render(<Router history={history}>{component}</Router>),
	};
};

it("should render the home page", () => {
	const { container, getByTestId } = renderWithRouter(<TestRouter />);
	const navbar = screen.getByTestId("navbar");
	const link = screen.getByTestId("home-link");

	expect(container.innerHTML).toMatch("Home page");
	expect(navbar).toContainElement(link);
});

it('should navigate to the about page', ()=> {
	const { container, getByTestId } = renderWithRouter(<TestRouter />) 
  
	fireEvent.click(getByTestId('about-link'))
  
	expect(container.innerHTML).toMatch('About page')
  })
  
  it('should navigate to the contact page with the params', ()=> {
	const { container, getByTestId } = renderWithRouter(<TestRouter />) 
	 
	fireEvent.click(getByTestId('contact-link'))
	 
	expect(container.innerHTML).toMatch('Kapil')
  })