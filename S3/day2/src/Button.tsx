import React from "react";

type Buttonprops = {
  children: any;
  color: string;
  leftIcon: any;
  rightIcon: any;
};
const Button = (props: Buttonprops) => {
  return (
    <div>
      <button style={{ color: props.color }}>
        {props.leftIcon}
        {props.children}
        {props.rightIcon}
      </button>
    </div>
  );
};

export default Button;
