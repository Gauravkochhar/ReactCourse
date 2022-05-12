import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { Route } from "react-router-dom"
import { counterActions } from "../store";


export const Welcome = () => {

    const counter = useSelector(store => store.counterScreen.counter);
    const dispatch = useDispatch();
    const match = useRouteMatch();
    console.log(match);

    
    const incrementHandler = () => {
        dispatch(counterActions.increment());
    }

    const increaseHandler = () => {
        dispatch(counterActions.increase(5));
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    }

    return <>
        <p>Home Page</p>
        Counter Value: {counter}
        <div>
            <button onClick={incrementHandler}>Increment</button><br/>
            <button onClick={increaseHandler}>Increase</button><br/>
            <button onClick={decrementHandler}>Decrement</button>
        </div>

        <Route path={`${match.path}/new-user`}>
            <p>Welcome New User</p>
        </Route>
    </>
}