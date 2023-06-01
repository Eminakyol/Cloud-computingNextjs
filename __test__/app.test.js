import React from "react";
import { render, screen } from "@testing-library/react";
import MyApp from "../pages/_app";
describe("MyApp Component", () => {
  it("renders MyApp component with initial basket sttate", async () => {
    render(<MyApp Component={() => <div />} pageProps={{}} />);

    const layoutComponent = screen.getByTestId("layout-component");
    expect(layoutComponent).toBeInTheDocument();
  });
});
