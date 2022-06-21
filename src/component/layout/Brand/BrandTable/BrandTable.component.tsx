import { Table } from "antd";
import type { ColumnsType } from 'antd/lib/table';
import { FC } from "react";
import { BrandTableType } from "./brandTable.type";


const dataSource: BrandTableType[] = [
    {
        subposition: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        subPosition: 322,
        brand: 1234,
        attribute: 4567,
        install: 10,
    },
    {
        subposition: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        subPosition: 322,
        brand: 1234,
        attribute: 4567,
        install: 10,
    },
    {
        subposition: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        subPosition: 322,
        brand: 1234,
        attribute: 4567,
        install: 10,
    },
    {
        subposition: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        subPosition: 322,
        brand: 1234,
        attribute: 4567,
        install: 10,
    },
    {
        subposition: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        subPosition: 322,
        brand: 1234,
        attribute: 4567,
        install: 10,
    },
    {
        subposition: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        subPosition: 322,
        brand: 1234,
        attribute: 4567,
        install: 10,
    },
    {
        subposition: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        subPosition: 322,
        brand: 1234,
        attribute: 4567,
        install: 10,
    },
    {
        subposition: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        subPosition: 322,
        brand: 1234,
        attribute: 4567,
        install: 10,
    },
    {
        subposition: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        subPosition: 322,
        brand: 1234,
        attribute: 4567,
        install: 10,
    },
];

const columns: ColumnsType<BrandTableType> | any = [
    {
        title: '№',
        dataIndex: 'numero',
        key: "attribute",
        render: (text: string, r: BrandTableType, index: number) => <p>{index + 1}</p>,
    },
    {
        title: 'SubPosition',
        dataIndex: 'subposition',
        key: "subposition",
        onCell(text: string, r: BrandTableType, index: number) {
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
        key: "nameRu",
        onCell(text: string, r: BrandTableType, index: number) {
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
        key: "nameUz",
        onCell(text: string, r: BrandTableType, index: number) {
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
        key: "subPosition",
        onCell(text: string, r: BrandTableType, index: number) {
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
        key: "brand",
        onCell(text: string, r: BrandTableType, index: number) {
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
        key: "attribute",
        onCell(text: string, r: BrandTableType, index: number) {
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
        key: "install",
        onCell(text: string, r: BrandTableType, index: number) {
            return {
                props: {
                    style: { background: (index % 2 === 0) ? "#F7F6FB" : "" }
                },
                children: <p>{text}</p>
            };
        }
    },
];


const randomRowKeyForTable = (record: BrandTableType) => record.brand * Math.random() * Math.random()

export const BrandTable: FC = () => {
    return (
        <Table rowKey={randomRowKeyForTable} dataSource={dataSource} columns={columns} bordered={true} scroll={{ x: 'calc(43.75rem + 20%)' }} />
    )
}
