import React from 'react';
import { Descriptions, Badge } from 'antd';
import 'antd/dist/antd.css';
import { rgbToHex } from '@material-ui/core';
import styled from 'styled-components';

const TableStyle = styled.table`
   {
    border: 1px solid;
    width: 100%;
  }
`;
const Tr = styled.tr`
   {
    border: 1px solid;
  }
`;
const Td = styled.td`
   {
    border: 1px solid #e8e8e8;
    color: rgba(0, 0, 0, 0.85);
    font-weight: normal;
    font-size: 14px;
    max-width: 300px;
    padding: 16px 24px;
    line-height: 1.5;
  }
`;
const Span = styled.span`
   {
    margin-bottom: 20px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: bold;
    font-size: 16px;
    line-height: 3;
  }
`;

const PatentDescription = () => {
  return (
    // <div>
    //   <Descriptions title="Patent Info" bordered>
    //     <Descriptions.Item label="특허명" span={3}>
    //       초저주파 탄델타의 측정 데이터를 이용한 전력 케이블의 상태진단 및
    //       잔존수명 측정장치 및 그 방법
    //     </Descriptions.Item>
    //     <Descriptions.Item label="특허번호">10-1466623</Descriptions.Item>
    //     <Descriptions.Item label="등록일">2014년 11월 24일</Descriptions.Item>
    //     <Descriptions.Item label="유효기간">2033년 11월 23일</Descriptions.Item>
    //     <Descriptions.Item label="지분분할">
    //       <Badge status="processing" text="한전 : 80%" />
    //       <br />
    //       <Badge status="processing" text="목포해양대 : 20%" />
    //     </Descriptions.Item>
    //     <Descriptions.Item label="특허권자" span={3}>
    //       <Badge status="processing" text="김성민 : 35%" />
    //       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //       <Badge status="processing" text="김동섭 : 35%" />
    //       <br />
    //       <Badge status="processing" text="전시식 : 5%" />
    //       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //       <Badge status="processing" text="김병석 : 5%" />
    //       <br />
    //     </Descriptions.Item>
    //   </Descriptions>
    //   <br />
    <div>
      <div>
        <Span>Patent Info</Span>
        <TableStyle>
          <Tr>
            <Td>특허명</Td>
            <Td>
              초저주파 탄델타의 측정 데이터를 이용한 전력 케이블의 상태진단 및
              잔존수명 측정장치 및 그 방법
            </Td>
          </Tr>
          <Tr>
            <Td>특허번호</Td>
            <Td>10-1466623</Td>
          </Tr>
          <Tr>
            <Td>등록일</Td>
            <Td>2014년 11월 24일</Td>
          </Tr>
          <Tr>
            <Td>유효기간</Td>
            <Td>2033년 11월 23일</Td>
          </Tr>
          <Tr>
            <Td>지분분할</Td>
            <Td>
              <Badge status="processing" text="한전 : 80%" />
              <br />
              <Badge status="processing" text="목포해양대 : 20%" />
            </Td>
          </Tr>
          <Tr>
            <Td>특허권자</Td>
            <Td colSpan={3}>
              {' '}
              <Badge status="processing" text="김성민 : 35%" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Badge status="processing" text="김동섭 : 35%" />
              <br />
              <Badge status="processing" text="전시식 : 5%" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Badge status="processing" text="김병석 : 5%" />
              <br />
            </Td>
          </Tr>
        </TableStyle>
      </div>
      <br />
      <br />
      <div>
        <Span>Product Info</Span>
        <TableStyle>
          <Tr>
            <Td>상 품 명</Td>
            <Td>STATEX MASTER</Td>
            <Td>STATEX SLAVE</Td>
            <Td>STATEX STAND-ALONE</Td>
            <Td>MASTER PACKAGE</Td>
          </Tr>
          <Tr>
            <Td>현지상품명</Td>
            <Td>STATEX Pro</Td>
            <Td>STATEX Pro Zusatz</Td>
            <Td>STATEX Core</Td>
            <Td>STATEX Pro</Td>
          </Tr>
          <Tr>
            <Td>판매단가(USD)</Td>
            <Td>12,400.00</Td>
            <Td>6,200.00</Td>
            <Td>6,200.00</Td>
            <Td>22,000.00</Td>
          </Tr>
          <Tr>
            <Td>구매단가(USD)</Td>
            <Td>8680.00</Td>
            <Td>4,340.00</Td>
            <Td>4,340.00</Td>
            <Td>15,400.00</Td>
          </Tr>
        </TableStyle>
        <br />
        <br />
      </div>
    </div>

    // <Descriptions.Item
    //     label={
    //       <span>
    //         상 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;품
    //         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명
    //         <br />
    //         <br />
    //         <br />현 지 상 품 명
    //       </span>
    //     }
    //   >
    //     <Descriptions
    //       //style={{ textAlign: 'center' }}
    //       layout="vertical"
    //       bordered
    //       column={4}
    //     >
    //       <Descriptions.Item label="STATEX MASTER">
    //         STATEX Pro
    //       </Descriptions.Item>
    //       <Descriptions.Item label="STATEX SLAVE">
    //         STATEX Pro Zusatz
    //       </Descriptions.Item>
    //       <Descriptions.Item label="STATEX STAND-ALONE">
    //         STATEX Core
    //       </Descriptions.Item>
    //       <Descriptions.Item label="MASTER PACKAGE">
    //         Pro PACKAGE
    //       </Descriptions.Item>
    //     </Descriptions>
    //   </Descriptions.Item>
    // </Descriptions>
    // <Descriptions bordered>
    //   <Descriptions.Item
    //     label={
    //       <span>
    //         판매단가(USD)
    //         <br />
    //         <br />
    //         <br />
    //         구매단가(USD)
    //       </span>
    //     }
    //   >
    //     <Descriptions
    //       //style={{ textAlign: 'center' }}
    //       layout="vertical"
    //       bordered
    //       column={4}
    //     >
    //       <Descriptions.Item style={{ width: '500px' }} label="12,400.00">
    //         8,680.00
    //       </Descriptions.Item>
    //       <Descriptions.Item label="6,200.00">4,340.00</Descriptions.Item>
    //       <Descriptions.Item label="6,200.00">4,340.00</Descriptions.Item>
    //       <Descriptions.Item label="22,000.00">15,400.00</Descriptions.Item>
    //     </Descriptions>
    //   </Descriptions.Item>
  );
};

export default PatentDescription;
