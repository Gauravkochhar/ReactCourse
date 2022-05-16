import { useSelector, useDispatch } from "react-redux";
// import { useRouteMatch } from "react-router-dom";
import { Routes, useLocation, useMatch } from "react-router-dom";
import { Route } from "react-router-dom"
import { counterActions } from "../store/Slice/counterSlice";



export const Welcome = () => {

    const counter = useSelector(store => store.counterScreen.counter);
    const dispatch = useDispatch();
    // const match = useRouteMatch();
    // const match = useMatch('/counterExample/new-user');
    const { pathname } = useLocation();
    console.log('pathname: ', pathname);

    
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

        <Routes>
        <Route path={`/home/new-user`} element={<p>Welcome New User</p>}>
        </Route>
        </Routes>
    </>
}