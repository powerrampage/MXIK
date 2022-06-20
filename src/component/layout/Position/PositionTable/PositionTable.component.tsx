import { Table } from "antd";
import type { ColumnsType } from 'antd/lib/table';
import { FC } from "react";
import { DataType } from "./positionTable.type";
import "./positionTable.styles.scss"

const dataSource: DataType[] = [
    {
        classcode: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        subPosition: 322,
        brand: 1234,
        attribute: 4567,
        install: 10,
    },
    {
        classcode: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        subPosition: 322,
        brand: 1234,
        attribute: 4567,
        install: 10,
    },
    {
        classcode: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        subPosition: 322,
        brand: 1234,
        attribute: 4567,
        install: 10,
    },
    {
        classcode: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        subPosition: 322,
        brand: 1234,
        attribute: 4567,
        install: 10,
    },
    {
        classcode: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        subPosition: 322,
        brand: 1234,
        attribute: 4567,
        install: 10,
    },
    {
        classcode: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        subPosition: 322,
        brand: 1234,
        attribute: 4567,
        install: 10,
    },
    {
        classcode: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        subPosition: 322,
        brand: 1234,
        attribute: 4567,
        install: 10,
    },
    {
        classcode: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        subPosition: 322,
        brand: 1234,
        attribute: 4567,
        install: 10,
    },
    {
        classcode: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        subPosition: 322,
        brand: 1234,
        attribute: 4567,
        install: 10,
    },
];

const columns: ColumnsType<DataType> = [
    {
        title: '№',
        dataIndex: 'numero',
        render: (text: string, r, i) => <p>{i + 1}</p>,
    },
    {
        title: 'ClassCode',
        dataIndex: 'classcode',
        responsive: ['lg'],
        render(text, r, index) {
            return {
                props: {
                    style: { background: (index % 2 === 0) ? "rgb(232,240,253)" : "" }
                },
                children: <p>{text}</p>
            };
        }
    },
    {
        title: 'NameRu',
        dataIndex: 'nameRu',
        render(text, r, index) {
            return {
                props: {
                    style: { background: (index % 2 === 0) ? "rgb(232,240,253)" : "" }
                },
                children: <p>{text}</p>
            };
        }
    },
    {
        title: 'NameUz',
        dataIndex: 'nameUz',
        render(text, r, index) {
            return {
                props: {
                    style: { background: (index % 2 === 0) ? "rgb(232,240,253)" : "" }
                },
                children: <p>{text}</p>
            };
        }
    },
    {
        title: 'Sub position',
        dataIndex: 'subPosition',
        render(text, r, index) {
            return {
                props: {
                    style: { background: (index % 2 === 0) ? "#F7F6FB" : "" }
                },
                children: <p>{text}</p>
            };
        }
    },
    {
        title: 'Brand',
        dataIndex: 'brand',
        render(text, r, index) {
            return {
                props: {
                    style: { background: (index % 2 === 0) ? "#F7F6FB" : "" }
                },
                children: <p>{text}</p>
            };
        }
    },
    {
        title: 'Attribute',
        dataIndex: 'attribute',
        render(text, r, index) {
            return {
                props: {
                    style: { background: (index % 2 === 0) ? "#F7F6FB" : "" }
                },
                children: <p>{text}</p>
            };
        }
    },
    {
        title: 'Упаковка',
        dataIndex: 'install',
        render(text, r, index) {
            return {
                props: {
                    style: { background: (index % 2 === 0) ? "#F7F6FB" : "" }
                },
                children: <p>{text}</p>
            };
        }
    },
];


const randomRowKeyForTable = (record: DataType) => record.brand * Math.random() * Math.random();

export const PositionTable: FC = () => {
    return (
        <div className="positionTable">
            <Table rowKey={randomRowKeyForTable} dataSource={dataSource} columns={columns} bordered={true} scroll={{ x: 'calc(43.75rem + 20%)' }} />
        </div>
    )
}

