import React from "react";

const FeedBack = props => {
  const success = {
    border: "1px solid red",
    color: "tomato",
    marginTop: "10px"
  };
  const failure = {
    border: "1px solid green",
    color: "chartreuse",
    marginTop: "10px"
  };
  return (
    <div
      style={
        props.msg
          ? props.msg.includes("succesfully")
            ? failure
            : success
          : null
      }
    >
      <h4>{props.msg}</h4>
    </div>
  );
};

export default FeedBack;
