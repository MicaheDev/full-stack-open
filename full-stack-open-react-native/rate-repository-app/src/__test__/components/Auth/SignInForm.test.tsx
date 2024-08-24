import React from "react";
import { render, screen, userEvent } from "@testing-library/react-native";
import SignInContainer from "../../../components/Auth/SignIn/SignInContainer";

describe("<SignInForm/>", () => {
  it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
    const onSubmit = jest.fn();

    jest.useFakeTimers();

    render(<SignInContainer onSubmit={onSubmit} />);

    const user = userEvent.setup();

    await user.type(screen.getByTestId("usernameInput"), "testuser");
    await user.type(screen.getByTestId("passwordInput"), "password123");

    const signInButton = screen.getByTestId("signinButton");
    await user.press(signInButton);

    jest.useRealTimers();

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit.mock.calls[0][0]).toEqual({
      username: "testuser",
      password: "password123",
    });
  });
});
