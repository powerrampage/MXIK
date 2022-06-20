import { Table } from "antd";
import type { ColumnsType } from 'antd/lib/table';
import { TypeNewRequestsTable } from "./newRequestsTable.type";
import "./newRequestsTable.styles.scss"
// ICONS
import { ReactComponent as CheckIcon } from "../../../../assets/icons/check.svg"
import { ReactComponent as FileIcon } from "../../../../assets/icons/file.svg"
import { ReactComponent as ErrorIcon } from "../../../../assets/icons/error-circle.svg"

const dataSource = [
  {
    group: 123,
    FMO: "Ахмедов И.А.",
    creater: "10.12.2022",
    nameCompany: "СП ООО “Тортик и мармеладик”",
    phone: "+998 90 000-00-00",
    product: "Пищевые продукты питания",
  },
  {
    group: 123,
    FMO: "Ахмедов И.А.",
    creater: "10.12.2022",
    nameCompany: "СП ООО “Тортик и мармеладик”",
    phone: "+998 90 000-00-00",
    product: "Пищевые продукты питания",
  },
  {
    group: 123,
    FMO: "Ахмедов И.А.",
    creater: "10.12.2022",
    nameCompany: "СП ООО “Тортик и мармеладик”",
    phone: "+998 90 000-00-00",
    product: "Пищевые продукты питания",
  },
  {
    group: 123,
    FMO: "Ахмедов И.А.",
    creater: "10.12.2022",
    nameCompany: "СП ООО “Тортик и мармеладик”",
    phone: "+998 90 000-00-00",
    product: "Пищевые продукты питания",
  },
  {
    group: 123,
    FMO: "Ахмедов И.А.",
    creater: "10.12.2022",
    nameCompany: "СП ООО “Тортик и мармеладик”",
    phone: "+998 90 000-00-00",
    product: "Пищевые продукты питания",
  },
  {
    group: 123,
    FMO: "Ахмедов И.А.",
    creater: "10.12.2022",
    nameCompany: "СП ООО “Тортик и мармеладик”",
    phone: "+998 90 000-00-00",
    product: "Пищевые продукты питания",
  },
  {
    group: 123,
    FMO: "Ахмедов И.А.",
    creater: "10.12.2022",
    nameCompany: "СП ООО “Тортик и мармеладик”",
    phone: "+998 90 000-00-00",
    product: "Пищевые продукты питания",
  },
  {
    group: 123,
    FMO: "Ахмедов И.А.",
    creater: "10.12.2022",
    nameCompany: "СП ООО “Тортик и мармеладик”",
    phone: "+998 90 000-00-00",
    product: "Пищевые продукты питания",
  },
  {
    group: 123,
    FMO: "Ахмедов И.А.",
    creater: "10.12.2022",
    nameCompany: "СП ООО “Тортик и мармеладик”",
    phone: "+998 90 000-00-00",
    product: "Пищевые продукты питания",
  },
  {
    group: 123,
    FMO: "Ахмедов И.А.",
    creater: "10.12.2022",
    nameCompany: "СП ООО “Тортик и мармеладик”",
    phone: "+998 90 000-00-00",
    product: "Пищевые продукты питания",
  },
  {
    group: 123,
    FMO: "Ахмедов И.А.",
    creater: "10.12.2022",
    nameCompany: "СП ООО “Тортик и мармеладик”",
    phone: "+998 90 000-00-00",
    product: "Пищевые продукты питания",
  },
];


export const NewRequestsTable = () => {
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
  const randomRowKeyForTable = (record: TypeNewRequestsTable) => Math.random() * Math.random();

  return (
    <div className="newRequestsTable">
      <Table rowKey={randomRowKeyForTable} dataSource={dataSource} columns={columns} bordered scroll={{ x: 'calc(45.75rem + 20%)' }} />
    </div>
  )
}
