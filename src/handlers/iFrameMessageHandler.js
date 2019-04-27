const iFrameMessageHandler = event => {
  if (event.origin !== "http://localhost:3000") {
    console.log("You are not worthy");
  } else {
    switch (event.data) {
      case "ready":
        console.log("iframe is ready");
        break;
      default:
        console.log("couldn not handle message: ", event.data);
    }
  }
};

export default iFrameMessageHandler;
