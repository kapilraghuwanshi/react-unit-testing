import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import React from "react";

afterEach(cleanup);

it('renders learn react link', () => {
  // Arrange
  render(<App />);
  // Act
  const linkElement = screen.getByText(/learn react/i);
  // Expect
  expect(linkElement).toBeInTheDocument();
});

// it("should take a snapshot", () => {
// 	const { asFragment } = render(<App />);

// 	expect(asFragment(<App />)).toMatchSnapshot();
// });