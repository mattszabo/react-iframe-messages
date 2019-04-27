import React, { useEffect } from "react";
import configureEventListener from "./configureEventListener";
import iFrameMessageHandler from "./iFrameMessageHandler";

const withIframeMessageHandler = Component => props => {
  useEffect(() => {
    configureEventListener(iFrameMessageHandler);
  }, []);
  return <Component {...props} />;
};

export { withIframeMessageHandler };
