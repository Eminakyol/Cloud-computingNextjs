import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../../../components/Navbar";
describe("Navbar Component", () => {
  it("renders without error", () => {
    render(<Navbar basket={[]} />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  it("renders the logo", () => {
    render(<Navbar basket={[]} />);
    const logo = screen.getByText("Lezzeti-Alem");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("href", "/");
  });

  it("renders the phone number", () => {
    render(<Navbar basket={[]} />);
    const phoneNumber = screen.getByText("1-543-123-4567");
    expect(phoneNumber).toBeInTheDocument();
  });

  it("renders the shopping basket with the correct badge value", () => {
    const basket = [{ id: 1 }, { id: 2 }, { id: 3 }];
    render(<Navbar basket={basket} />);
    const badge = screen.getByText(basket.length.toString());
    expect(badge).toBeInTheDocument();
  });

  it("navigates to the order page when shopping basket is clicked", () => {
    render(<Navbar basket={[]} />);
    const link = screen.getByTestId("shopping-basket-link");
    expect(link).toHaveAttribute("href", "/order");
  });
});
