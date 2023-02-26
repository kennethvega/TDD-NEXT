import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GoogleSignin from "./GoogleSignin";

describe("Google sign in", () => {
  it("should call the handleGoogleSignIn prop when clicked", () => {
    const onClickMock = jest.fn();
    render(<GoogleSignin handleGoogleSignIn={onClickMock} />);
    const googleElement = screen.getByRole("button");
    fireEvent.click(googleElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
