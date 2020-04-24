import { gql } from 'apollo-boost';

//두번째 이름인 addFormData가 API 서버에 정의된 이름임
const SUBMIT_FORM = gql`
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
    $ExecPurchaseRatio: Float
    $TechRatio: Float
    $RewardRatio: Float
    $KEPCORatio: Float
    $MokpoRatio: Float
    $KSMRatio: Float
    $KDSRatio: Float
    $JSSRatio: Float
    $KBSRatio: Float
    $CreatedDate: String
    $IssueDate: String
    $PoNumber: String
    $WDRDate: String
  ) {
    addFormData(
      SellPrice_Mver: $SellPrice_Mver
      SellPrice_Sver: $SellPrice_Sver
      SellPrice_SAver: $SellPrice_SAver
      SellPrice_MPack: $SellPrice_MPack
      OrderNum_Mver: $OrderNum_Mver
      OrderNum_Sver: $OrderNum_Sver
      OrderNum_SAver: $OrderNum_SAver
      OrderNum_MPack: $OrderNum_MPack
      WonDollarRatio: $WonDollarRatio
      PurchaseRatio: $PurchaseRatio
      ExecPurchaseRatio: $ExecPurchaseRatio
      TechRatio: $TechRatio
      RewardRatio: $RewardRatio
      KEPCORatio: $KEPCORatio
      MokpoRatio: $MokpoRatio
      KSMRatio: $KSMRatio
      KDSRatio: $KDSRatio
      JSSRatio: $JSSRatio
      KBSRatio: $KBSRatio
      CreatedDate: $CreatedDate
      IssueDate: $IssueDate
      PoNumber: $PoNumber
      WDRDate: $WDRDate
    ) {
      SellPrice_MPack
    }
  }
`;

export default SUBMIT_FORM;
