import { Link, NavLink } from "react-router-dom"
import style from "./sidebar.module.scss"

export const Sidebar = () => {
    const newRequests = 128
    return (
        <aside className='sidebar'>
            <Link className={style.logo} to="/">
                Operator-MXIK
            </Link>
            <div className={style.requests}>
                <p className={style.requests__text}>Новые запросы</p>
                <span className={style.requests__count}>{newRequests}</span>
            </div>
            <nav className={style.menu}>
                <ul className={style.list}>
                    <li><NavLink className={({ isActive }) => (isActive ? style.linkActive : style.link)} to="/position">Position</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? style.linkActive : style.link)} to="/sub-position">Sub position</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? style.linkActive : style.link)} to="/brand">Brand</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? style.linkActive : style.link)} to="/attribute">Attribute</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? style.linkActive : style.link)} to="/package">Упаковка</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? style.linkActive : style.link)} to="/analytics">Analytics</NavLink></li>
                </ul>
            </nav>
        </aside>
    )
}
