import "./findTab.style.scss";

import { Input } from 'antd';
import { TableFindTab } from "./tableFindTab/TableFindTab.component";
const { Search } = Input;

export const FindTab = () => {
    const onSearch = (value: string) => {
        const searchField = value.toLowerCase()
        console.log(searchField)
    }
    return (
        <div className="findTab">
            <Search placeholder="Поиск" allowClear enterButton="Найти" size="large" onSearch={onSearch} style={{ maxWidth: "608px" }} />
            <TableFindTab />
        </div>
    )
}