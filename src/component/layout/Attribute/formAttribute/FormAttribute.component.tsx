
import { FC } from "react"
import { Button, Input, Select } from "antd"
import style from "./formAttribute.module.scss"

const { Option } = Select

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};


export const FormAttribute: FC = () => {
    return (
        <form className={style.formAttribute}>
            <Input placeholder="PositionCode" size="large" style={{ borderRadius: "0.375rem" }} />
            <Input placeholder="NameRu" size="large" style={{ borderRadius: "0.375rem" }} />
            <Input placeholder="NameUz" size="large" style={{ borderRadius: "0.375rem" }} />
            <Select placeholder="Unit Id" onChange={handleChange} size="large">
                <Option value="option1">Option1</Option>
                <Option value="option2">Option2</Option>
                <Option value="option3">Option3</Option>
            </Select>
            <Input placeholder="International" size="large" style={{ borderRadius: "0.375rem" }} />
            <Select placeholder="ContenerCode" onChange={handleChange} size="large">
                <Option value="option1">Option1</Option>
                <Option value="option2">Option2</Option>
                <Option value="option3">Option3</Option>
            </Select>
            <Select placeholder="Pac Unit Id" onChange={handleChange} size="large">
                <Option value="option1">Option1</Option>
                <Option value="option2">Option2</Option>
                <Option value="option3">Option3</Option>
            </Select>
            <Input placeholder="ParentValue" size="large" style={{ borderRadius: "0.375rem" }} />
            <div className={style.lastInput}>
                <Input placeholder="Tnved" size="large" style={{ borderRadius: "0.375rem" }} />
                <Button type="ghost" className={style.button} size="large">Добавить</Button>
            </div>
        </form>
    )
}
