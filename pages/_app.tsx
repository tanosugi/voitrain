import { AmazonAIPredictionsProvider } from "@aws-amplify/predictions";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import config from "../src/aws-exports";
import { studioTheme } from "../src/ui-components";
import { GoogleAnalytics } from "../src/utils/gtag";

// you can import these packages anywhere
// const LogRocket = require('logrocket');

// const setupLogRocketReact = require('logrocket-react');

Amplify.configure(config);

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Amplify.addPluggable(new AmazonAIPredictionsProvider());
    // only initialize when in the browser
    if (typeof window !== "undefined") {
      LogRocket.init("oheadl/voitrain-main");
      // plugins should also only be initialized when in the browser
      setupLogRocketReact(LogRocket);
    }
  }, []);
  return (
    <AmplifyProvider theme={studioTheme}>
      <GoogleAnalytics />
      <Component {...pageProps} />
    </AmplifyProvider>
  );
}

export default MyApp;
