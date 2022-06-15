import { Button } from "antd"
import { ButtonUIProps } from "./button.type"

export const ButtonUI = ({ children, icon, type, ...attrs }: ButtonUIProps) => {
    return (
        <Button icon={icon} type={type} size="middle" {...attrs}>{children}</Button>
    )
}
