const Dropdown = (props) => {

    return <select value={props.dropdownCurrentValue} onChange={(e) => props.onDropdownChange(e.target.value)} >
        {props.options.map((optionValue, i) => {
            return <option key={i} value={optionValue}>{optionValue}</option>
        })}
    </select>
}

export default Dropdown;