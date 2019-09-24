import React from "react";
import { gql } from "apollo-boost";
// import { Mutation } from '@apollo/react-components'
import { Query } from "react-apollo";

export const GET_SELLPRICE = gql`
  query {
    formDatas {
      SellPrice_Sver
      SellPrice_SAver
      SellPrice_MPack
      
    }
  }
`;





export const SUBMITFORM_Data = gql`
  mutation AddFormData(
    $SellPrice_Mver: Float
    $SellPrice_Sver: Float
    $SellPrice_SAver: Float
    $SellPrice_MPack: Float
    $OrderNum_Mver: Float
    $OrderNum_Sver: Float
    $OrderNum_SAver: Float
    $OrderNum_MPack: Float
    $WonDollarRatio: Float
    $PurchaseRatio: Float
    $TechRatio: Float
    $KEPCORatio: Float
    $MokpoRatio: Float
    $RewardRatio: Float
    $CreatedDate: String
    $IssueDate: String
    $PoNumber: String
    $WDRDate: String
  ) {
    addFormData(
      SellPrice_Mver: $SellPrice_Mver
      SellPrice_Sver: $SellPrice_Sver
      SellPrice_SAver: $SellPrice_SAver
      SellPrice_MPa: $SellPrice_MPack
      OrderNum_Mver: $OrderNum_Mver
      OrderNum_Sver: $OrderNum_Sver
      OrderNum_SAver: $OrderNum_SAver
      OrderNum_MPack: $OrderNum_MPack
      WonDollarRati: $WonDollarRatio
      PurchaseR: $PurchaseRatio
      TechRatio: $TechRatio
      KEPCORatio: $KEPCORatio
      MokpoRatio: $MokpoRatio
      RewardRatio: $RewardRatio
      CreatedDate: $CreatedDate
      IssueDate: $IssueDate
      PoNumber: $PoNumber
      WDRDate: $WDRDate
    ) {
      SellPrice_MPack
    }
  }
`;
// mutation{
//   addFormData(
//     SellPrice_Mver: 1000
//     SellPrice_Sver: 2000
//     SellPrice_SAver: 3000
//     SellPrice_MPack: 4000
//     OrderNum_Mver: 10
//     OrderNum_Sver: 20
//     OrderNum_SAver: 30
//     OrderNum_MPack: 40
//     WonDollarRatio: 50
//     PurchaseRatio: 60
//     TechRatio: 34
//     KEPCORatio: 44
//     MokpoRatio: 54
//     RewardRatio: 64
//     CreatedDate: "19-03-01"
//     IssueDate: "19-05-05"
//     PoNumber: "PO191007-2132"
//     WDRDate: "19-09-10"){
//     id
//   }
// }

// const SubmitForm = ()=>(<Mutation mutation={SUBMITFORM_Data}>
//       {(addTodo, { data }) => (
//         <div>
//           <form
//             onSubmit={e => {
//               e.preventDefault();
//               addTodo({ variables: { type: input.value } });
//               input.value = '';
//             }}
//           ></form>
//            </div>)}
//            </Mutation>);

const ApiClient = () => (
  <Query query={GET_SELLPRICE}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.formDatas.map(({SellPrice_Sver,
        SellPrice_SAver,
        SellPrice_MPack,}) => (
        <div>
          <p>Sver : {SellPrice_Sver}, SAver: {SellPrice_SAver}, Mpack: {SellPrice_MPack}</p>
        </div>
      ));
    }}
  </Query>
);



export default ApiClient;
