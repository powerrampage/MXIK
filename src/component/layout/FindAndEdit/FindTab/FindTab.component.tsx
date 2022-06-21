import style from "./findTab.module.scss"

import { Input } from 'antd';
const { Search } = Input;

export const FindTab = () => {
    const onSearch = (value: string) => {
        const searchField = value.toLowerCase()
        console.log(searchField)
    }
    return (
        <div className={style.findTab}>
            <Search placeholder="Поиск" allowClear enterButton="Найти" size="large" onSearch={onSearch} style={{ maxWidth: "608px" }} />
        </div>
    )
}