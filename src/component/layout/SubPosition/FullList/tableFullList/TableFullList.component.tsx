import React, { useState } from 'react';
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import { ReactComponent as EditIcon } from "../../../../../assets/icons/edit.svg"
import { Item, EditableCellProps } from "./tableFullList.type"


const EditableCell: React.FC<EditableCellProps> = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{ margin: 0 }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

const originData: Item[] = [
    {
        key: "1",
        positionCode: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        unitId: 651,
        surveyCategory: "Random text",
    },
    {
        key: "2",
        positionCode: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        unitId: 651,
        surveyCategory: "Random text",
    },
    {
        key: "3",
        positionCode: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        // unitId: 651,
        // surveyCategory: "Random text",
    },
    {
        key: "4",
        positionCode: 123456789,
        nameRu: "Сельское хозяйство",
        nameUz: "Қишлоқ хўжалиги",
        unitId: 651,
        surveyCategory: "Random text",
    },
];

export const TableFullList: React.FC = () => {
    const [form] = Form.useForm();
    // WITH FAKE DATA 
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');

    const isEditing = (record: Item) => record.key === editingKey;

    const edit = (record: Partial<Item> & { key: React.Key }) => {
        form.setFieldsValue({ positionCode: '', nameRu: '', nameUz: '', unitId: '', surveyCategory: '', ...record });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key: React.Key) => {
        try {
            const row = (await form.validateFields()) as Item;

            const newData = [...data];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns: any[] = [
        {
            title: '№',
            dataIndex: 'no',
            width: "5%",
            render: (v: string, r: Item, index: number) => <p>{index + 1}</p>,
        },
        {
            title: 'PositionCode',
            dataIndex: 'positionCode',
            editable: true,
            render: (value: number) => value ? <p>{value}</p> : <p>-</p>
        },
        {
            title: 'NameRu',
            dataIndex: 'nameRu',
            editable: true,
            render: (value: number) => value ? <p>{value}</p> : <p>-</p>
        },
        {
            title: 'NameUz',
            dataIndex: 'nameUz',
            editable: true,
            render: (value: number) => value ? <p>{value}</p> : <p>-</p>
        },
        {
            title: 'UnitId',
            dataIndex: 'unitId',
            editable: true,
            render: (value: number) => value ? <p>{value}</p> : <p>-</p>
        },
        {
            title: 'SurveyCategory',
            dataIndex: 'surveyCategory',
            editable: true,
            render: (value: number) => value ? <p>{value}</p> : <p>-</p>
        },
        {
            title: '',
            dataIndex: 'edit',
            width: "9.5rem",
            fixed: 'right',
            render: (_: any, record: Item) => {
                const editable = isEditing(record);
                return editable ? (
                    <div>
                        <Typography.Link onClick={() => save(record.key)} style={{ marginRight: 8 }}>
                            Сохранить
                        </Typography.Link>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <span style={{ cursor: "pointer" }}>Cancel</span>
                        </Popconfirm>
                    </div>
                ) : (
                    <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                        <EditIcon />
                    </Typography.Link>
                );
            },
        },
    ];

    const mergedColumns = columns.map(col => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: Item) => ({
                record,
                inputType: col.dataIndex === 'positionCode' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    return (
        <Form form={form} component={false}>
            <Table
                components={{
                    body: {
                        cell: EditableCell,
                    },
                }}
                bordered
                dataSource={data}
                columns={mergedColumns}
                rowClassName="editable-row"
                pagination={{
                    onChange: cancel,
                }}
                scroll={{ x: 'calc(43.75rem + 20%)' }}
            />
        </Form>
    );
};
