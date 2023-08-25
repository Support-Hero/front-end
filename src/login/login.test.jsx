import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Login from "./login";
import Welcome from "../landpage/welcome";
import Body from "../components/body/Body";

global.fetch = vi.fn();

describe("test:login form", () => {
  test("render page", async () => {
    // render(<Login />);
    // render(<Welcome />);

    // const emailInput = screen.getByLabelText("Email address");
    // const passwordInput = screen.getByLabelText("Password");
    // const submitButton = screen.getByRole("button");

    // fireEvent.change(emailInput, { target: { value: "km@g.com" } });
    // fireEvent.change(passwordInput, { target: { value: "1234" } });
    // fireEvent.click(submitButton);

    // expect(emailInput.value).toBe("km@g.com");
    // expect(passwordInput.value).toBe("1234");

    // await waitFor(() => {
    //   const profilePageHeading = screen.findByText("welcome");
    //   expect(profilePageHeading).toBeVisible();
    // });
  });
//   test("render localstorage",async()=>{
//     render(<Login />);

//   })
});
