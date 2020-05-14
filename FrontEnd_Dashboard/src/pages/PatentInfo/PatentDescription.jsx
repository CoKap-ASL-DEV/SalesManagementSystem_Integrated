import React, { Component } from 'react';
import { Badge } from 'antd';
import 'antd/dist/antd.css';

import styled from 'styled-components';
import { inject } from 'mobx-react';
import numberwithCommas from '../../utils/numberWithCommas';
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
@inject('fstore')
class PatentDescription extends Component {
  render() {
    const { fstore } = this.props;
    const {
      SellPrice_Mver,
      SellPrice_Sver,
      SellPrice_SAver,
      SellPrice_MPack,

      PurchaseRatio,
      // ExecPurchaseRatio,

      KEPCORatio,
      MokpoRatio,
      // RewardRatio,
      KSMRatio,
      KDSRatio,
      JSSRatio,
      KBSRatio,

      // FilePath,

      // RewardType,
    } = fstore;

    // const inputDataStates = {
    //   SellPrice_Mver,
    //   SellPrice_Sver,
    //   SellPrice_SAver,
    //   SellPrice_MPack,

    //   PurchaseRatio,
    //   ExecPurchaseRatio,

    //   RewardRatio,

    //   KEPCORatio,
    //   MokpoRatio,
    //   KSMRatio,
    //   KDSRatio,
    //   JSSRatio,
    //   KBSRatio,
    //   FilePath,
    //   RewardType,
    // };
    return (
      <div>
        <div>
          <Span>Patent Info</Span>
          <TableStyle>
            <tbody>
              <Tr>
                <Td>특허명</Td>
                <Td>
                  초저주파 탄델타의 측정 데이터를 이용한 전력 케이블의 상태진단
                  및 잔존수명 측정장치 및 그 방법
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
                  <Badge status="processing" text={`한전: ${KEPCORatio}%`} />
                  <br />
                  <Badge
                    status="processing"
                    text={`목포해양대 : ${MokpoRatio}%`}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>특허권자</Td>
                <Td colSpan={3}>
                  {' '}
                  <Badge status="processing" text={`김성민 : ${KSMRatio}%`} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Badge status="processing" text={`김동섭 : ${KDSRatio}%`} />
                  <br />
                  <Badge status="processing" text={`전시식 : ${JSSRatio}%`} />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <Badge status="processing" text={`김병석 : ${KBSRatio}%`} />
                  <br />
                </Td>
              </Tr>
            </tbody>
          </TableStyle>
        </div>
        <br />
        <br />
        <div>
          <Span>Product Info</Span>
          <TableStyle>
            <tbody>
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
                <Td>{numberwithCommas(SellPrice_Mver)}</Td>
                <Td>{numberwithCommas(SellPrice_Sver)}</Td>
                <Td>{numberwithCommas(SellPrice_SAver)}</Td>
                <Td>{numberwithCommas(SellPrice_MPack)}</Td>
              </Tr>
              <Tr>
                <Td>구매단가(USD)</Td>
                <Td>
                  {numberwithCommas(SellPrice_Mver * PurchaseRatio * 0.01)}
                </Td>
                <Td>
                  {numberwithCommas(SellPrice_Sver * PurchaseRatio * 0.01)}
                </Td>
                <Td>
                  {numberwithCommas(SellPrice_SAver * PurchaseRatio * 0.01)}
                </Td>
                <Td>
                  {numberwithCommas(SellPrice_MPack * PurchaseRatio * 0.01)}
                </Td>
              </Tr>
            </tbody>
          </TableStyle>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default PatentDescription;
