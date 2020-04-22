import React from 'react';
import { Descriptions, Badge, Table } from 'antd';
import 'antd/dist/antd.css';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
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
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];
const PatentDescription = () => {
  return (
    <div>
      <Descriptions title="Patent Info" bordered>
        <Descriptions.Item label="특허명" span={3}>
          초저주파 탄델타의 측정 데이터를 이용한 전력 케이블의 상태진단 및
          잔존수명 측정장치 및 그 방법
        </Descriptions.Item>
        <Descriptions.Item label="특허번호">10-1466623</Descriptions.Item>
        <Descriptions.Item label="등록일">2014년 11월 24일</Descriptions.Item>
        <Descriptions.Item label="유효기간">2033년 11월 23일</Descriptions.Item>
        <Descriptions.Item label="지분분할">
          <Badge status="processing" text="한전 : 80%" />
          <br />
          <Badge status="processing" text="목포해양대 : 20%" />
        </Descriptions.Item>
        <Descriptions.Item label="특허권자" span={3}>
          <Badge status="processing" text="김성민 : 35%" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Badge status="processing" text="김동섭 : 35%" />
          <br />
          <Badge status="processing" text="전시식 : 5%" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Badge status="processing" text="김병석 : 5%" />
          <br />
        </Descriptions.Item>
      </Descriptions>
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default PatentDescription;
