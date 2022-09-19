import Center from "../src/layout/center";
import {
  FeatureSmallView,
  HeroSmallView,
  NavbarNotLoginView,
} from "../src/ui-components";

const Home = () => {
  return (
    <>
      <NavbarNotLoginView width="100%" margin="0px 0px 20px 0px" />
      <Center>
        <HeroSmallView marginBottom="20px" />
      </Center>
      <Center>
        <FeatureSmallView />
      </Center>
    </>
  );
};

export default Home;
