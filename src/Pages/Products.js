import { useLocation } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom"

export const Products = () => {

    const history = useHistory();
    const location = useLocation();
    const match = useRouteMatch();
    console.log(match);
    const queryParams = new URLSearchParams(location.search);
    const isSortingAsc = queryParams.get('sort') == 'asc';

    return <div>
        <h4>Product List</h4>
        <button disable={true}>{isSortingAsc ? 'Descending': 'Ascending'}</button>
        <div>
            <Link to="/products/a">Product A</Link>
        </div>
        <div>
            <Link to="/products/b">Product B</Link>
        </div>
        <div>
            <Link to="/products/c">Product C</Link>
        </div>
    </div>
}