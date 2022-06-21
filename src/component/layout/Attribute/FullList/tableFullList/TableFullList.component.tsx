import { FC } from 'react';
import { Table } from 'antd';
import style from "./tableFullList.module.scss"
// TYPE
import type { ColumnsType } from 'antd/lib/table';
import { TableFullListDataType } from './tableFullList.type';

const data: TableFullListDataType[] = [
    {
        positionCode: 'John Brown',
        nameRu: "Сельское хозяйство",
        nameUz: 'New York No. 1 Lake Park',
        unitId: 0,
        surveyCategory: "Text",
        international: "RandomTEXT",
        contenerCode: 523521,
        pacUnitId: 124,
        parentValue: "RandomTEXT",
        tnved: "RandomTEXT",
    },
    {
        positionCode: 'John Brown',
        nameRu: "Сельское хозяйство",
        nameUz: 'New York No. 1 Lake Park',
        unitId: 0,
        surveyCategory: "Text",
        international: "RandomTEXT",
        contenerCode: 523521,
        pacUnitId: 124,
        parentValue: "RandomTEXT",
        tnved: "RandomTEXT",
    },
    {
        positionCode: 'John Brown',
        nameRu: "Сельское хозяйство",
        nameUz: 'New York No. 1 Lake Park',
        unitId: 0,
        surveyCategory: "Text",
        international: "RandomTEXT",
        contenerCode: 523521,
        pacUnitId: 124,
        parentValue: "RandomTEXT",
        tnved: "RandomTEXT",
    },
    {
        positionCode: 'John Brown',
        nameRu: "Сельское хозяйство",
        nameUz: 'New York No. 1 Lake Park',
        unitId: 0,
        surveyCategory: "Text",
        international: "RandomTEXT",
        contenerCode: 523521,
        pacUnitId: 124,
        parentValue: "RandomTEXT",
        tnved: "RandomTEXT",
    },
    {
        positionCode: 'John Brown',
        nameRu: "Сельское хозяйство",
        nameUz: 'New York No. 1 Lake Park',
        unitId: 0,
        surveyCategory: "Text",
        international: "RandomTEXT",
        contenerCode: 523521,
        pacUnitId: 124,
        parentValue: "RandomTEXT",
        tnved: "RandomTEXT",
    },
];


const columns: ColumnsType<TableFullListDataType> = [
    {
        title: "№",
        dataIndex: "no",
        width: "4%",
        render: (v: string, r: TableFullListDataType, index: number) => <p>{index + 1}</p>
    },
    {
        title: 'PositionCode',
        dataIndex: 'positionCode',
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
        title: 'Unit Id',
        dataIndex: 'unitId',
    },
    {
        title: 'Survey category',
        dataIndex: 'surveyCategory',
    },
    {
        title: 'International',
        dataIndex: 'international',
    },
    {
        title: 'ContenerCode',
        dataIndex: 'contenerCode',
    },
    {
        title: 'Pac Unit Id',
        dataIndex: 'pacUnitId',
    },
    {
        title: 'ParentValue',
        dataIndex: 'parentValue',
    },
    {
        title: 'Tnved',
        dataIndex: 'tnved',
    },
];

const randomRowKeyForTable = () => Math.random() * Math.random()

export const TableFullList: FC = () => {
    return (
        <div className={style.tableFullList}>
            <Table rowKey={randomRowKeyForTable} columns={columns} dataSource={data} bordered scroll={{ x: 'calc(82.75rem + 50%)' }} />
        </div>
    )
}
