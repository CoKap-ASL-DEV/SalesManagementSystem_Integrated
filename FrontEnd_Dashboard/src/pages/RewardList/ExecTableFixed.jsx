import React from 'react';
import { Table } from 'antd';

// import { Query } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import 'antd/dist/antd.css';

import numberwithCommas from '../../utils/numberWithCommas';
import GET_TALBE_QUERY from '../../services/get_table';

const colWidth = 200;

const TableStyle = styled.table`
   {
    width: 100%;
  }
`;
const Tr = styled.tr`
   {
    //border: 1px solid;
  }
`;
const Td = styled.td`
   {
    color: rgba(0, 0, 0, 0.85);
    font-weight: normal;
    font-size: 15px;
    max-width: 300px;
    padding: 7px 24px;
    line-height: 0.3;
  }
`;
const columns = [
  {
    title: '순번',

    width: colWidth - 120,
    dataIndex: 'SeqNum',
    key: 'SeqNum',

    align: 'center',
  },

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
        TotalSellPrice_Dlr: numberwithCommas(TotalSellPrice_Dlr),
        TotalSellPrice_Won: numberwithCommas(TotalSellPrice_Won),
        TotalBuyPrice_Dlr: numberwithCommas(TotalBuyPrice_Dlr),
        TotalBuyPrice_Won: numberwithCommas(TotalBuyPrice_Won),
        Difference_Dlr: numberwithCommas(Difference_Dlr),
        Difference_Won: numberwithCommas(Difference_Won),

        TotalTechFare: numberwithCommas(TotalTechFare),
        RewardType: RewardType,
      };
    },
  );

const GetData = props => {
  const { error, loading, data } = useQuery(GET_TALBE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const dtSrc = getDataSrc(data);

  const dtFiltered = dtSrc.filter(dt => dt.RewardType === '실시');

  return (
    <Table
      columns={columns}
      dataSource={dtFiltered}
      // scroll={{ x: 3600 }}
      //size="small"
      bordered
      footer={() => {
        let totalSellDlr = 0;
        let totalSellWon = 0;
        let totalBuyDlr = 0;
        let totalBuyWon = 0;

        let diffDlr = 0;
        let diffWon = 0;
        dtFiltered.forEach(
          ({
            TotalSellPrice_Dlr,
            TotalSellPrice_Won,
            TotalBuyPrice_Dlr,
            TotalBuyPrice_Won,

            Difference_Dlr,
            Difference_Won,
          }) => {
            totalSellDlr += parseFloat(TotalSellPrice_Dlr.replace(/\,/gi, ''));
            totalSellWon += parseFloat(TotalSellPrice_Won.replace(/\,/gi, ''));
            totalBuyDlr += parseFloat(TotalBuyPrice_Dlr.replace(/\,/gi, ''));
            totalBuyWon += parseFloat(TotalBuyPrice_Won.replace(/\,/gi, ''));

            diffDlr = parseFloat(Difference_Dlr.replace(/\,/gi, ''));
            diffWon = parseFloat(Difference_Won.replace(/\,/gi, ''));
          },
        );
        props.setDiffTotal(diffWon);
        return (
          <>
            <TableStyle>
              <Tr>
                <Td
                  style={{
                    fontSize: '22px',
                    //border: 'solid 1px',
                    width: '53px',

                    textAlign: 'center',
                  }}
                ></Td>
                <Td
                  style={{
                    //border: 'solid 1px',
                    width: '123px',
                    textAlign: 'center',
                  }}
                ></Td>
                <Td
                  style={{
                    //border: 'solid 1px',
                    //fontSize: '18px',
                    width: '125px',
                    textAlign: 'center',
                  }}
                >
                  누계
                </Td>
                <Td
                  style={{
                    //border: 'solid 1px',
                    width: '160px',
                    textAlign: 'center',
                  }}
                >
                  {numberwithCommas(totalSellDlr)}
                </Td>
                <Td
                  style={{
                    //border: 'solid 1px',
                    width: '160px',
                    textAlign: 'center',
                  }}
                >
                  {numberwithCommas(parseFloat(totalSellWon))}
                </Td>
                <Td
                  style={{
                    //border: 'solid 1px',
                    width: '160px',
                    textAlign: 'center',
                  }}
                >
                  {numberwithCommas(parseFloat(totalBuyDlr))}
                </Td>
                <Td
                  style={{
                    //border: 'solid 1px',
                    width: '160px',
                    textAlign: 'center',
                  }}
                >
                  {numberwithCommas(parseFloat(totalBuyWon))}
                </Td>
                <Td
                  style={{
                    //border: 'solid 1px',
                    width: '160px',
                    textAlign: 'center',
                  }}
                >
                  {numberwithCommas(parseFloat(diffDlr))}
                </Td>
                <Td
                  style={{
                    //border: 'solid 1px',
                    width: '160px',
                    textAlign: 'center',
                  }}
                >
                  {numberwithCommas(parseFloat(diffWon))}
                </Td>
                <Td
                  style={{
                    //border: 'solid 1px',
                    width: '160px',
                    textAlign: 'center',
                  }}
                ></Td>
                <Td
                  style={{
                    //border: 'solid 1px',
                    width: '142px',
                    textAlign: 'center',
                  }}
                ></Td>
              </Tr>
            </TableStyle>
          </>
        );
      }}
    />
  );
};

const FixedTable = props => {
  return (
    <div>
      <GetData setDiffTotal={props.setDiffTotal} />
    </div>
  );
};

export default FixedTable;
