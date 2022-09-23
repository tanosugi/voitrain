import { useAuthenticator } from "@aws-amplify/ui-react";
import LogRocket from "logrocket";
import { FC, ReactElement, useEffect } from "react";
import NavbarView from "../ui-components/Navbar";

const Layout: FC<{ children: ReactElement }> = ({ children }): ReactElement => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  console.log("user:", user);
  useEffect(() => {
    LogRocket.identify(user?.attributes?.email || "anonymous user");
  }, [user]);
  return (
    <>
      <NavbarView width="100%" margin="0px 0px 20px 0px" />
      {children}
    </>
  );
};

export default Layout;
