const parentWindowMessageHandler = responseHandler => event => {
  console.log("event in iframe:", event);
  if (event.origin !== "http://localhost:3000") {
    console.log("You are not worthy");
  } else {
    console.log("I got " + event.data + " from " + event.origin);
    responseHandler.textHandler && responseHandler.textHandler(event.data);
  }
};

export default parentWindowMessageHandler;
