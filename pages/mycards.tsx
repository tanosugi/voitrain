import { Authenticator, Flex, View } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import awsExports from "../src/aws-exports";
import CardSetViewCollection from "../src/ui-components/CardSetViewCollection";

Amplify.configure(awsExports);

const Home = () => {
  return (
    <Authenticator>
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="flex-start"
        wrap="nowrap"
        gap="1rem"
      >
        <View>
          <CardSetViewCollection />
        </View>
      </Flex>
    </Authenticator>
  );
};

export default Home;
