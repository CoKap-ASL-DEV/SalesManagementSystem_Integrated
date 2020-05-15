import React, { useState, useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import 'antd/dist/antd.css';

import styled from 'styled-components';
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

export default inject(
  'fstore',
  'rewardTotal',
)(
  observer(({ fstore, rewardTotal }) => {
    const { techTotal } = rewardTotal;
    const {
      // PurchaseRatio,
      // ExecPurchaseRatio,
      TechRatio,
      KEPCORatio,
      MokpoRatio,
      RewardRatio,
      KSMRatio,
      KDSRatio,
      JSSRatio,
      KBSRatio,
    } = fstore;

    // const inputDataStates = {
    //   PurchaseRatio,
    //   ExecPurchaseRatio,
    //   TechRatio,
    //   RewardRatio,

    //   KEPCORatio,
    //   MokpoRatio,
    //   KSMRatio,
    //   KDSRatio,
    //   JSSRatio,
    //   KBSRatio,
    // };

    const [kepcoTechFare, setKepcoTechFare] = useState('');
    const [mokpoTechFare, setMokpoTechFare] = useState('');

    useEffect(() => {
      setKepcoTechFare(numberwithCommas(techTotal * KEPCORatio * 0.01));
      setMokpoTechFare(numberwithCommas(techTotal * MokpoRatio * 0.01));
    }, [techTotal, KEPCORatio, MokpoRatio]);

    // const kepcoTechFare = numberwithCommas(techTotal * KEPCORatio * 0.01);
    const kepcoTechFareFlt = parseFloat(kepcoTechFare.replace(/\,/gi, ''));

    // const mokpoTechFare = numberwithCommas(techTotal * MokpoRatio * 0.01);
    const SellRewardTotal = numberwithCommas(
      kepcoTechFareFlt * RewardRatio * 0.01,
    );

    const SellRewardTotalFlt = parseFloat(SellRewardTotal.replace(/\,/gi, ''));
    const KSMSellReward = numberwithCommas(
      SellRewardTotalFlt * KSMRatio * 0.01,
    );
    const KDSSellReward = numberwithCommas(
      SellRewardTotalFlt * KDSRatio * 0.01,
    );
    const JSSSellReward = numberwithCommas(
      SellRewardTotalFlt * JSSRatio * 0.01,
    );
    const KBSSellReward = numberwithCommas(
      SellRewardTotalFlt * KBSRatio * 0.01,
    );

    return (
      <div>
        <Span>기술이전 정보</Span>
        <TableStyle>
          <tbody>
            <Tr>
              <Td style={{ width: '400px' }}>특허사용자</Td>
              <Td>파워플러스</Td>
            </Tr>
            <Tr>
              <Td style={{ width: '400px' }}>기술요율</Td>
              <Td>{TechRatio}%</Td>
            </Tr>
          </tbody>
        </TableStyle>
        <Span>기관지분</Span>
        <TableStyle>
          <tbody>
            <Tr>
              <Td style={{ width: '400px' }}>지분분할</Td>
              <Td>한전</Td>
              <Td>목포해양</Td>
            </Tr>
            <Tr>
              <Td style={{ width: '400px' }}>지분율</Td>
              <Td>{KEPCORatio}%</Td>
              <Td>{MokpoRatio}%</Td>
            </Tr>
            <Tr>
              <Td style={{ width: '400px' }}>분할금(KW)</Td>
              <Td>{kepcoTechFare}</Td>
              <Td>{mokpoTechFare}</Td>
            </Tr>
          </tbody>
        </TableStyle>
        <Span>보상금</Span>
        <TableStyle>
          <tbody>
            <Tr>
              <Td style={{ width: '400px' }}>보상기준</Td>
              <Td>수익금*{RewardRatio}%</Td>
            </Tr>
            <Tr>
              <Td style={{ width: '400px' }}>산출보상금</Td>
              <Td>{SellRewardTotal}</Td>
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
              <Td>{KSMRatio}%</Td>
              <Td>{KDSRatio}%</Td>
              <Td>{JSSRatio}%</Td>
              <Td>{KBSRatio}%</Td>
            </Tr>
            <Tr>
              <Td style={{ width: '400px' }}>보상금(KW)</Td>
              <Td>{KSMSellReward}</Td>
              <Td>{KDSSellReward}</Td>
              <Td>{JSSSellReward}</Td>
              <Td>{KBSSellReward}</Td>
            </Tr>
          </tbody>
        </TableStyle>
      </div>
    );
  }),
);
