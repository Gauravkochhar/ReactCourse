import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom"
import MainHeaderStyle from '../styles/MainHeader.module.css';

export const MainHeader = () => {
    return <header>
        <nav>
            <ul className={MainHeaderStyle['navbar-ul']}>
                <li className={MainHeaderStyle['navbar-ul-li']}>
                    <NavLink activeClassName={MainHeaderStyle.active} to="/home">Home</NavLink>
                </li>
                <li className={MainHeaderStyle['navbar-ul-li']}>
                    <NavLink activeClassName={MainHeaderStyle.active} to="/counterExample">Class Based Redux Counter</NavLink>
                </li>
                <li className={MainHeaderStyle['navbar-ul-li']}>
                    <NavLink activeClassName={MainHeaderStyle.active} to="/products">Products</NavLink>
                </li>
                <li className={MainHeaderStyle['navbar-ul-li']}>
                    <NavLink activeClassName={MainHeaderStyle.active} to="/aboutus">About us</NavLink>
                </li>
            </ul>
        </nav>
    </header>
}