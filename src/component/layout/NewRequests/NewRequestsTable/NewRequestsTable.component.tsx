import { FC } from "react";
import { Table } from "antd";
import type { ColumnsType } from 'antd/lib/table';
import { NewRequestsTableProps, TypeNewRequestsTable } from "./newRequestsTable.type";
import "./newRequestsTable.styles.scss"
// ICONS
import { ReactComponent as CheckIcon } from "../../../../assets/icons/check.svg"
import { ReactComponent as FileIcon } from "../../../../assets/icons/file.svg"
import { ReactComponent as ErrorIcon } from "../../../../assets/icons/error-circle.svg"


export const NewRequestsTable: FC<NewRequestsTableProps> = ({ data }) => {
  const columns: ColumnsType<TypeNewRequestsTable> = [
    {
      title: '№',
      dataIndex: 'no',
      width: 52,
      render: (v, r, i) => <p>{i + 1}</p>
    },
    {
      title: 'Действие',
      dataIndex: 'action',
      width: 150,
      render: () => <div className="newRequestsTable__actions">
        <button><CheckIcon /></button>
        <button><ErrorIcon /></button>
        <button><FileIcon /></button>
      </div>
    },
    {
      title: 'Group',
      dataIndex: 'group',
    },
    {
      title: 'FMO',
      dataIndex: 'FMO',
    },
    {
      title: 'Creater',
      dataIndex: 'creater',
    },
    {
      title: 'Name company',
      dataIndex: 'nameCompany',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'Product',
      dataIndex: 'product',
    },
  ];
  const randomRowKeyForTable = (r: TypeNewRequestsTable) => Math.random() * Math.random();

  return (
    <div className="newRequestsTable">
      <Table rowKey={randomRowKeyForTable} dataSource={data} columns={columns} bordered scroll={{ x: 'calc(45.75rem + 20%)' }} />
    </div>
  )
}