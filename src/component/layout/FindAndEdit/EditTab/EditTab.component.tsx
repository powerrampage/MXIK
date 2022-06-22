import { FC } from "react"
import { Button, Tabs } from 'antd';
import "./editTab.style.scss"
import { Input } from 'antd';
import { TableEditTab } from "./tableEditTab/TableEditTab.component";
import { FormEditTab } from "./formEditTab/FormEditTab.component";
const { Search } = Input;
const { TabPane } = Tabs;

const onChange = (key: string) => {
  console.log(key);
};

const onSearch = (value: string) => {
  const searchField = value.toLowerCase()
  console.log(searchField)
}

export const EditTab: FC = () => {
  return (
    <div className="editTab">
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="Position" key="1">
          <Search placeholder="Поиск" allowClear enterButton="Найти" size="large" onSearch={onSearch} style={{ maxWidth: "28.4375rem" }} />
          <TableEditTab />
          <FormEditTab />
          <hr />
          <Button type="ghost" size="large">Сохранить</Button>
        </TabPane>

        {/* OTHER TABS */}
        <TabPane tab="Sub position" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Brand" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="Attribute" key="4">
          Content of Tab Pane 4
        </TabPane>
      </Tabs>
    </div>
  )
}