import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

// Button should have
// 1. should render children
// 2. should call onClick prop when clicked
// 3. disable button if disabled prop is truthy
// 4. styling default should be primary
// 5. styling should depend on variant e.g. variant='secondary'
// 6. can put button types 1.button 2.submit 3.reset
// 7. aria label prop

describe("Button", () => {
  it("should render the button and children props", () => {
    render(<Button>Button</Button>);
    const buttonElement = screen.getByText("Button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should call the onClick prop when clicked", () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);
    const buttonElement = screen.getByText("Click me");
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("should be disabled if disabled prop is truthy", () => {
    render(<Button disabled={true}>Disable me</Button>);
    const buttonElement = screen.getByText(/Disable me/i);
    expect(buttonElement).toBeDisabled();
  });

  it("should not be disabled if disabled prop is falsy", () => {
    render(<Button disabled={false}>Disable me</Button>);
    const buttonElement = screen.getByText(/Disable me/i);
    expect(buttonElement).not.toBeDisabled();
  });

  it("should render primary styling as default if variant is not specified", () => {
    render(<Button variant="primary">Default styling</Button>);
    const buttonElement = screen.getByText(/Default styling/i);
    expect(buttonElement).toHaveClass("bg-green hover:bg-green2");
  });

  it("should render styling primary if variant=primary", () => {
    render(<Button variant="primary">Primary Button</Button>);
    const buttonElement = screen.getByText(/Primary Button/i);
    expect(buttonElement).toHaveClass("bg-green hover:bg-green2 ");
  });

  it("should render styling secondary if variant=secondary", () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    const buttonElement = screen.getByText(/Secondary Button/i);
    expect(buttonElement).toHaveClass("bg-red hover:bg-red2");
  });

  it("should have type attribute equals to type prop. example:type=submit", () => {
    render(<Button type="submit">Button Submit</Button>);
    const buttonElement = screen.getByText(/Button Submit/i);
    expect(buttonElement).toHaveAttribute("type", "submit");
  });

  it("should have aria label equals to aria-label prop.", () => {
    render(<Button ariaLabel="close-btn">aria-label close-btn</Button>);
    const buttonElement = screen.getByText(/aria-label close-btn/i);
    expect(buttonElement).toHaveAccessibleName("close-btn");
  });
});
