import React, { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { Table } from 'antd';
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

export default inject('rewardTotal')(
  observer(({ rewardTotal }) => {
    const { error, loading, data } = useQuery(GET_TALBE_QUERY);
    const { setDiffTotal } = rewardTotal;
    const [dtFiltered, setDtFiltered] = useState([]);
    const [totalSellDlr, setTotalSellDlr] = useState(0);
    const [totalSellWon, setTotalSellWon] = useState(0);
    const [totalBuyDlr, setTotalBuyDlr] = useState(0);
    const [totalBuyWon, setTotalBuyWon] = useState(0);
    const [diffDlr, setDiffDlr] = useState(0);
    const [diffWon, setDiffWon] = useState(0);

    useEffect(() => {
      const dtSrc = getDataSrc(data);
      const _dtFiltered = dtSrc.filter(dt => dt.RewardType === '실시');

      let _totalSellDlr = 0;
      let _totalSellWon = 0;
      let _totalBuyDlr = 0;
      let _totalBuyWon = 0;
      let _diffDlr = 0;
      let _diffWon = 0;

      _dtFiltered.forEach(
        ({
          TotalSellPrice_Dlr,
          TotalSellPrice_Won,
          TotalBuyPrice_Dlr,
          TotalBuyPrice_Won,
          Difference_Dlr,
          Difference_Won,
        }) => {
          _totalSellDlr += parseFloat(TotalSellPrice_Dlr.replace(/\,/gi, ''));
          _totalSellWon += parseFloat(TotalSellPrice_Won.replace(/\,/gi, ''));
          _totalBuyDlr += parseFloat(TotalBuyPrice_Dlr.replace(/\,/gi, ''));
          _totalBuyWon += parseFloat(TotalBuyPrice_Won.replace(/\,/gi, ''));
          _diffDlr = parseFloat(Difference_Dlr.replace(/\,/gi, ''));
          _diffWon = parseFloat(Difference_Won.replace(/\,/gi, ''));
        },
      );

      setDtFiltered(_dtFiltered);
      setTotalSellDlr(_totalSellDlr);
      setTotalSellWon(_totalSellWon);
      setTotalBuyDlr(_totalBuyDlr);
      setTotalBuyWon(_totalBuyWon);
      setDiffDlr(_diffDlr);
      setDiffWon(_diffWon);

      setDiffTotal(_diffWon);
    }, [data, setDiffTotal]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
      <Table
        columns={columns}
        dataSource={dtFiltered}
        bordered
        footer={() => {
          return (
            <>
              <TableStyle>
                <tbody>
                  <Tr>
                    <Td
                      style={{
                        fontSize: '22px',
                        width: '53px',

                        textAlign: 'center',
                      }}
                    ></Td>
                    <Td
                      style={{
                        width: '123px',
                        textAlign: 'center',
                      }}
                    ></Td>
                    <Td
                      style={{
                        width: '125px',
                        textAlign: 'center',
                      }}
                    >
                      누계
                    </Td>
                    <Td
                      style={{
                        width: '160px',
                        textAlign: 'center',
                      }}
                    >
                      {numberwithCommas(totalSellDlr)}
                    </Td>
                    <Td
                      style={{
                        width: '160px',
                        textAlign: 'center',
                      }}
                    >
                      {numberwithCommas(parseFloat(totalSellWon))}
                    </Td>
                    <Td
                      style={{
                        width: '160px',
                        textAlign: 'center',
                      }}
                    >
                      {numberwithCommas(parseFloat(totalBuyDlr))}
                    </Td>
                    <Td
                      style={{
                        width: '160px',
                        textAlign: 'center',
                      }}
                    >
                      {numberwithCommas(parseFloat(totalBuyWon))}
                    </Td>
                    <Td
                      style={{
                        width: '160px',
                        textAlign: 'center',
                      }}
                    >
                      {numberwithCommas(parseFloat(diffDlr))}
                    </Td>
                    <Td
                      style={{
                        width: '160px',
                        textAlign: 'center',
                      }}
                    >
                      {numberwithCommas(parseFloat(diffWon))}
                    </Td>
                    <Td
                      style={{
                        width: '160px',
                        textAlign: 'center',
                      }}
                    ></Td>
                    <Td
                      style={{
                        width: '142px',
                        textAlign: 'center',
                      }}
                    ></Td>
                  </Tr>
                </tbody>
              </TableStyle>
            </>
          );
        }}
      />
    );
  }),
);
