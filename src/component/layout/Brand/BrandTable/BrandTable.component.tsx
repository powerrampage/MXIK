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

const columns: ColumnsType<BrandTableType> = [
    {
        title: '№',
        dataIndex: 'numero',
        key: "attribute",
        render: (t: string, r, i) => <p>{i + 1}</p>,
    },
    {
        title: 'SubPosition',
        dataIndex: 'subposition',
        key: "subposition",
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
        key: "nameRu",
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
        key: "nameUz",
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
        key: "subPosition",
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
        key: "brand",
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
        key: "attribute",
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
        key: "install",
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


const randomRowKeyForTable = (record: BrandTableType) => record.brand * Math.random() * Math.random()

export const BrandTable: FC = () => {
    return (
        <Table rowKey={randomRowKeyForTable} dataSource={dataSource} columns={columns} bordered={true} />
    )
}
