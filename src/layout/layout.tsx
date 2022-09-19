import { FC, ReactElement } from "react";
import NavbarView from "../ui-components/Navbar";

const Layout: FC<{ children: ReactElement }> = ({ children }): ReactElement => {
  return (
    <>
      <NavbarView width="100%" margin="0px 0px 20px 0px" />
      {children}
    </>
  );
};

export default Layout;
