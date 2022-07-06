import React from "react";

type Buttonprops = {
  //children: any;
  children: React.ReactNode;
  color: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  //leftIcon?: any;
  //rightIcon?: any;
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
