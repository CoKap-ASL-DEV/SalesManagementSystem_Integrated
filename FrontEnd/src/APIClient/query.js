import { gql } from "apollo-boost";


//두번째 이름인 addFormData가 API 서버에 정의된 이름임
const SUBMITFORM_Data = gql`
  mutation AddFormData(
    $SellPrice_Mver: Float,
    $SellPrice_Sver: Float,
    $SellPrice_SAver: Float,
    $SellPrice_MPack: Float,
    $OrderNum_Mver: Float,
    $OrderNum_Sver: Float,
    $OrderNum_SAver: Float,
    $OrderNum_MPack: Float,
    $WonDollarRatio: Float,
    $PurchaseRatio: Float,
    $TechRatio: Float,
    $KEPCORatio: Float,
    $MokpoRatio: Float,
    $RewardRatio: Float,
    $CreatedDate: String,
    $IssueDate: String,
    $PoNumber: String,
    $WDRDate: String
  ) {
    addFormData(   
      SellPrice_Mver: $SellPrice_Mver,
      SellPrice_Sver: $SellPrice_Sver,
      SellPrice_SAver: $SellPrice_SAver,
      SellPrice_MPack: $SellPrice_MPack,
      OrderNum_Mver: $OrderNum_Mver,
      OrderNum_Sver: $OrderNum_Sver,
      OrderNum_SAver: $OrderNum_SAver,
      OrderNum_MPack: $OrderNum_MPack,
      WonDollarRatio: $WonDollarRatio,
      PurchaseRatio : $PurchaseRatio,
      TechRatio: $TechRatio,
      KEPCORatio: $KEPCORatio,
      MokpoRatio: $MokpoRatio,
      RewardRatio: $RewardRatio,
      CreatedDate: $CreatedDate,
      IssueDate: $IssueDate,
      PoNumber: $PoNumber,
      WDRDate: $WDRDate
    ) {
      SellPrice_MPack
    }
  }
`;

export default SUBMITFORM_Data;