import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { Route } from "react-router-dom"

export const Welcome = () => {

    const counter = useSelector(store => store.counter);
    const dispatch = useDispatch();
    const match = useRouteMatch();
    console.log(match);

    const incrementHandler = () => {
        dispatch({ type: 'increment'});
    }

    const decrementHandler = () => {
        dispatch({ type: 'decrement'});
    }

    return <>
        <p>Home Page</p>
        Counter Value: {counter}
        <div>
            <button onClick={incrementHandler}>Increment</button><br/>
            <button onClick={decrementHandler}>Decrement</button>
        </div>

        <Route path={`${match.path}/new-user`}>
            <p>Welcome New User</p>
        </Route>
    </>
}