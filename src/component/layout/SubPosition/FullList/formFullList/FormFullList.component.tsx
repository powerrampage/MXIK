import { FC } from "react"
import { Input, Select } from "antd"
import style from "./formFullList.module.scss"

const { Option } = Select;

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

export const FormFullList: FC = () => {
    return (
        <form className={style.form}>
            <Input placeholder="PositionCode" size="large" style={{ borderRadius: "0.375rem" }} />
            <Input placeholder="NameRu" size="large" style={{ borderRadius: "0.375rem" }} />
            <Input placeholder="NameUz" size="large" style={{ borderRadius: "0.375rem" }} />
            <Select placeholder="Unit Id" onChange={handleChange} size="large">
                <Option value="option1">Option1</Option>
                <Option value="option2">Option2</Option>
                <Option value="option3">Option3</Option>
            </Select>
            <Input placeholder="Survey categoriy" size="large" style={{ borderRadius: "0.375rem" }} />
        </form>
    )
}
