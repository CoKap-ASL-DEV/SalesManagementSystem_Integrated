import React from 'react';
import { Table } from 'antd';
import numberwithCommas from '../../utils/numberWithCommas';
import { FilePdfOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import GET_TALBE_QUERY from '../../services/get_table';

import DelBtn from './DeleteTableDataButton';
import { Query } from 'react-apollo';

const colWidth = 160;

const columns = [
  {
    title: '순번',

    width: colWidth - 60,
    dataIndex: 'SeqNum',
    key: 'SeqNum',
    // fixed: 'left',
    align: 'center',
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    // fixed: 'left',
    width: colWidth - 60,
    align: 'center',
    render: (text, record) => <DelBtn delId={record.SeqNum} />,
  },

  {
    title: 'file',
    dataIndex: 'file',
    // fixed: 'left',
    width: colWidth - 100,
    align: 'center',
    render: (text, record) => (
      <a
        href={'http://localhost:2000/attachment/' + record.FileName}
        download
        target="_blank"
      >
        {/* <button type="submit"> */}
        <FilePdfOutlined style={{ fontSize: '20px', color: '#08c' }} />
        {/* </button> */}
        {/* </form> */}
      </a>
    ),
  },
  {
    title: '구매 Order from BAUR',
    // fixed: 'left',
    align: 'center',
    width: colWidth - 50,

    children: [
      {
        title: '주문번호',
        dataIndex: 'PoNumber',
        key: 'PoNumber',
        width: colWidth - 50,
        align: 'center',
      },
      {
        title: '주문일자',
        dataIndex: 'IssueDate',
        key: 'IssueDate',
        width: colWidth - 50,
        align: 'center',

        onFilter: (value, record) => record.IssueDate.indexOf(value) === 0,
        sorter: (a, b) => new Date(b.IssueDate) - new Date(a.IssueDate),
        defaultSortOrder: 'ascend',
      },
    ],
  },
  {
    title: '유형',

    width: colWidth - 100,
    dataIndex: 'RewardType',
    key: 'RewardType',
    // fixed: 'left',
    align: 'center',
  },

  {
    title: '주문수량',
    align: 'center',
    children: [
      {
        title: 'M-Ver.',
        dataIndex: 'OrderNum_Mver',
        key: 'OrderNum_Mver',
        width: colWidth - 50,
        align: 'center',
      },
      {
        title: 'S-Ver.',
        dataIndex: 'OrderNum_Sver',
        key: 'OrderNum_Sver',
        width: colWidth - 50,
        align: 'center',
      },
      {
        title: 'SA-Ver.',
        dataIndex: 'OrderNum_SAver',
        key: 'OrderNum_SAver',
        width: colWidth - 50,
        align: 'center',
      },
      {
        title: 'M Package',
        dataIndex: 'OrderNum_MPack',
        key: 'OrderNum_MPack',
        width: colWidth - 50,
        align: 'center',
      },
      {
        title: '총수량',
        dataIndex: 'TotalNum',
        key: 'TotalNum',
        width: colWidth - 50,
        align: 'center',
      },
    ],
  },

  {
    title: '총 판매가',
    align: 'center',
    children: [
      {
        title: 'US$',
        dataIndex: 'TotalSellPrice_Dlr',
        key: 'TotalSellPrice_Dlr',
        width: colWidth,
        align: 'center',
      },
      {
        title: '원화',
        dataIndex: 'TotalSellPrice_Won',
        key: 'TotalSellPrice_Won',
        width: colWidth,
        align: 'center',
      },
    ],
  },
];

const getDataSrc = data =>
  data.formDatas.map(
    ({
      id,
      PoNumber,
      IssueDate,
      FileName,

      RewardType,
      WonDollarRatio,
      OrderNum_Mver,
      OrderNum_Sver,
      OrderNum_SAver,
      OrderNum_MPack,

      TotalNum,
      TotalSellPrice_Dlr,
      TotalSellPrice_Won,
    }) => {
      return {
        key: id,
        SeqNum: id,
        PoNumber: PoNumber,
        IssueDate: IssueDate,
        RewardType: RewardType,
        FileName: FileName,

        OrderNum_Mver: OrderNum_Mver,
        OrderNum_Sver: OrderNum_Sver,
        OrderNum_SAver: OrderNum_SAver,
        OrderNum_MPack: OrderNum_MPack,
        TotalNum: TotalNum,
        TotalSellPrice_Dlr: numberwithCommas(TotalSellPrice_Dlr),
        TotalSellPrice_Won: numberwithCommas(TotalSellPrice_Won),
      };
    },
  );

const GetData = () => (
  <Query query={GET_TALBE_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      const dtSrc = getDataSrc(data);
      return (
        <Table
          columns={columns}
          dataSource={dtSrc}
          // scroll={{ x: 1200 }}
          size="small"
          bordered
        />
      );
    }}
  </Query>
);

const FixedTable = () => {
  return (
    <div>
      <GetData />
    </div>
  );
};

export default FixedTable;
