import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';
import { Badge } from 'antd';
import { Query } from 'react-apollo';
import { inject, observer } from 'mobx-react';
import 'antd/dist/antd.css';

import GET_TALBE_QUERY from '../../services/get_table';

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

      SellPrice_Mver,
      SellPrice_Sver,
      SellPrice_SAver,
      SellPrice_MPack,

      PurchaseRatio,
      TechRatio,
      KEPCORatio,
      MokpoRatio,
      RewardRatio,
    }) => {
      return {
        id,
        PoNumber: PoNumber,
        IssueDate: IssueDate,

        WDRDate: WDRDate,
        WonDollarRatio: WonDollarRatio,
        OrderNum_Mver: OrderNum_Mver,
        OrderNum_Sver: OrderNum_Sver,
        OrderNum_SAver: OrderNum_SAver,
        OrderNum_MPack: OrderNum_MPack,

        SellPrice_Mver: SellPrice_Mver,
        SellPrice_Sver: SellPrice_Sver,
        SellPrice_SAver: SellPrice_SAver,
        SellPrice_MPack: SellPrice_MPack,

        PurchaseRatio: PurchaseRatio,
        TechRatio: TechRatio,
        KEPCORatio: KEPCORatio,
        MokpoRatio: MokpoRatio,
        RewardRatio: RewardRatio,
      };
    },
  );

const HistItems = props => {
  return (
    <List.Item>
      <List.Content
        floated="right"
        style={{
          paddingRight: '20px',
        }}
      >
        <Button
          onClick={() => {
            props.setParam(props.item);
            //alert("haha");
          }}
        >
          {' '}
          적용하기
        </Button>
      </List.Content>
      <List.Content>
        <span
          style={{
            fontSize: '16px',
            lineHeight: '30px',
            paddingLeft: '40px',
          }}
        >
          <Badge status="processing" />
          주문일 : {props.item.IssueDate}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Badge status="processing" />
          구매번호 : {props.item.PoNumber}
        </span>
      </List.Content>
    </List.Item>
  );
};

@inject('fstore')
@observer
class GetData extends Component {
  render() {
    const { fstore } = this.props;
    const { ParamtoStates } = fstore;

    return (
      <Query query={GET_TALBE_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          const dtSrc = getDataSrc(data);
          return (
            <div>
              <h3 style={{ paddingBottom: '8px' }}>과거 입력데이터 목록</h3>

              <List divided verticalAlign="middle">
                {dtSrc.map(item => {
                  return (
                    <HistItems
                      key={item.id}
                      item={item}
                      setParam={ParamtoStates}
                    />
                  );
                })}
              </List>
            </div>
          );
        }}
      </Query>
    );
  }
}

const ListFloated = () => {
  return (
    <div>
      <GetData />
    </div>
  );
};

export default ListFloated;
