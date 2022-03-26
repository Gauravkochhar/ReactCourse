import { useMemo } from "react";

const UseMemoLsExample = (props) => {
    const { list } = props;
    const sortedList = useMemo(() => {
        console.log('Only calls when props list updated');
        return props.list.sort((a, b) => a - b)
    }, [list]);
    console.log('List component Reevaluate');

    return (
        <div>
            {sortedList.map((elm, i) => {
                return <p style={{ textAlign: 'center' }} key={i}>{elm}</p>
            })}
        </div>
    )
}

export default UseMemoLsExample;