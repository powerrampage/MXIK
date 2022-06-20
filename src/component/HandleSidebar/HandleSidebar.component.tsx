import React, { FC, useContext } from "react"
import { HandleSidebarContext } from "../../contexts/handleSidebar.context"
// import { isActiveSidebarType } from "../../contexts/handleSidebar.type";
import "./handleSidebar.styles.scss"

export const HandleSidebar: FC = () => {
    const { setIsActiveSidebar }: any = useContext(HandleSidebarContext);
    window.onclick = () => {
        setIsActiveSidebar(false)
    }
    const handleSidebar = (event: React.MouseEvent<HTMLButtonElement>) => {
        setIsActiveSidebar(true)
        event.stopPropagation()
    }
    return (
        <button className="burger" onClick={handleSidebar}>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
            <span className="burger__line"></span>
        </button>
    )
}