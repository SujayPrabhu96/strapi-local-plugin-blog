import React from "react";
import { LoadingIndicator } from "@buffetjs/styles";

const Loader = () => {
  return (
    <LoadingIndicator
      animationTime="0.6s"
      borderWidth="4px"
      borderColor="#f3f3f3"
      borderTopColor="#555555"
      size="26px"
    />
  );
};

export default Loader;
