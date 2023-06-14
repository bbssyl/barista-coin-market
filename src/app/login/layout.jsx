import NavbarComponent from "@/components/NavbarComponent";
import React from "react";

const LoginLayout = ({ children }) => {
  return (
    <section>
      <NavbarComponent />
      {children}
    </section>
  );
};

export default LoginLayout;
