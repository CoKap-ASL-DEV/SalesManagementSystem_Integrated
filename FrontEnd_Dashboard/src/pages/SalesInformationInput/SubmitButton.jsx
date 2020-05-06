import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Mutation } from '@apollo/react-components';

import SUBMIT_FORM_QUERY from '../../services/submit_form';
import UPLOAD_FILE_QUERY from '../../services/upload_file';
import GET_TABLE from '../../services/get_table';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(0.8),
    marginLeft: 0,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const date = new Date();
const currentDate =
  String(date.getFullYear()) +
  '-' +
  String(date.getMonth() + 1) +
  '-' +
  String(date.getDate());
//const year = String(date.getFullYear());

export default function SubmitButton2(props) {
  const classes = useStyles();

  const {
    IssueDate,
    PoNumber,
    FileName,

    SellPrice_Mver,
    SellPrice_Sver,
    SellPrice_SAver,
    SellPrice_MPack,

    OrderNum_Mver,
    OrderNum_Sver,
    OrderNum_SAver,
    OrderNum_MPack,

    WDRDate,
    WonDollarRatio,

    PurchaseRatio,
    ExecPurchaseRatio,
    TechRatio,
    RewardRatio,

    KEPCORatio,
    MokpoRatio,
    KSMRatio,
    KDSRatio,
    JSSRatio,
    KBSRatio,
    FilePath,
    RewardType,
  } = props.inputStates;

  return (
    ///addFromData: mutation 함수처럼 호출 가능하게(서버측 이름과 맞출필요 없음),
    /// data : mutation return값

    <Mutation
      mutation={SUBMIT_FORM_QUERY}
      refetchQueries={[{ query: GET_TABLE }]}
    >
      {(addFormData, { data }) => (
        <Mutation mutation={UPLOAD_FILE_QUERY}>
          {(uploadFile, { data }) => (
            <Button
              onClick={() => {
                const TotalSellPrice_Dlr =
                  parseFloat(SellPrice_Mver) * parseFloat(OrderNum_Mver) +
                  parseFloat(SellPrice_Sver) * parseFloat(OrderNum_Sver) +
                  parseFloat(SellPrice_SAver) * parseFloat(OrderNum_SAver) +
                  parseFloat(SellPrice_MPack) * parseFloat(OrderNum_MPack);

                const TotalSellPrice_Won =
                  parseFloat(TotalSellPrice_Dlr) * parseFloat(WonDollarRatio);

                const TotalBuyPrice_Won =
                  RewardType === '처분'
                    ? parseFloat(TotalSellPrice_Won) *
                      parseFloat(PurchaseRatio) *
                      0.01
                    : parseFloat(TotalSellPrice_Won) *
                      parseFloat(ExecPurchaseRatio) *
                      parseFloat(PurchaseRatio) *
                      0.01 *
                      0.01;

                const TotalBuyPrice_Dlr =
                  RewardType === '처분'
                    ? parseFloat(TotalSellPrice_Dlr) *
                      parseFloat(PurchaseRatio) *
                      0.01
                    : parseFloat(TotalSellPrice_Dlr) *
                      parseFloat(ExecPurchaseRatio) *
                      parseFloat(PurchaseRatio) *
                      0.01 *
                      0.01;
                addFormData({
                  variables: {
                    SellPrice_Mver: parseFloat(SellPrice_Mver),
                    SellPrice_Sver: parseFloat(SellPrice_Sver),
                    SellPrice_SAver: parseFloat(SellPrice_SAver),
                    SellPrice_MPack: parseFloat(SellPrice_MPack),
                    OrderNum_Mver: parseFloat(OrderNum_Mver),
                    OrderNum_Sver: parseFloat(OrderNum_Sver),
                    OrderNum_SAver: parseFloat(OrderNum_SAver),
                    OrderNum_MPack: parseFloat(OrderNum_MPack),
                    WonDollarRatio: parseFloat(WonDollarRatio),
                    PurchaseRatio: parseFloat(PurchaseRatio),
                    ExecPurchaseRatio: parseFloat(ExecPurchaseRatio),
                    TechRatio: parseFloat(TechRatio),
                    RewardRatio: parseFloat(RewardRatio),
                    KEPCORatio: parseFloat(KEPCORatio),
                    MokpoRatio: parseFloat(MokpoRatio),
                    KSMRatio: parseFloat(KSMRatio),
                    KDSRatio: parseFloat(KDSRatio),
                    JSSRatio: parseFloat(JSSRatio),
                    KBSRatio: parseFloat(KBSRatio),
                    CreatedDate: currentDate,
                    IssueDate: IssueDate,
                    PoNumber: PoNumber,
                    FileName: FilePath.lastModified + '_' + FilePath.name,
                    WDRDate: WDRDate,
                    RewardType: RewardType,
                    TotalSellPrice_Dlr: TotalSellPrice_Dlr,
                    // parseFloat(SellPrice_Mver) * parseFloat(OrderNum_Mver) +
                    // parseFloat(SellPrice_Sver) * parseFloat(OrderNum_Sver) +
                    // parseFloat(SellPrice_SAver) * parseFloat(OrderNum_SAver) +
                    // parseFloat(SellPrice_MPack) * parseFloat(OrderNum_MPack),

                    TotalSellPrice_Won: TotalSellPrice_Won,
                    // parseFloat(TotalSellPrice_Dlr) *
                    // parseFloat(WonDollarRatio),
                    TotalBuyPrice_Dlr: TotalBuyPrice_Dlr,
                    // RewardType === '처분'
                    //   ? parseFloat(TotalSellPrice_Dlr) *
                    //     parseFloat(PurchaseRatio) *
                    //     0.01
                    //   : parseFloat(TotalSellPrice_Dlr) *
                    //     parseFloat(ExecPurchaseRatio) *
                    //     parseFloat(PurchaseRatio) *
                    //     0.01 *
                    //     0.01,
                    TotalBuyPrice_Won: TotalBuyPrice_Won,
                    // RewardType === '처분'
                    //   ? parseFloat(TotalSellPrice_Won) *
                    //     parseFloat(PurchaseRatio) *
                    //     0.01
                    //   : parseFloat(TotalSellPrice_Won) *
                    //     parseFloat(ExecPurchaseRatio) *
                    //     parseFloat(PurchaseRatio) *
                    //     0.01 *
                    //     0.01,
                    TotalNum:
                      parseFloat(OrderNum_Mver) +
                      parseFloat(OrderNum_Sver) +
                      parseFloat(OrderNum_SAver) +
                      parseFloat(OrderNum_MPack),
                    TotalTechFare:
                      parseFloat(TotalBuyPrice_Won) *
                      parseFloat(TechRatio) *
                      0.01,
                    Difference_Dlr:
                      parseFloat(TotalSellPrice_Dlr) -
                      parseFloat(TotalBuyPrice_Dlr),
                    Difference_Won:
                      parseFloat(TotalSellPrice_Won) -
                      parseFloat(TotalBuyPrice_Won),
                  },
                });
                console.log(typeof props.inputStates.OrderNum_MPack);
                props.resetStates();

                console.log(data);
                console.log(FilePath);
                console.log('ddd');
                uploadFile({ variables: { file: FilePath } });
              }}
              //onClick={this.props.onSubmithandler}
              variant="outlined"
              size="medium"
              color="primary"
              className={classes.margin}
            >
              Submit
            </Button>
          )}
        </Mutation>
      )}
    </Mutation>
  );
}
