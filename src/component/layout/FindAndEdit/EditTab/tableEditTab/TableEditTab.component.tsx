import { Table } from "antd"
import type { ColumnsType } from 'antd/lib/table';
import { TableEditTabType } from "./tableEditTab.type";
import style from "./tableEditTab.module.scss"

const data: TableEditTabType[] = [
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


const columns: ColumnsType<TableEditTabType> = [
    {
        title: '№',
        dataIndex: 'no',
        render: (v: string, r: TableEditTabType, index: number) => <p>{index + 1}</p>
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

export const TableEditTab = () => {
    const randomRowKeyForTable = (record: TableEditTabType) => record.brand * Math.random() * Math.random()

    return (
        <div className={style.tableEditTab}>
            <Table rowKey={randomRowKeyForTable} columns={columns} dataSource={data} bordered scroll={{ x: 'calc(43.75rem + 20%)' }} />
        </div>
    )
}
