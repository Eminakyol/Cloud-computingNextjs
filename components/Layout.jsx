import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children, basket }) => {
  return (
    <div data-testid="layout-component">
      <Navbar basket={basket} />
      {children}
    </div>
  );
};

export default Layout;
