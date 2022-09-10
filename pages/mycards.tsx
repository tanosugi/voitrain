import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import awsExports from "../src/aws-exports";
import CardSetViewCollection from "../src/ui-components/CardSetViewCollection";

Amplify.configure(awsExports);

const Home = () => {
  return (
    <Authenticator>
      <CardSetViewCollection />
    </Authenticator>
  );
};

export default Home;
