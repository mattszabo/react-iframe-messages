const configureEventListener = (handlerFunction, contentWindow = window) => {
  contentWindow.addEventListener("message", handlerFunction, false);
  return () => contentWindow.removeEventListener("message", handlerFunction);
};

export default configureEventListener;
