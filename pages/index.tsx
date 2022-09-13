import type { NextPage } from "next";
import EditProfileCollection from "../src/ui-components/EditProfileCollection";

const Home: NextPage = () => {
  return (
    <>
      <EditProfileCollection />
      <div>{"Landing Page"}</div>
    </>
  );
};

export default Home;
