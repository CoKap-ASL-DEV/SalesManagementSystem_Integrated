import React, { Component } from "react";
import { Button, List } from "semantic-ui-react";
import "antd/dist/antd.css";
import GET_TALBE_QUERY from "../APIClient/get_table";
import { Query } from "react-apollo";
import { inject, observer } from "mobx-react";

const getDataSrc = data =>
  data.formDatas.map(
    (
      {
        // id,
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
        RewardRatio
      },
      index
    ) => {
      // const TotalNum =
      //   OrderNum_Mver + OrderNum_Sver + OrderNum_SAver + OrderNum_MPack;
      // const TotalSellPrice_Dlr =
      //   SellPrice_Mver * OrderNum_Mver +
      //   SellPrice_Sver * OrderNum_Sver +
      //   SellPrice_SAver * OrderNum_SAver +
      //   SellPrice_MPack * OrderNum_MPack;
      // const TotalSellPrice_Won = TotalSellPrice_Dlr * WonDollarRatio;
      // const TotalBuyPrice_Dlr = TotalSellPrice_Dlr * PurchaseRatio;
      // const TotalBuyPrice_Won = TotalSellPrice_Won * PurchaseRatio;
      // const TechFare_KEPCO = TotalBuyPrice_Won * TechRatio * KEPCORatio;
      // const TechFare_Mokpo = TotalBuyPrice_Won * TechRatio * MokpoRatio;
      // const TotalTechFare = TechFare_KEPCO * TechFare_Mokpo;
      // const PatentReward = TechFare_KEPCO * RewardRatio;
      // const NetIncome_PowerPlus = TotalBuyPrice_Won - TechFare_KEPCO;
      // const NetIncome_KEPCO = TotalSellPrice_Won - TotalBuyPrice_Won;
      // const Total_NetIncome = NetIncome_PowerPlus + NetIncome_KEPCO;

      return {
        // SeqNum: id,
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
        RewardRatio: RewardRatio
      };
    }
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
          {" "}
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

@inject("fstore")
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
                return <HistItems item={item} setParam={ParamtoStates} />;
                // return <h1>{item.IssueDate}</h1>;
              })}
              {/* <List.Item>
              <List.Content floated="right">
                <Button>Add</Button>
              </List.Content>
              <List.Content>{dtSrc[0].IssueDate}</List.Content>
            </List.Item>
            <List.Item>
              <List.Content floated="right">
                <Button>Add</Button>
              </List.Content>
              <List.Content>{dtSrc[1].IssueDate}</List.Content>
            </List.Item>
            <List.Item>
              <List.Content floated="right">
                <Button>Add</Button>
              </List.Content>
              <List.Content>{dtSrc[2].IssueDate}</List.Content>
            </List.Item>
            <List.Item>
              <List.Content floated="right">
                <Button>Add</Button>
              </List.Content>
              <List.Content>{dtSrc[3].IssueDate}</List.Content>
            </List.Item>*/}
            </List>
          );
        }}
      </Query>
    );
  }
}

const ListFloated = () => {
  // console.log(GetData()[2]);
  return (
    <div>
      <GetData />
    </div>
  );
};

export default ListFloated;
