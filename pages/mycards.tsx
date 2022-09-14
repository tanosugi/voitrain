import {
  AmplifyProvider,
  Authenticator,
  Flex,
  View,
} from "@aws-amplify/ui-react";
import CardSetViewCollection from "../src/ui-components/CardSetViewCollection";

const Home = () => {
  return (
    <Authenticator>
      <AmplifyProvider>
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
      </AmplifyProvider>
    </Authenticator>
  );
};

export default Home;
