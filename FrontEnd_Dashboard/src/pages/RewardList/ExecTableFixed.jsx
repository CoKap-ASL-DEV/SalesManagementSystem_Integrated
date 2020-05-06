import React from 'react';
import { Table, Popconfirm } from 'antd';
import { AiFillFilePdf } from 'react-icons/ai';
import { FilePdfOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import GET_TALBE_QUERY from '../../services/get_table';

import DelBtn from './DeleteTableDataButton';
import { Query } from 'react-apollo';

const colWidth = 200;

const columns = [
  {
    title: '순번',

    width: colWidth - 120,
    dataIndex: 'SeqNum',
    key: 'SeqNum',

    align: 'center',
  },
  // {
  //   title: 'operation',
  //   dataIndex: 'operation',
  //   fixed: 'left',
  //   width: colWidth - 100,
  //   align: 'center',
  //   render: (text, record) => <DelBtn delId={record.SeqNum} />,
  // },

  // {
  //   title: 'file',
  //   dataIndex: 'file',
  //   fixed: 'left',
  //   width: colWidth - 100,
  //   align: 'center',
  //   render: (text, record) => (
  //     <FilePdfOutlined style={{ fontSize: '20px', color: '#08c' }} />
  //   ),
  // },
  {
    title: '구매 Order from BAUR',

    align: 'center',
    width: colWidth - 50,

    children: [
      {
        title: 'PO #',
        dataIndex: 'PoNumber',
        key: 'PoNumber',
        width: colWidth - 50,
        align: 'center',
      },
      {
        title: 'Issue Date',
        dataIndex: 'IssueDate',
        key: 'IssueDate',
        width: colWidth - 50,
        align: 'center',

        onFilter: (value, record) => record.IssueDate.indexOf(value) === 0,
        sorter: (a, b) => a.IssueDate.length - b.IssueDate.length,
        sortDirections: ['descend'],
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
  {
    title: '총 구매가',
    align: 'center',
    children: [
      {
        title: 'US$',
        dataIndex: 'TotalBuyPrice_Dlr',
        key: 'TotalBuyPrice_Dlr',
        width: colWidth,
        align: 'center',
      },
      {
        title: '원화',
        dataIndex: 'TotalBuyPrice_Won',
        key: 'TotalBuyPrice_Won',
        width: colWidth,
        align: 'center',
      },
    ],
  },
  {
    title: '차액(판매가 -구매가)',
    align: 'center',
    children: [
      {
        title: 'US$',
        dataIndex: 'Difference_Dlr',
        key: 'Difference_Dlr',
        width: colWidth,
        align: 'center',
      },
      {
        title: '원화',
        dataIndex: 'Difference_Won',
        key: 'Difference_Won',
        width: colWidth,
        align: 'center',
      },
    ],
  },
  // {
  //   title: '기술료',
  //   width: colWidth - 50,
  //   dataIndex: 'TotalTechFare',
  //   key: 'TotalTechFare',

  //   align: 'center',
  // },
  {
    title: '적용환율',
    align: 'center',

    children: [
      {
        title: '기준일',
        dataIndex: 'WDRDate',
        key: 'WDRDate',
        width: colWidth,
        align: 'center',
      },
      {
        title: '매매기준(KW/USD)',
        dataIndex: 'WonDollarRatio',
        key: 'WonDollarRatio',
        width: colWidth,
        align: 'center',
      },
    ],
  },

  // {
  //   title: '주문수량',
  //   align: 'center',
  //   children: [
  //     {
  //       title: 'M-Ver.',
  //       dataIndex: 'OrderNum_Mver',
  //       key: 'OrderNum_Mver',
  //       width: colWidth,
  //       align: 'center',
  //     },
  //     {
  //       title: 'S-Ver.',
  //       dataIndex: 'OrderNum_Sver',
  //       key: 'OrderNum_Sver',
  //       width: colWidth,
  //       align: 'center',
  //     },
  //     {
  //       title: 'SA-Ver.',
  //       dataIndex: 'OrderNum_SAver',
  //       key: 'OrderNum_SAver',
  //       width: colWidth,
  //       align: 'center',
  //     },
  //     {
  //       title: 'M Package',
  //       dataIndex: 'OrderNum_MPack',
  //       key: 'OrderNum_MPack',
  //       width: colWidth,
  //       align: 'center',
  //     },
  //     {
  //       title: '총수량',
  //       dataIndex: 'TotalNum',
  //       key: 'TotalNum',
  //       width: colWidth,
  //       align: 'center',
  //     },
  //   ],
  // },

  // {
  //   title: '기술료 납입',
  //   align: 'center',
  //   children: [
  //     {
  //       title: '한전',
  //       dataIndex: 'TechFare_KEPCO',
  //       key: 'TechFare_KEPCO',
  //       width: colWidth,
  //       align: 'center',
  //     },
  //     {
  //       title: '목포해양대',
  //       dataIndex: 'TechFare_Mokpo',
  //       key: 'TechFare_Mokpo',
  //       width: colWidth,
  //       align: 'center',
  //     },
  //     {
  //       title: '소계',
  //       dataIndex: 'TotalTechFare',
  //       key: 'TotalTechFare',
  //       width: colWidth,
  //       align: 'center',
  //     },
  //   ],
  // },

  // {
  //   title: '특허처분보상\n60%',
  //   align: 'center',
  //   width: colWidth,
  //   dataIndex: 'PatentReward',
  //   key: 'PatentReward',
  // },
  // {
  //   title: '순수익',
  //   align: 'center',
  //   children: [
  //     {
  //       title: '파워플러스',
  //       dataIndex: 'NetIncome_PowerPlus',
  //       key: 'NetIncome_PowerPlus',
  //       width: colWidth,
  //       align: 'center',
  //     },
  //     {
  //       title: '한전',
  //       dataIndex: 'NetIncome_KEPCO',
  //       key: 'NetIncome_KEPCO',
  //       width: colWidth,
  //       align: 'center',
  //     },
  //     {
  //       title: '소계',
  //       dataIndex: 'Total_NetIncome',
  //       key: 'Total_NetIncome',
  //       width: colWidth,
  //       align: 'center',
  //     },
  //   ],
  // },
];

const getDataSrc = data =>
  data.formDatas.map(
    ({
      id,
      PoNumber,
      IssueDate,
      WDRDate,
      WonDollarRatio,
      OrderNum_Mver,
      OrderNum_Sver,
      OrderNum_SAver,
      OrderNum_MPack,

      // SellPrice_Mver,
      // SellPrice_Sver,
      // SellPrice_SAver,
      // SellPrice_MPack,

      // PurchaseRatio,
      // TechRatio,
      // KEPCORatio,
      // MokpoRatio,
      // RewardRatio,
      TotalNum,
      TotalSellPrice_Dlr,
      TotalSellPrice_Won,
      TotalBuyPrice_Dlr,
      TotalBuyPrice_Won,
      TotalTechFare,
      Difference_Dlr,
      Difference_Won,
      RewardType,
    }) => {
      // const TotalNum =
      //   OrderNum_Mver + OrderNum_Sver + OrderNum_SAver + OrderNum_MPack;
      // const TotalSellPrice_Dlr =
      //   SellPrice_Mver * OrderNum_Mver +
      //   SellPrice_Sver * OrderNum_Sver +
      //   SellPrice_SAver * OrderNum_SAver +
      //   SellPrice_MPack * OrderNum_MPack;
      // const TotalSellPrice_Won = TotalSellPrice_Dlr * WonDollarRatio;
      // const TotalBuyPrice_Dlr = TotalSellPrice_Dlr * PurchaseRatio;
      // const TotalBuyPrice_Won = TotalSellPrice_Won * PurchaseRatio;
      // const TechFare_KEPCO = TotalBuyPrice_Won * TechRatio * KEPCORatio;
      // const TechFare_Mokpo = TotalBuyPrice_Won * TechRatio * MokpoRatio;
      // const TotalTechFare = TechFare_KEPCO * TechFare_Mokpo;
      // const PatentReward = TechFare_KEPCO * RewardRatio;
      // const NetIncome_PowerPlus = TotalBuyPrice_Won - TechFare_KEPCO;
      // const NetIncome_KEPCO = TotalSellPrice_Won - TotalBuyPrice_Won;
      // const Total_NetIncome = NetIncome_PowerPlus + NetIncome_KEPCO;

      return {
        key: id,
        SeqNum: id,
        PoNumber: PoNumber,
        IssueDate: IssueDate,
        WDRDate: WDRDate,
        WonDollarRatio: WonDollarRatio,
        OrderNum_Mver: OrderNum_Mver,
        OrderNum_Sver: OrderNum_Sver,
        OrderNum_SAver: OrderNum_SAver,
        OrderNum_MPack: OrderNum_MPack,
        TotalNum: TotalNum,
        TotalSellPrice_Dlr: TotalSellPrice_Dlr,
        TotalSellPrice_Won: TotalSellPrice_Won,
        TotalBuyPrice_Dlr: TotalBuyPrice_Dlr,
        TotalBuyPrice_Won: TotalBuyPrice_Won,
        Difference_Dlr: Difference_Dlr,
        Difference_Won: Difference_Won,
        // TechFare_KEPCO: TechFare_KEPCO,
        // TechFare_Mokpo: TechFare_Mokpo,
        TotalTechFare: TotalTechFare,
        RewardType: RewardType,
        // PatentReward: PatentReward,
        // NetIncome_PowerPlus: NetIncome_PowerPlus,
        // NetIncome_KEPCO: NetIncome_KEPCO,
        // Total_NetIncome: Total_NetIncome,
      };
    },
  );

const GetData = () => (
  <Query query={GET_TALBE_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      const dtSrc = getDataSrc(data);

      const dtFiltered = dtSrc.filter(dt => dt.RewardType === '실시');
      return (
        <Table
          columns={columns}
          dataSource={dtFiltered}
          // scroll={{ x: 3600 }}
          size="small"
          bordered
          // expandedRowRender={record => <p>{record.PoNumber}</p>}

          //mountnode
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
