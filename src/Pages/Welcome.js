import { useRouteMatch } from "react-router-dom";
import { Route } from "react-router-dom"

export const Welcome = () => {

    const match = useRouteMatch();
    console.log(match);

    return <>
        <p>Home Page</p>
        <Route path={`${match.path}/new-user`}>
            <p>Welcome New User</p>
        </Route>
    </>
}