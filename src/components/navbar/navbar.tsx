import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <ul>
            <li>
                <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
                <NavLink to={'/contact'}>Contact</NavLink>
            </li>
        </ul>
    )
}

export default Navbar;