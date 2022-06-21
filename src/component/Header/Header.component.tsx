import { FC } from "react"
import { FormUI } from "../UI/Form/Form.component"
import { Heading } from "../UI/Heading/Heading.component"
import { Tabs } from "../UI/Tabs/Tabs.components"
import "./header.styles.scss"
import { HeaderProps } from "./header.type"

export const Header: FC<HeaderProps> = ({ title, placeholders, tabs, Form }) => {
    return (
        <header className="header">
            <Heading title={title} />
            {placeholders && <FormUI {...placeholders} />}
            {tabs && <Tabs {...tabs} />}
            {Form && Form}
        </header>
    )
}
