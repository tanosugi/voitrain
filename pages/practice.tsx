import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import awsExports from "../src/aws-exports";

Amplify.configure(awsExports);

import "@aws-amplify/ui-react/styles.css";
import CardViewCollection from "../src/ui-components/CardViewCollection";
const Home = () => {
  return (
    <Authenticator>
      <CardViewCollection />
    </Authenticator>
  );
};

export default Home;
