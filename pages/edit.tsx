import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import type { NextPage } from "next";
import awsExports from "../src/aws-exports";
import CardEditCollection from "../src/ui-components/CardEditCollection";
import CardSetEdit from "../src/ui-components/CardSetEdit";

Amplify.configure(awsExports);

const Home: NextPage = () => {
  return (
    <>
      <Authenticator>
        <CardSetEdit />
        <CardEditCollection />
      </Authenticator>
    </>
  );
};

export default Home;
