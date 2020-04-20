import React, { Component } from 'react';
import { Button, List } from 'semantic-ui-react';
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
      <List.Content floated="right">
        <Button
          onClick={() => {
            props.setParam(props.item);
            //alert("haha");
          }}
        >
          {' '}
          Add
        </Button>
      </List.Content>
      <List.Content>
        등록일 : {props.item.IssueDate},<p />
        등록번호 :{props.item.PoNumber}
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
