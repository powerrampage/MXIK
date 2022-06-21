import { FC } from 'react';
import { Table } from 'antd';
import style from "./tableNotIncluded.module.scss"
// TYPE
import type { ColumnsType } from 'antd/lib/table';
import { TableNotIncludedType } from './tableNotIncluded.type';
// ICONS
import { ReactComponent as CheckIcon } from "../../../../../assets/icons/check.svg"
import { ReactComponent as DeletIcon } from "../../../../../assets/icons/error-circle.svg"

const data: TableNotIncludedType[] = [
    {
        positionCode: 'John Brown',
        nameRu: "Сельское хозяйство",
        nameUz: 'New York No. 1 Lake Park',
        unitId: 0,
        surveyCategory: "Text"
    },
    {
        positionCode: 'John Brown',
        nameRu: "Сельское хозяйство",
        nameUz: 'New York No. 1 Lake Park',
        unitId: 0,
        surveyCategory: "Text"
    },
    {
        positionCode: 'John Brown',
        nameRu: "Сельское хозяйство",
        nameUz: 'New York No. 1 Lake Park',
        unitId: 0,
        surveyCategory: "Text"
    },
    {
        positionCode: 'John Brown',
        nameRu: "Сельское хозяйство",
        nameUz: 'New York No. 1 Lake Park',
        unitId: 0,
        surveyCategory: "Text"
    },
    {
        positionCode: 'John Brown',
        nameRu: "Сельское хозяйство",
        nameUz: 'New York No. 1 Lake Park',
        unitId: 0,
        surveyCategory: "Text"
    },
    {
        positionCode: 'John Brown',
        nameRu: "Сельское хозяйство",
        nameUz: 'New York No. 1 Lake Park',
        unitId: 0,
        surveyCategory: "Text"
    },
    {
        positionCode: 'John Brown',
        nameRu: "Сельское хозяйство",
        nameUz: 'New York No. 1 Lake Park',
        unitId: 0,
        surveyCategory: "Text"
    },
];


// ACTIONS_BTNS.
const onCheck = () => { }
const onDelete = () => { }

const columns: ColumnsType<TableNotIncludedType> = [
    {
        title: "№",
        dataIndex: "no",
        width: "4%",
        render: (v: string, r: TableNotIncludedType, index: number) => <p>{index + 1}</p>
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
        title: '',
        dataIndex: 'edit',
        width: "3%",
        // fixed: 'right',
        render: () => <div className={style.actions}>
            <button onClick={onCheck}><CheckIcon /></button>
            <button onClick={onDelete}><DeletIcon /></button>
        </div>
    },
];

const randomRowKeyForTable = () => Math.random() * Math.random()

export const TableNotIncluded: FC = () => {
    return (
        <div className={style.tableNotIncluded}>
            <Table rowKey={randomRowKeyForTable} columns={columns} dataSource={data} bordered scroll={{ x: 'calc(43.75rem + 20%)' }} />
        </div>
    )
}
