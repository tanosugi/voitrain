import { AmazonAIPredictionsProvider } from "@aws-amplify/predictions";
import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
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
    Sentry.init({
      dsn: "https://1cc905915bd448e4bca4dacb6a66e0a2@o497625.ingest.sentry.io/6769091",
      integrations: [new BrowserTracing()],

      // We recommend adjusting this value in production, or using tracesSampler
      // for finer control
      tracesSampleRate: 1.0,
      beforeSend(event) {
        const logRocketSession = LogRocket.sessionURL;
        if (logRocketSession !== null && event?.extra != undefined) {
          event.extra["LogRocket"] = logRocketSession;
          return event;
        } else {
          return event;
        }
      },
    });
  }, []);
  return (
    <Sentry.ErrorBoundary>
      <AmplifyProvider theme={studioTheme}>
        <Authenticator.Provider>
          <GoogleAnalytics />
          <Component {...pageProps} />
        </Authenticator.Provider>
      </AmplifyProvider>
    </Sentry.ErrorBoundary>
  );
}

export default MyApp;
