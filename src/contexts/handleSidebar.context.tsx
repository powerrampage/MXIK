import { createContext, FC, useState } from "react";
import { HandleSidebarProviderProps } from "./handleSidebar.type";

export const HandleSidebarContext = createContext({
    isActiveSidebar: false,
})

export const HandleSidebarProvider: FC<HandleSidebarProviderProps> = ({ children }) => {
    const [isActiveSidebar, setIsActiveSidebar] = useState(false);
    const value = { isActiveSidebar, setIsActiveSidebar }
    
    return (
        <HandleSidebarContext.Provider value={value}>{children}</HandleSidebarContext.Provider>
    )
}