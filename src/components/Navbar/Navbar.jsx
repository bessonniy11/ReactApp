import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "../Dialogs/DialogItem/DialogsItem";

const Navbar = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem img={d.img} name={d.name} id={d.id}/>);

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="#">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="#">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="#">Settings</NavLink>
            </div>
            <div className={s.friends}>
                <NavLink to="#" >
                    Friends
                    {dialogsElements}
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;