const Dropdown = (props) => {

    return <select>
        {props.options.map((optionValue, i) => {
            return <option key={i} value={optionValue}>{optionValue}</option>
        })}
    </select>
}

export default Dropdown;