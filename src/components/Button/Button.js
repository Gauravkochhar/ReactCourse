import React from "react";

const Button = (props) => {
    console.log('Button component reevaluated');
    return <button onClick={props.onBtnClick}>{props.children}</button>
};

export default React.memo(Button);