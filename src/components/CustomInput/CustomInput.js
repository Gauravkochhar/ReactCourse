import React, { useRef, useImperativeHandle } from "react";

const CustomInput = React.forwardRef((props, ref) => {

    const inputRef = useRef();

    function onBlur() {

    }

    function focusOnInput() {
        inputRef.current.focus();
    }

    useImperativeHandle( ref, () => {
        return {
            focusFromParent: focusOnInput
        }
    })

    return <input ref={inputRef} type={props.type} placeholder={props.placeholderText} name={props.controlName} value={props.value}
    onChange={(e) => props.onValChange(e)} onBlur={onBlur}></input>
})

export default CustomInput;