import React from "react";
import SignupForm from "./SignupForm";
import { render, fireEvent, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("SignupForm", () => {
  describe("with valid inputs", () => {
    it("calls the onSubmit function", async () => {
      const mockOnSubmit = jest.fn();
      render(<SignupForm onSubmit={mockOnSubmit} />);

      // input elements
      const displayNameInput = screen.getByRole("textbox", {
        name: /Display name */i,
      });
      const emailInput = screen.getByRole("textbox", { name: /Email */i });
      const passwordInput = screen.getByPlaceholderText(/Password/i);
      const button = screen.getByRole("button", { name: /Signup */i });
      // simulate typing in inputs
      await act(async () => {
        fireEvent.change(displayNameInput, { target: { value: "Qwer" } });
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

  describe("with invalid display name", () => {
    it("should render the display name validation error", async () => {
      const { getByRole, container } = render(
        <SignupForm onSubmit={() => {}} />
      );

      const button = screen.getByRole("button", { name: /Signup */i });
      const nameInput = getByRole("textbox", { name: /Display name */i });
      await act(async () => {
        fireEvent.change(nameInput, { target: { value: "Qw" } });
        fireEvent.blur(nameInput);
      });
      await act(async () => {
        fireEvent.click(button);
      });

      expect(container.innerHTML).toMatch(
        "Display name must be at least 3 characters"
      );
    });

    it("should be required else render required validation error", async () => {
      const { getByRole, container } = render(
        <SignupForm onSubmit={() => {}} />
      );
      const button = screen.getByRole("button", { name: /Signup */i });
      const nameInput = getByRole("textbox", { name: /Display name */i });
      await act(async () => {
        fireEvent.change(nameInput, { target: { value: "" } });
        fireEvent.blur(nameInput);
      });
      await act(async () => {
        fireEvent.click(button);
      });

      expect(container.innerHTML).toMatch("Display name is required");
    });
  });

  describe("with invalid email", () => {
    it("should render the email validation error", async () => {
      const { getByRole, container } = render(
        <SignupForm onSubmit={() => {}} />
      );
      const button = getByRole("button", { name: /Signup */i });
      const emailInput = getByRole("textbox", { name: /Email */i });
      await act(async () => {
        fireEvent.change(emailInput, { target: { value: "invalid email" } });
        fireEvent.blur(emailInput);
      });
      await act(async () => {
        fireEvent.click(button);
      });

      expect(container.innerHTML).toMatch("Please enter a valid email");
    });

    it("should be required else render required validation error", async () => {
      const { getByRole, container } = render(
        <SignupForm onSubmit={() => {}} />
      );
      const button = screen.getByRole("button", { name: /Signup */i });
      const emailInput = getByRole("textbox", { name: /Email */i });
      await act(async () => {
        fireEvent.change(emailInput, { target: { value: "" } });
        fireEvent.blur(emailInput);
      });
      await act(async () => {
        fireEvent.click(button);
      });

      expect(container.innerHTML).toMatch("Display name is required");
    });
  });

  describe("with invalid password", () => {
    it("should render password validation error", async () => {
      const { getByRole, container } = render(
        <SignupForm onSubmit={() => {}} />
      );
      const button = screen.getByRole("button", { name: /Signup */i });
      const passwordInput = screen.getByPlaceholderText(/Password/i);
      await act(async () => {
        fireEvent.change(passwordInput, { target: { value: "123" } });
        fireEvent.blur(passwordInput);
      });

      await act(async () => {
        fireEvent.click(button);
      });

      expect(container.innerHTML).toMatch(
        "Password must be at least 6 characters"
      );
    });

    it("should be required else render required validation error", async () => {
      const { getByRole, container } = render(
        <SignupForm onSubmit={() => {}} />
      );
      const button = screen.getByRole("button", { name: /Signup */i });
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
