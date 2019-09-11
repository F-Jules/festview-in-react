import React from "react";

const FeedBack = props => {
  return (
    <div
      style={
        props.msg.length > 0
          ? { border: "1px solid red", color: "tomato", marginTop: "10px" }
          : null
      }
    >
      <h4>{props.msg}</h4>
    </div>
  );
};

export default FeedBack;
