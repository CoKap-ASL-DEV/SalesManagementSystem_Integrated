import React, { Component } from 'react';
import { Descriptions, Badge } from 'antd';
import 'antd/dist/antd.css';
import { rgbToHex } from '@material-ui/core';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

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
@inject('fstore')
class ExecDescription extends Component {
  render() {
    const { fstore } = this.props;
    const { RewardRatio, KSMRatio, KDSRatio, JSSRatio, KBSRatio } = fstore;

    const inputDataStates = {
      RewardRatio,

      KSMRatio,
      KDSRatio,
      JSSRatio,
      KBSRatio,
    };
    const totalReward = this.props.diffTotal * RewardRatio * 0.01;
    const KSMReward = totalReward * KSMRatio * 0.01;
    const KDSReward = totalReward * KDSRatio * 0.01;
    const JSSReward = totalReward * JSSRatio * 0.01;
    const KBSReward = totalReward * KBSRatio * 0.01;

    return (
      <div>
        <Span>보상금</Span>
        <TableStyle>
          <tbody>
            <Tr>
              <Td style={{ width: '400px' }}>보상기준</Td>
              <Td>수익금*{RewardRatio}%</Td>
            </Tr>
            <Tr>
              <Td style={{ width: '400px' }}>산출보상금</Td>
              <Td>{totalReward}</Td>
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
              <Td>{KSMReward}</Td>
              <Td>{KDSReward}</Td>
              <Td>{JSSReward}</Td>
              <Td>{KBSReward}</Td>
            </Tr>
          </tbody>
        </TableStyle>
      </div>
    );
  }
}

export default ExecDescription;
