import { Table } from "antd"
import type { ColumnsType } from 'antd/lib/table';
import { TableFindTabType } from "./tableFindTab.type";
import style from "./tableFindTab.module.scss"

const data: TableFindTabType[] = [
    {
        classCode: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        subPosition: 322,
        brand: 1234,
        attribute: 4567,
        package: 10,
    },
    {
        classCode: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        subPosition: 322,
        brand: 1234,
        attribute: 4567,
        package: 10,
    },
    {
        classCode: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        subPosition: 322,
        brand: 1234,
        attribute: 4567,
        package: 10,
    },
    {
        classCode: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        subPosition: 322,
        brand: 1234,
        attribute: 4567,
        package: 10,
    },
];




const columns: ColumnsType<TableFindTabType> = [
    {
        title: '№',
        dataIndex: 'no',
        render: (v: string, r: TableFindTabType, index: number) => <p>{index + 1}</p>
    },
    {
        title: 'ClassCode',
        dataIndex: 'classCode',
    },
    {
        title: 'NameRu',
        dataIndex: 'nameRu',
    },
    {
        title: 'NameUz',
        dataIndex: 'nameUz',
    },
    {
        title: 'Sub position',
        dataIndex: 'subPosition',
    },
    {
        title: 'Brand',
        dataIndex: 'brand',
    },
    {
        title: 'Attribute',
        dataIndex: 'attribute',
    },
    {
        title: 'Упаковка',
        dataIndex: 'package',
    },
];

export const TableFindTab = () => {
    const randomRowKeyForTable = (record: TableFindTabType) => record.brand * Math.random() * Math.random()

    return (
        <div className={style.tableFindTab}>
            <Table rowKey={randomRowKeyForTable} columns={columns} dataSource={data} bordered scroll={{ x: 'calc(43.75rem + 20%)' }} />
        </div>
    )
}
