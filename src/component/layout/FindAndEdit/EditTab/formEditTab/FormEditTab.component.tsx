import { FC } from "react"
import { Input } from 'antd';
import style from "./formEditTab.module.scss";

const { TextArea } = Input;

export const FormEditTab: FC = () => {
    return (
        <div className={style.formEditTab}>
            <TextArea rows={4} placeholder="NameRu" />
            <TextArea rows={4} placeholder="NameUz" />
        </div>
    )
}
