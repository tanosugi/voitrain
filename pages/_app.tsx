import { AmazonAIPredictionsProvider } from "@aws-amplify/predictions";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import config from "../src/aws-exports";
import { studioTheme } from "../src/ui-components";
import { GoogleAnalytics } from "../src/utils/gtag";

Amplify.configure(config);

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Amplify.addPluggable(new AmazonAIPredictionsProvider());
  }, []);
  return (
    <AmplifyProvider theme={studioTheme}>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </AmplifyProvider>
  );
}

export default MyApp;
