import React, { component} from "react";
import { Link, NavLink } from "react-router-dom";

const NavHead = props => {
    return(
        <div>
            <h2>{props.title || "NavHead"}</h2>
            <ul>
            <li>
                <NavLink to="/"> App</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink to="/profile">Profile</NavLink>
            </li>
            </ul>
        </div>
    );
};

export default NavHead;
