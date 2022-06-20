import { FC } from "react"
import { NavLink } from "react-router-dom"
import "./tabs.styles.scss"
import { TabsProps } from "./tabs.type";

export const Tabs: FC<TabsProps> = (props) => {
    const firstTab = props["0"];
    const secondTab = props["1"];
    return (
        <div className="tabs">
            <NavLink to={firstTab.link} className="tabs__btn">{firstTab.title}</NavLink>
            <NavLink to={secondTab.link} className="tabs__btn">{secondTab.title}</NavLink>
        </div>
    )
}
