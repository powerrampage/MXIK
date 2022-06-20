import React from "react"

export type HandleSidebarProviderProps = {
    children: React.ReactNode
}

export type isActiveSidebarType = {
    isActiveSidebar?: boolean
    setIsActiveSidebar: React.Dispatch<React.SetStateAction<boolean>>
}