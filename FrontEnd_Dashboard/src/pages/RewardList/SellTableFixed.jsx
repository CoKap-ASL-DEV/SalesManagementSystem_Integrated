import React from 'react';
import { Table } from 'antd';

import 'antd/dist/antd.css';
import GET_TALBE_QUERY from '../../services/get_table';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import numberwithCommas from '../../utils/numberWithCommas';
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

const colWidth = 200;

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
    title: '기술료',
    width: colWidth - 50,
    dataIndex: 'TotalTechFare',
    key: 'TotalTechFare',

    align: 'center',
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
      RewardType,
    }) => {
      return {
        key: id,
        SeqNum: id,
        PoNumber: PoNumber,
        IssueDate: IssueDate,
        WDRDate: WDRDate,
        WonDollarRatio: numberwithCommas(WonDollarRatio),
        OrderNum_Mver: OrderNum_Mver,
        OrderNum_Sver: OrderNum_Sver,
        OrderNum_SAver: OrderNum_SAver,
        OrderNum_MPack: OrderNum_MPack,
        TotalNum: TotalNum,
        TotalSellPrice_Dlr: numberwithCommas(TotalSellPrice_Dlr),
        TotalSellPrice_Won: numberwithCommas(TotalSellPrice_Won),
        TotalBuyPrice_Dlr: numberwithCommas(TotalBuyPrice_Dlr),
        TotalBuyPrice_Won: numberwithCommas(TotalBuyPrice_Won),

        TotalTechFare: numberwithCommas(TotalTechFare),
        RewardType: RewardType,
      };
    },
  );

const GetData = props => (
  <Query query={GET_TALBE_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      const dtSrc = getDataSrc(data);

      const dtFiltered = dtSrc.filter(dt => dt.RewardType === '처분');
      return (
        <>
          <Table
            columns={columns}
            dataSource={dtFiltered}
            // scroll={{ x: 3600 }}
            //size="small"
            //pagination={false}
            bordered
            footer={() => {
              let totalBuyDlr = 0;
              let totalBuyWon = 0;
              let totalTech = 0;
              dtFiltered.forEach(
                ({ TotalBuyPrice_Dlr, TotalBuyPrice_Won, TotalTechFare }) => {
                  totalBuyDlr += parseFloat(
                    TotalBuyPrice_Dlr.replace(/\,/gi, ''),
                  );
                  totalBuyWon += parseFloat(
                    TotalBuyPrice_Won.replace(/\,/gi, ''),
                  );
                  totalTech += parseFloat(TotalTechFare.replace(/\,/gi, ''));
                },
              );
              props.setTechTotal(totalTech);
              return (
                <>
                  <TableStyle>
                    <Tr>
                      <Td
                        style={{
                          fontSize: '22px',
                          //border: 'solid 1px',
                          width: '80px',
                          textAlign: 'center',
                        }}
                      ></Td>
                      <Td
                        style={{
                          //border: 'solid 1px',
                          width: '185px',
                          textAlign: 'center',
                        }}
                      ></Td>
                      <Td
                        style={{
                          //border: 'solid 1px',
                          //fontSize: '18px',
                          width: '184px',
                          textAlign: 'center',
                        }}
                      >
                        누계
                      </Td>
                      <Td
                        style={{
                          //border: 'solid 1px',
                          width: '245px',
                          textAlign: 'center',
                        }}
                      >
                        {numberwithCommas(totalBuyDlr)}
                      </Td>
                      <Td
                        style={{
                          //border: 'solid 1px',
                          width: '245px',
                          textAlign: 'center',
                        }}
                      >
                        {numberwithCommas(totalBuyWon)}
                      </Td>
                      <Td
                        style={{
                          //border: 'solid 1px',
                          width: '188px',
                          textAlign: 'center',
                        }}
                      >
                        {numberwithCommas(totalTech)}
                      </Td>
                      <Td></Td>
                      <Td></Td>
                    </Tr>
                  </TableStyle>
                </>
              );
            }}
            // expandedRowRender={record => <p>{record.PoNumber}</p>}

            //mountnode
          />
        </>
      );
    }}
  </Query>
);

const FixedTable = props => {
  return (
    <div>
      <GetData setTechTotal={props.setTechTotal} />
    </div>
  );
};

export default FixedTable;
