import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom"
import MainHeaderStyle from '../styles/MainHeader.module.css';

export const MainHeader = () => {
    return <header>
        <nav>
            <ul className={MainHeaderStyle['navbar-ul']}>
                <li className={MainHeaderStyle['navbar-ul-li']}>
                    {/* <NavLink activeClassName={MainHeaderStyle.active} to="/home">Home</NavLink> */}
                    <NavLink className={(navdata) => navdata.isActive ? MainHeaderStyle.active: ''} to="/home">Home</NavLink>
                </li>
                <li className={MainHeaderStyle['navbar-ul-li']}>
                    {/* <NavLink activeClassName={MainHeaderStyle.active} to="/counterExample">Class Based Redux Counter</NavLink> */}
                    <NavLink className={(navdata) => navdata.isActive ? MainHeaderStyle.active: ''} to="/counterExample">Class Based Redux Counter</NavLink>
                </li>
                <li className={MainHeaderStyle['navbar-ul-li']}>
                    {/* <NavLink activeClassName={MainHeaderStyle.active} to="/products">Products</NavLink> */}
                    <NavLink className={(navdata) => navdata.isActive ? MainHeaderStyle.active: ''} to="/products">Products</NavLink>
                </li>
                <li className={MainHeaderStyle['navbar-ul-li']}>
                    {/* <NavLink activeClassName={MainHeaderStyle.active} to="/aboutus">About us</NavLink> */}
                    <NavLink className={(navdata) => navdata.isActive ? MainHeaderStyle.active: ''} to="/aboutus">About us</NavLink>
                </li>
                <li className={MainHeaderStyle['navbar-ul-li']}>
                    {/* <NavLink activeClassName={MainHeaderStyle.active} to="/aboutus">About us</NavLink> */}
                    <NavLink className={(navdata) => navdata.isActive ? MainHeaderStyle.active: ''} to="/addProduct">Add Product</NavLink>
                </li>
                <li className={MainHeaderStyle['navbar-ul-li']}>
                    {/* <NavLink activeClassName={MainHeaderStyle.active} to="/aboutus">About us</NavLink> */}
                    <NavLink className={(navdata) => navdata.isActive ? MainHeaderStyle.active: ''} to="/productList">Product List</NavLink>
                </li>
            </ul>
            <ul>
                <li>Cart</li>
            </ul>
        </nav>
    </header>
}