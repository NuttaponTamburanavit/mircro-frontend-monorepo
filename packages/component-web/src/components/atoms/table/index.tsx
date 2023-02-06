import { useState } from 'react'
import { Table, Radio, Space, Tag, ConfigProvider } from 'antd';
import { ThemeConfig } from 'antd/es/config-provider';
import type { ColumnsType } from 'antd/es/table';

type TablePaginationPosition =
  | 'topLeft'
  | 'topCenter'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomCenter'
  | 'bottomRight';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const topOptions = [
  { label: 'topLeft', value: 'topLeft' },
  { label: 'topCenter', value: 'topCenter' },
  { label: 'topRight', value: 'topRight' },
  { label: 'none', value: 'none' },
];

const bottomOptions = [
  { label: 'bottomLeft', value: 'bottomLeft' },
  { label: 'bottomCenter', value: 'bottomCenter' },
  { label: 'bottomRight', value: 'bottomRight' },
  { label: 'none', value: 'none' },
];

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: string[]) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const CustomeTable = (theme?: ThemeConfig) => {

  const [top, setTop] = useState<TablePaginationPosition>('topLeft');
  const [bottom, setBottom] = useState<TablePaginationPosition>('bottomRight');

  return (
    <ConfigProvider theme={theme}>
      <div>
        <div>
          <Radio.Group
            style={{ marginBottom: 10 }}
            options={topOptions}
            value={top}
            onChange={(e) => {
              setTop(e.target.value);
            }}
          />
        </div>
        <Radio.Group
          style={{ marginBottom: 10 }}
          options={bottomOptions}
          value={bottom}
          onChange={(e) => {
            setBottom(e.target.value);
          }}
        />
        <Table columns={columns} pagination={{ position: [top, bottom] }} dataSource={data} />
      </div>
    </ConfigProvider>
  )
}

export default CustomeTable;