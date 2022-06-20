import { Button, Input } from "antd"
import { FC } from "react"
import style from "./form.module.scss"
import { FormProps } from "./form.type"

export const FormUI: FC<FormProps> = ({ firstPlchdr, secondPlchdr, thirdPlchdr }) => {
    return (
        <form className={style.form}>
            <Input placeholder={firstPlchdr} size="large" style={{ borderRadius: "0.375rem" }} />
            <Input placeholder={secondPlchdr} size="large" style={{ borderRadius: "0.375rem" }} />
            <Input placeholder={thirdPlchdr} size="large" style={{ borderRadius: "0.375rem" }} />
            <Button type="ghost" size="large" className={style.button}>Добавить</Button>
        </form>
    )
}
