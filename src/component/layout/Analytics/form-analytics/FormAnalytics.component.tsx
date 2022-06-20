import { FC } from "react"
import { Button, DatePicker, Select } from "antd"
import "./formAnalytics.style.scss"

const { RangePicker } = DatePicker;
const { Option } = Select;

export const FormAnalytics: FC = () => {
    return (
        <form className="formAnalytics">
            <Select defaultValue="Месяц" size="large">
                <Option value="January">январь</Option>
                <Option value="February">февраль</Option>
                <Option value="March">март</Option>
                <Option value="April">апрель</Option>
                <Option value="May">май</Option>
                <Option value="June">июнь</Option>
                <Option value="July">июль</Option>
                <Option value="August">август</Option>
                <Option value="September">сентябрь</Option>
                <Option value="October">октябрь</Option>
                <Option value="November">ноябрь</Option>
                <Option value="December">декабрь</Option>
            </Select>
            <div className="line"></div>
            <Select defaultValue="Квартал" size="large">
                <Option value="Option1">Option1</Option>
                <Option value="Option2">Option2</Option>
            </Select>

            <div className="line"></div>

            <RangePicker size="large" />

            <Button type="ghost" size="large">Применить</Button>
        </form>
    )
}
