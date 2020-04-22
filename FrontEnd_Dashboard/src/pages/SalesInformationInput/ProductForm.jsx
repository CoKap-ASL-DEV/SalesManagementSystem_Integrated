import React, { Component } from 'react';
import { Divider, Header, Segment } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';

import FormPoNumber from './Form_PoNumber';
import FormBuyPrice from './Form_BuyPrice';
import FormSellPrice from './Form_SellPrice';
import FormWonDollarRatio from './Form_WonDollarRatio';
import FormRatioInput from './Form_RatioInput';
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

      PurchaseRatio,
      TechRatio,
      KEPCORatio,
      MokpoRatio,
      RewardRatio,

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

      OnPurchaseRatioChange,
      OnTechRatioChange,
      OnKEPCORatioChange,
      OnMokpoRatioChange,
      OnRewardRatioChange,

      initializeStates,
      TextShrink,
    } = fstore;

    const inputDataStates = {
      IssueDate,
      PoNumber,

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
      TechRatio,
      KEPCORatio,
      MokpoRatio,
      RewardRatio,
    };

    //console.log(fstore.Sver);
    //console.log(formvar.SellPrice_Sver);

    return (
      <div>
        <Segment style={{ paddingTop: '25px' }}>
          <Header as="h3">PO From BAUR</Header>
          <FormPoNumber
            PoNumber={PoNumber}
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

          <Divider style={{ margin: '1.8rem 0' }} />
          <div style={{}}>
            <Header
              as="h3"
              style={{ margin: '1.1rem 0 0.4rem' }} //color: '#a6a6a6'
            >
              판매가
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
              style={{ margin: '1.1rem 0 0.4rem' }} // color: '#a6a6a6'
            >
              비 율
            </Header>
            <FormRatioInput
              PurchaseRatio={PurchaseRatio}
              TechRatio={TechRatio}
              KEPCORatio={KEPCORatio}
              MokpoRatio={MokpoRatio}
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

            {/* <Divider style={{ margin: '0.8rem 0' }} /> */}
            <Header
              as="h3"
              style={{ margin: '1.1rem 0 0.4rem' }} //color: '#a6a6a6'
            >
              구매가
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
          </div>
          <Divider style={{ margin: '1.8rem 0' }} />

          <SubmitButton
            inputStates={inputDataStates}
            resetStates={initializeStates}
          />
        </Segment>
      </div>
    );
  }
}

export default ProductForm;
