import React from "react";
import LoginForm from "./LoginForm";
import { render, fireEvent, screen, within } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("Login form", () => {
  describe("valid inputs", () => {
    it("should call onSubmit function", async () => {
      const mockOnSubmit = jest.fn();
      render(<LoginForm onSubmit={mockOnSubmit} />);

      const emailInput = screen.getByRole("textbox", { name: /Email */i });
      const passwordInput = screen.getByPlaceholderText(/Password/i);
      const button = screen.getByRole("button", { name: /Login */i });

      await act(async () => {
        fireEvent.change(emailInput, { target: "qwer@gmail.com" });
        fireEvent.change(passwordInput, { target: "1234567" });
      });

      // submit after input
      await act(async () => {
        fireEvent.click(button);
      });
      // assertion
      expect(mockOnSubmit).toHaveBeenCalled;
    });
  });

  describe("invalid email", () => {
    it("should render an email validation error if email is invalid", async () => {
      const mockOnSubmit = jest.fn();
      const { getByRole, container } = render(
        <LoginForm onSubmit={mockOnSubmit} />
      );
      const emailInput = getByRole("textbox", { name: /Email */i });
      const button = getByRole("button", { name: /Login */i });

      await act(async () => {
        fireEvent.change(emailInput, { target: { value: "invalid email" } });
        fireEvent.blur(emailInput);
      });

      await act(async () => {
        fireEvent.click(button);
      });
      expect(container.innerHTML).toMatch("Please enter a valid email");
    });

    it("should render an email validation error if email input is empty", async () => {
      const mockOnSubmit = jest.fn();
      const { getByRole, container } = render(
        <LoginForm onSubmit={mockOnSubmit} />
      );
      const emailInput = getByRole("textbox", { name: /Email */i });
      const button = getByRole("button", { name: /Login */i });

      await act(async () => {
        fireEvent.change(emailInput, { target: { value: "" } });
        fireEvent.blur(emailInput);
      });

      await act(async () => {
        fireEvent.click(button);
      });
      expect(container.innerHTML).toMatch("Email is required");
    });
  });

  describe("invalid password", () => {
    it("should render an email validation error if email is invalid", async () => {
      const mockOnSubmit = jest.fn();
      const { getByRole, container } = render(
        <LoginForm onSubmit={mockOnSubmit} />
      );
      const passwordInput = screen.getByPlaceholderText(/Password/i);
      const button = getByRole("button", { name: /Login */i });

      await act(async () => {
        fireEvent.change(passwordInput, { target: { value: "1234" } });
        fireEvent.blur(passwordInput);
      });

      await act(async () => {
        fireEvent.click(button);
      });
      expect(container.innerHTML).toMatch(
        "Password must be at least 6 characters"
      );
    });

    it("should render an password is required", async () => {
      const { getByRole, container } = render(
        <LoginForm onSubmit={() => {}} />
      );
      const button = getByRole("button", { name: /Login */i });
      const passwordInput = screen.getByPlaceholderText(/Password/i);
      await act(async () => {
        fireEvent.change(passwordInput, { target: { value: "" } });
        fireEvent.blur(passwordInput);
      });
      await act(async () => {
        fireEvent.click(button);
      });

      expect(container.innerHTML).toMatch("Password is required");
    });
  });
});
