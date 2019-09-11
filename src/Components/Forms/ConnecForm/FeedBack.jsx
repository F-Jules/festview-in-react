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
  console.log(props.msg.includes("succesfully"));
  return (
    <div
      style={
        props.msg.length > 0
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
