import { Table } from "antd";
import React from "react";
import "antd/dist/antd.css";

const colWidth = 200;

const columns = [
  {
    title: "순번",
    
    width: colWidth-100,
    dataIndex: "name",
    key: "name",
    fixed: 'left',
    align: "center",
  },
  {
    title: "구매 Order from BAUR",
    align: "center",
    fixed: 'left',
    children: [
      {
        title: "PO #",
        dataIndex: "address",
        key: "1",
        width: colWidth-50,
        fixed: 'left',
        align: "center"
      },
      {
        title: "Issue Date",
        dataIndex: "address",
        key: "2",
        width: colWidth-50,
        fixed: 'left',
        align: "center"
      }
    ]
  },
  {
    title: "적용환율",
    align: "center",
    children: [
      {
        title: "기준일",
        dataIndex: "address",
        key: "3",
        width: colWidth,
        align: "center"
      },
      {
        title: "매매기준율",
        dataIndex: "address",
        key: "4",
        width: colWidth,
        align: "center"
      }
    ]
  },

  {
    title: "주문수량",
    align: "center",
    children: [
      {
        title: "M-Ver.",
        dataIndex: "address",
        key: "3",
        width: colWidth,
        align: "center"
      },
      {
        title: "S-Ver.",
        dataIndex: "address",
        key: "4",
        width: colWidth,
        align: "center"
      },
      {
        title: "SA-Ver.",
        dataIndex: "address",
        key: "5",
        width: colWidth,
        align: "center"
      },
      {
        title: "M Package",
        dataIndex: "address",
        key: "6",
        width: colWidth,
        align: "center"
      },
      {
        title: "총수량",
        dataIndex: "address",
        key: "7",
        width: colWidth,
        align: "center"
      }
    ]
  },

  {
    title: "총 판매가",
    align: "center",
    children: [
      {
        title: "US$",
        dataIndex: "address",
        key: "8",
        width: colWidth,
        align: "center"
      },
      {
        title: "원화",
        dataIndex: "address",
        key: "9",
        width: colWidth,
        align: "center"
      }
    ]
  },
  {
    title: "총 구매가",
    align: "center",
    children: [
      {
        title: "US$",
        dataIndex: "address",
        key: "10",
        width: colWidth,
        align: "center"
      },
      {
        title: "원화",
        dataIndex: "address",
        key: "11",
        width: colWidth,
        align: "center"
      }
    ]
  },

  {
    title: "기술료 납입",
    align: "center",
    children: [
      {
        title: "한전",
        dataIndex: "address",
        key: "12",
        width: colWidth,
        align: "center"
      },
      {
        title: "목포해양대",
        dataIndex: "address",
        key: "13",
        width: colWidth,
        align: "center"
      },
      {
        title: "소계",
        dataIndex: "address",
        key: "14",
        width: colWidth,
        align: "center"
      }
    ]
  },

  {
    title: "특허처분보상\n60%",
    align: "center",
    width: colWidth,
    dataIndex: "name",
    key: "name",        
  },
  {
    title: "순수익",
    align: "center",
    children: [
      {
        title: "파워플러스",
        dataIndex: "address",
        key: "15",
        width: colWidth,
        align: "center"
      },
      {
        title: "한전",
        dataIndex: "address",
        key: "16",
        width: colWidth,
        align: "center"
      },
      {
        title: "소계",
        dataIndex: "address",
        key: "17",
        width: colWidth,
        align: "center"
      }
    ]
  },

  // {
  //   title: "Action",
  //   key: "operation",
  //   //fixed: "right",
  //   width: 100,
  //   render: () => <a href="javascript:;">action</a>
  // }
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Ed ${i}`,
    age: 32,
    address: `Park no. ${i}`
  });
}

const FixedTable = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      scroll={{ x: 3800}}
      size="small"
      bordered
      mountnode
    />
  );
};

export default FixedTable;
