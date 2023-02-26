import { render, fireEvent } from "@testing-library/react";

import Navbar from "./Navbar";

describe("Navbar", () => {
  it("renders the navigation bar", () => {
    const { getByRole } = render(<Navbar />);
    expect(getByRole("navigation")).toBeInTheDocument;
  });

  it("navigates to login page when login link is clicked", () => {
    const push = jest.fn();
    jest.mock("next/router", () => ({
      useRouter: () => ({
        pathname: "/login",
        push,
      }),
    }));

    const { getByRole } = render(<Navbar />);
    const login = getByRole("link", { name: /Login/i });
    fireEvent.click(login);
    expect(push).toHaveBeenCalled;
  });

  it("navigates to login page when sign up link is clicked", () => {
    const push = jest.fn();
    jest.mock("next/router", () => ({
      useRouter: () => ({
        pathname: "/signup",
        push,
      }),
    }));
    const { getByRole } = render(<Navbar />);
    const signup = getByRole("link", { name: /Sign up/i });
    fireEvent.click(signup);
    expect(push).toHaveBeenCalled;
  });

  it("navigates to home page when sign up link is clicked", () => {
    const push = jest.fn();
    jest.mock("next/router", () => ({
      useRouter: () => ({
        pathname: "/",
        push,
      }),
    }));
    const { getByRole } = render(<Navbar />);
    const home = getByRole("link", { name: /TODO APP/i });
    fireEvent.click(home);
    expect(push).toHaveBeenCalled;
  });
});
