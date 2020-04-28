import React, { Component } from 'react';
import { Divider, Header, Segment } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';

import FormPoNumber from './Form_PoNumber';
import FormBuyPrice from './Form_BuyPrice';
import FormExecBuyPrice from './Form_ExecBuyPrice';
import FormSellPrice from './Form_SellPrice';
import FormWonDollarRatio from './Form_WonDollarRatio';
import FormRatioInput from './Form_RatioInput';
import FormPatentRatioInput from './Form_PatentRatioInput';
import FormOrderNum from './Form_OrderNum';
import SubmitButton from './SubmitButton';

@inject('fstore')
@observer
class ProductForm extends Component {
  render() {
    const { fstore } = this.props;

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

      BuyPrice_Mver,
      BuyPrice_Sver,
      BuyPrice_SAver,
      BuyPrice_MPack,

      ExecBuyPrice_Mver,
      ExecBuyPrice_Sver,
      ExecBuyPrice_SAver,
      ExecBuyPrice_MPack,

      PurchaseRatio,
      ExecPurchaseRatio,

      TechRatio,
      KEPCORatio,
      MokpoRatio,
      RewardRatio,
      KSMRatio,
      KDSRatio,
      JSSRatio,
      KBSRatio,

      OnPoNumberChange,
      OnIssueDateChange,

      OnSellPriceMverChange,
      OnSellPriceSverChange,
      OnSellPriceSAverChange,
      OnSellPriceMPackChange,

      OnOrderNumMverChange,
      OnOrderNumSverChange,
      OnOrderNumSAverChange,
      OnOrderNumMPackChange,

      OnWonDollarRatioChange,
      OnWDRDateChange,

      OnBuyPriceMverChange,
      OnBuyPriceSverChange,
      OnBuyPriceSAverChange,
      OnBuyPriceMPackChange,

      OnExecBuyPriceMverChange,
      OnExecBuyPriceSverChange,
      OnExecBuyPriceSAverChange,
      OnExecBuyPriceMPackChange,

      OnPurchaseRatioChange,
      OnTechRatioChange,
      OnRewardRatioChange,

      OnKEPCORatioChange,
      OnMokpoRatioChange,
      OnKSMRatioChange,
      OnKDSRatioChange,
      OnJSSRatioChange,
      OnKBSRatioChange,

      initializeStates,

      setFilePath,
      TextShrink,
      FilePath,
    } = fstore;

    const inputDataStates = {
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
    };

    //console.log(fstore.Sver);
    //console.log(formvar.SellPrice_Sver);

    return (
      <div>
        <Segment style={{ paddingTop: '25px' }}>
          <Header as="h3">PO From BAUR</Header>
          <FormPoNumber
            PoNumber={PoNumber}
            setFileObj={setFilePath}
            // params={fstore}
            title=""
            label="PO#"
            placeholder=" "
            IssueDate={IssueDate}
            PoNumberhandler={OnPoNumberChange}
            IssueDatehandler={OnIssueDateChange}
            shrink={TextShrink}
          />
          {/* <Divider style={{ margin: '0.8rem 0' }} /> */}
          <Header as="h3" style={{ margin: '1.1rem 0 0.4rem' }}>
            주문수량
          </Header>
          <FormOrderNum
            OrderNum_Mver={OrderNum_Mver}
            OrderNum_Sver={OrderNum_Sver}
            OrderNum_SAver={OrderNum_SAver}
            OrderNum_MPack={OrderNum_MPack}
            Mverhandler={OnOrderNumMverChange}
            Sverhandler={OnOrderNumSverChange}
            SAverhandler={OnOrderNumSAverChange}
            MPackhandler={OnOrderNumMPackChange}
            shrink={TextShrink}
            params={fstore}
            title=""
            placeholder="ea"
            readonly="false"
          />
          {/* <Divider style={{ margin: '0.8rem 0' }} /> */}
          <Header as="h3" style={{ margin: '1.1rem 0 0.4rem' }}>
            환 율
          </Header>
          <FormWonDollarRatio
            WonDollarRatio={WonDollarRatio}
            params={fstore}
            title=""
            label="￦/$ Ratio"
            placeholder="￦"
            WonDollarRatiohandler={OnWonDollarRatioChange}
            WDRDatehandler={OnWDRDateChange}
            WDRDates={WDRDate}
            shrink={TextShrink}
          />
          <Divider style={{ margin: '1.0rem 0.5rem 0rem  0.5rem' }} />
          <SubmitButton
            inputStates={inputDataStates}
            resetStates={initializeStates}
          />
        </Segment>
        <Segment style={{ paddingTop: '0px' }}>
          <div style={{}}>
            {/* <Divider style={{ margin: '0.8rem 0' }} /> */}
            <Header
              as="h3"
              style={{ margin: '1.1rem 0 0.4rem' }} // color: '#a6a6a6'
            >
              적용비율
            </Header>
            <FormRatioInput
              PurchaseRatio={PurchaseRatio}
              ExecPurchaseRatio={ExecPurchaseRatio}
              TechRatio={TechRatio}
              RewardRatio={RewardRatio}
              PurchaseRatiohandler={OnPurchaseRatioChange}
              TechRatiohandler={OnTechRatioChange}
              KEPCORatiohandler={OnKEPCORatioChange}
              MokpoRatiohandler={OnMokpoRatioChange}
              RewardRatiohandler={OnRewardRatioChange}
              shrink={TextShrink}
              title=""
              placeholder="%"
              readonly="false"
            />
            <Header
              as="h3"
              style={{ margin: '1.1rem 0 0.4rem' }} // color: '#a6a6a6'
            >
              지분비율
            </Header>
            <FormPatentRatioInput
              KEPCORatio={KEPCORatio}
              MokpoRatio={MokpoRatio}
              KSMRatio={KSMRatio}
              KDSRatio={KDSRatio}
              JSSRatio={JSSRatio}
              KBSRatio={KBSRatio}
              KEPCORatiohandler={OnKEPCORatioChange}
              MokpoRatiohandler={OnMokpoRatioChange}
              KSMRatiohandler={OnKSMRatioChange}
              KDSRatiohandler={OnKDSRatioChange}
              JSSRatiohandler={OnJSSRatioChange}
              KBSRatiohandler={OnKBSRatioChange}
              shrink={TextShrink}
              title=""
              placeholder="%"
              readonly="false"
            />

            <Header
              as="h3"
              style={{ margin: '1.1rem 0 0.4rem' }} //color: '#a6a6a6'
            >
              판매단가(USD)
            </Header>
            <FormSellPrice
              SellPrice_Mver={SellPrice_Mver}
              SellPrice_Sver={SellPrice_Sver}
              SellPrice_SAver={SellPrice_SAver}
              SellPrice_MPack={SellPrice_MPack}
              Mverhandler={OnSellPriceMverChange}
              Sverhandler={OnSellPriceSverChange}
              SAverhandler={OnSellPriceSAverChange}
              MPackhandler={OnSellPriceMPackChange}
              shrink={TextShrink}
              title=""
              placeholder="$"
              readonly="false"
            />

            {/* <Divider style={{ margin: '0.8rem 0' }} /> */}
            <Header
              as="h3"
              style={{ margin: '1.1rem 0 0.4rem' }} //color: '#a6a6a6'
            >
              구매단가(USD)
            </Header>
            <FormBuyPrice
              BuyPrice_Mver={BuyPrice_Mver}
              BuyPrice_Sver={BuyPrice_Sver}
              BuyPrice_SAver={BuyPrice_SAver}
              BuyPrice_MPack={BuyPrice_MPack}
              Mverhandler={OnBuyPriceMverChange}
              Sverhandler={OnBuyPriceSverChange}
              SAverhandler={OnBuyPriceSAverChange}
              MPackhandler={OnBuyPriceMPackChange}
              shrink={TextShrink}
              title=""
              placeholder="$"
              readonly="true"
            />

            <Header
              as="h3"
              style={{ margin: '1.1rem 0 0.4rem' }} //color: '#a6a6a6'
            >
              실시구매단가(USD)
            </Header>
            <FormExecBuyPrice
              ExecBuyPrice_Mver={ExecBuyPrice_Mver}
              ExecBuyPrice_Sver={ExecBuyPrice_Sver}
              ExecBuyPrice_SAver={ExecBuyPrice_SAver}
              ExecBuyPrice_MPack={ExecBuyPrice_MPack}
              Mverhandler={OnExecBuyPriceMverChange}
              Sverhandler={OnExecBuyPriceSverChange}
              SAverhandler={OnExecBuyPriceSAverChange}
              MPackhandler={OnExecBuyPriceMPackChange}
              shrink={TextShrink}
              title=""
              placeholder="$"
              readonly="true"
            />
          </div>
        </Segment>
      </div>
    );
  }
}

export default ProductForm;
