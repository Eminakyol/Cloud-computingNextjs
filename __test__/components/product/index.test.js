import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Product from "../../../components/Product";
describe("Product Component", () => {
  const product = {
    id: 1,
    name: "Product 1",
    description: "Product 1 Description",
    price: 9.99,
    image_url: "product1.jpg",
  };

  it("renders product details correctly", () => {
    render(<Product product={product} basket={[]} setBasket={() => {}} />);

    const productName = screen.getByText("Product 1");
    const productDescription = screen.getByText("Product 1 Description");
    const productPrice = screen.getByText("9.99TL");

    expect(productName).toBeInTheDocument();
    expect(productDescription).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
  });

  it("calls addBasket function when + button is clicked", () => {
    const setBasket = jest.fn();
    render(<Product product={product} basket={[]} setBasket={setBasket} />);

    const addButton = screen.getByText("+");
    fireEvent.click(addButton);

    expect(setBasket).toHaveBeenCalledTimes(1);
    expect(setBasket).toHaveBeenCalledWith([product]);
  });

  it("calls deleteBasket function when - button is clicked", () => {
    const setBasket = jest.fn();
    const basket = [product];
    render(<Product product={product} basket={basket} setBasket={setBasket} />);

    const deleteButton = screen.getByText("-");
    fireEvent.click(deleteButton);

    expect(setBasket).toHaveBeenCalledTimes(1);
    expect(setBasket).toHaveBeenCalledWith([]);
  });
});
