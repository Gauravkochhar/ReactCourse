
import React from "react";

const Dummy = (props) => {
    console.log('Dummy component Evaluated');
    return <div>
        <p>Hey! I am P tag</p>
        { props.showMessage ? <p>Hey! I am new P tag</p>: ''}
    </div>
}

export default React.memo(Dummy);