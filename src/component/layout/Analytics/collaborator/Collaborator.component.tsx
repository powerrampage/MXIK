import { FC, useState } from "react"
import { Button, Table } from "antd"
import type { ColumnsType } from 'antd/lib/table';
import { ReactComponent as SubArrow } from "../../../../assets/icons/subArrow.svg"
import "./collaborator.styles.scss"
import { CollaboratorType } from "./collaborator.type";

const dataSource: CollaboratorType[] = [
    {
        user: "Аскаров Т.И.",
        total: 2000,
        received: 400,
        denied: 400,
        remained: 1200
    },
    {
        user: "Аскаров Т.И.",
        total: 2000,
        received: 400,
        denied: 400,
        remained: 1200
    },
    {
        user: "Аскаров Т.И.",
        total: 2000,
        received: 400,
        denied: 400,
        remained: 1200
    },
    {
        user: "Аскаров Т.И.",
        total: 2000,
        received: 400,
        denied: 400,
        remained: 1200
    },
    {
        user: "Аскаров Т.И.",
        total: 2000,
        received: 400,
        denied: 400,
        remained: 1200
    },
    {
        user: "Аскаров Т.И.",
        total: 2000,
        received: 400,
        denied: 400,
        remained: 1200
    },
    {
        user: "Аскаров Т.И.",
        total: 2000,
        received: 400,
        denied: 400,
        remained: 1200
    },
    {
        user: "Аскаров Т.И.",
        total: 2000,
        received: 400,
        denied: 400,
        remained: 1200
    },
    {
        user: "Аскаров Т.И.",
        total: 2000,
        received: 400,
        denied: 400,
        remained: 1200
    },
];

export const Collaborator: FC = () => {
    const [isActive, setIsActive] = useState(true);

    // event: React.MouseEvent<HTMLElement>
    const handleCollaborator = () => {
        setIsActive(!isActive)
    }

    const columns: ColumnsType<CollaboratorType> = [
        {
            title: "",
            dataIndex: "no",
            width: 30,
            render: (t: string, r: CollaboratorType, id: number) => <p className="collaborator__username">{id + 1}.</p>,
        },
        {
            title: '',
            dataIndex: 'user',
            render: (t: string, r: CollaboratorType, id: number) => <p className="collaborator__username">{t}</p>,
        },
        {
            title: 'Всего',
            dataIndex: 'total',
            render(t: string, r: CollaboratorType, i: number) {
                return {
                    props: {
                        style: { background: "#E8F0FD", textAlign: "center" }
                    },
                    children: <p className="collaborator__table_title">{t}</p>
                };
            }
        },
        {
            title: 'Принято',
            dataIndex: 'received',
            render(t: string, r: CollaboratorType, i: number) {
                return {
                    props: {
                        style: { background: "#fff", textAlign: "center" }
                    },
                    children: <p className="collaborator__table_title" style={{ color: "#6B8B48" }}>{t}</p>
                };
            }
        },
        {
            title: 'Отказано',
            dataIndex: 'denied',
            render(t: string, r: CollaboratorType, i: number) {
                return {
                    props: {
                        style: { background: "#E8F0FD", textAlign: "center" }
                    },
                    children: <p className="collaborator__table_title" style={{ color: "#E14856" }}>{t}</p>
                };
            }
        },
        {
            title: 'Остолось',
            dataIndex: 'remained',
            render(t: string, r: CollaboratorType, i: number) {
                return {
                    props: {
                        style: { background: "#fff", textAlign: "center" }
                    },
                    children: <p className="collaborator__table_title" style={{ color: "#A8AEF3" }}>{t}</p>
                };
            }
        },
    ];

    const randomRowKeyForTable = (record: CollaboratorType) => record.remained * Math.random() * Math.random()

    return (

        <div className="collaborator">
            <div className="collaborator__heading">
                <h2 className="collaborator__title">Сотрудники</h2>
                <Button onClick={handleCollaborator} type="ghost" style={{ padding: "1.5rem 1.5625rem" }} className={isActive ? "collaborator__btn active" : "collaborator__btn"}>
                    Развернуть
                    <SubArrow />
                </Button>
            </div>
            {isActive &&
                <div className="collaborator__content">
                    <div className="collaborator__table">
                        <Table rowKey={randomRowKeyForTable} dataSource={dataSource} columns={columns} scroll={{ x: 'calc(43.75rem + 20%)' }} />
                    </div>
                </div>}
        </div>
    )
}
