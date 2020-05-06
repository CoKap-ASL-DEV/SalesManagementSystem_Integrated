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
    font-size: 15px;
    max-width: 300px;
    padding: 16px 24px;
    line-height: 0.5;
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

const SellDescription = () => {
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
      <Span>보상금</Span>
      <TableStyle>
        <tbody>
          <Tr>
            <Td style={{ width: '400px' }}>보상기준</Td>
            <Td>수익금*60%</Td>
          </Tr>
          <Tr>
            <Td style={{ width: '400px' }}>산출보상금</Td>
            <Td>4,808,234</Td>
          </Tr>
        </tbody>
      </TableStyle>
      <Span>발명자배당</Span>
      <TableStyle>
        <tbody>
          <Tr>
            <Td style={{ width: '400px' }}>발명자</Td>
            <Td>김성민</Td>
            <Td>김동섭</Td>
            <Td>전시식</Td>
            <Td>김병석</Td>
          </Tr>
          <Tr>
            <Td style={{ width: '400px' }}>지분률</Td>
            <Td>35%</Td>
            <Td>35%</Td>
            <Td>5%</Td>
            <Td>5%</Td>
          </Tr>
          <Tr>
            <Td style={{ width: '400px' }}>보상금(KW)</Td>
            <Td>1,682,882</Td>
            <Td>1,682,882</Td>
            <Td>240,412</Td>
            <Td>240,412</Td>
          </Tr>
        </tbody>
      </TableStyle>
      {/* <Tr>
              <Td>지분분할</Td>
              <Td>한전</Td>
              <Td>목포해양</Td>
            </Tr> */}
      {/* <Tr>
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
            </Tr> */}
    </div>
  );
};

export default SellDescription;
