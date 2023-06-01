import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "../../../components/Layout";

describe("Layout Component", () => {
  it("renders Navbar component", () => {
    render(<Layout basket={[]} />);
    const navbarElement = screen.getByTestId("navbar");
    expect(navbarElement).toBeInTheDocument();
  });

  it("renders child components", () => {
    render(
      <Layout basket={[]}>
        <div data-testid="child-component">Child Component</div>
      </Layout>
    );
    const childComponent = screen.getByTestId("child-component");
    expect(childComponent).toBeInTheDocument();
  });
});
