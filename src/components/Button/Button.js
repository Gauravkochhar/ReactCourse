import React from "react";

const Button = (props) => {
    console.log('Button component reevaluated');
    return <button onClick={props.onClick}>{props.children}</button>
};

export default React.memo(Button);