import { FC, ReactElement } from "react";
import Navbar from "../ui-components/Navbar";

const Layout: FC<{ children: ReactElement }> = ({ children }): ReactElement => {
  return (
    <>
      <Navbar
        width="100%"
        overrides={{ Navbar: { margin: "0px 0px 20px 0px" } }}
      />
      {children}
    </>
  );
};

export default Layout;
