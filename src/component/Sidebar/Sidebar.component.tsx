import React, { Fragment, useState, useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import style from "./sidebar.module.scss"
// ICONS
import { ReactComponent as SubArrowIcon } from "../../assets/icons/subArrow.svg"
import { ReactComponent as SolidArrow } from "../../assets/icons/solid-arrow.svg"
import { ReactComponent as UserAva } from "../../assets/icons/user-ava.svg"
import { ReactComponent as ExitIcon } from "../../assets/icons/exit.svg"

// Context
import { HandleSidebarContext } from "../../contexts/handleSidebar.context"

// FAKE DATA
const IPAddress = "172.19.01.211"
const newRequests = 128;
const logged = true;
const user = {
    firstName: "Мухаммадюсуф",
    lastName: "Абдурахимов"
}


export const Sidebar = () => {
    // Context
    const { isActiveSidebar, setIsActiveSidebar }: any = useContext(HandleSidebarContext);

    // Sidebar Sublist
    const [isActiveToSubList, setIsActiveToSubList] = useState(false);
    const toSubListHandler = () => {
        setIsActiveToSubList(!isActiveToSubList)
    }

    // HANDLE SIDEBAR
    const handleCloseSidebar = (event: React.MouseEvent<HTMLButtonElement>) => {
        setIsActiveSidebar(false)
        event.stopPropagation()
    }
    const clickSidebar = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
    }

    return (
        <aside className={isActiveSidebar ? "sidebar -active" : "sidebar"} onClick={clickSidebar}>
            <div className={style.topbar}>
                <button className={style.closeBurger} onClick={handleCloseSidebar}>
                    <span className={style.closeline}></span>
                    <span className={style.closeline}></span>
                </button>
                <Link className={style.logo} to="/position">
                    Operator-MXIK
                </Link>
            </div>
            <NavLink to="/new-requests" className={style.requests}>
                <p className={style.requests__text}>Новые запросы</p>
                <span className={style.requests__count}>{newRequests}</span>
            </NavLink>
            <nav className={style.menu}>
                <ul className={style.list}>
                    <li><NavLink className={({ isActive }) => (isActive ? style.linkActive : style.link)} to="/position">Position</NavLink></li>
                    <li onClick={toSubListHandler} className={isActiveToSubList ? style.toSubListActive : style.toSubList}>
                        <NavLink className={({ isActive }) => (isActive ? style.linkActive : style.link)} to="/sub-position">Sub position
                            <span className={style.subArrow}><SubArrowIcon style={{ height: "1rem", width: "1rem" }} /></span>
                        </NavLink>
                        <ul className={style.sublist}>
                            <li><NavLink className={style.subItem} to="/sub-position">
                                <SolidArrow />
                                Тўлиқ рўйхат</NavLink>
                            </li>
                            <li><NavLink className={style.subItem} to="/sub-position">
                                <SolidArrow />
                                Киритилманган</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li><NavLink className={({ isActive }) => (isActive ? style.linkActive : style.link)} to="/brand">Brand</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? style.linkActive : style.link)} to="/attribute">Attribute
                        <span className={style.subArrow}><SubArrowIcon style={{ height: "1rem", width: "1rem" }} /></span></NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? style.linkActive : style.link)} to="/package">Упаковка</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? style.linkActive : style.link)} to="/analytics">Analytics</NavLink></li>
                </ul>
            </nav>

            <div className={style.user}>
                {logged &&
                    <Fragment>
                        <div className={style.profile}>
                            <div className={style.profile__ava}>
                                <UserAva />
                            </div>
                            <div className={style.profile__name}>
                                <p>{user.lastName}</p>
                                <p>{user.firstName}</p>
                            </div>
                        </div>
                        <p className={style.ip}>IP: {IPAddress}</p>
                    </Fragment>
                }
            </div>

            <Link className={style.exit} to="/">
                <ExitIcon />
                <p>Выйти</p>
            </Link>
        </aside>
    )
}