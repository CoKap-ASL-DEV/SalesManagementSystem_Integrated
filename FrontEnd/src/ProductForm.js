import React, { Component } from "react";
import FormBuyPrice from "./Component/Form_BuyPrice";
import FormSellPrice from "./Component/Form_SellPrice";
import FormWonDollarRatio from "./Component/Form_WonDollarRatio";
import FormRatioInput from "./Component/Form_RatioInput";
import FormOrderNum from "./Component/Form_OrderNum";

import SubmitButton from "./Component/SubmitButton";
import { Divider, Header, Segment } from "semantic-ui-react";
import { observer, inject } from "mobx-react";

@inject("fstore")
@observer
class ProductForm extends Component {
  render() {
    const { fstore } = this.props;

    const {
      SellPrice_Mver,
      SellPrice_Sver,
      SellPrice_SAver,
      SellPrice_MPack,

      OrderNum_Mver,
      OrderNum_Sver,
      OrderNum_SAver,
      OrderNum_MPack,
      
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
      
      OnSellPriceMverChange,
      OnSellPriceSverChange,
      OnSellPriceSAverChange,
      OnSellPriceMPackChange,

      OnOrderNumMverChange,
      OnOrderNumSverChange,
      OnOrderNumSAverChange,
      OnOrderNumMPackChange,

      OnWonDollarRatioChange,

      OnPurchaseRatioChange,  
      OnTechRatioChange,  
      OnKEPCORatioChange,    
      OnMokpoRatioChange,    
      OnRewardRatioChange


    } = fstore;

    //console.log(fstore.Sver);
    //console.log(formvar.SellPrice_Sver);

    return (
      <div>
        <Segment>
          <Header as="h3" />
          <FormSellPrice
            SellPrice_Mver={SellPrice_Mver}
            SellPrice_Sver={SellPrice_Sver}
            SellPrice_SAver={SellPrice_SAver}
            SellPrice_MPack={SellPrice_MPack}
            Mverhandler = {OnSellPriceMverChange}
            Sverhandler = {OnSellPriceSverChange}
            SAverhandler = {OnSellPriceSAverChange}
            MPackhandler = {OnSellPriceMPackChange}
            title="판매가"
            placeholder="$"
            readonly="false"
          />
          <Divider section />

          <Header as="h3" />
          <FormOrderNum
            OrderNum_Mver={OrderNum_Mver}
            OrderNum_Sver={OrderNum_Sver}
            OrderNum_SAver={OrderNum_SAver}
            OrderNum_MPack={OrderNum_MPack}
            Mverhandler = {OnOrderNumMverChange}
            Sverhandler = {OnOrderNumSverChange}
            SAverhandler = {OnOrderNumSAverChange}
            MPackhandler = {OnOrderNumMPackChange}
            params={fstore}
            title="주문수량"
            placeholder="ea"
            readonly="false"
          />
          <Divider section />

          <Header as="h3" />
          <FormWonDollarRatio
            WonDollarRatio={WonDollarRatio}
            params={fstore}
            title="환  율"
            label="￦/$ Ratio"
            placeholder="￦"
            WonDollarRatiohandler = {OnWonDollarRatioChange}
          />
          <Divider section />

          <Header as="h3" />
          <FormBuyPrice
            BuyPrice_Mver={BuyPrice_Mver}
            BuyPrice_Sver={BuyPrice_Sver}
            BuyPrice_SAver={BuyPrice_SAver}
            BuyPrice_MPack={BuyPrice_MPack}
            title="구매가"
            placeholder="$"
            readonly="true"
          />
          <Divider section />

          <Header as="h3" />
          <FormRatioInput
            PurchaseRatio={PurchaseRatio}
            TechRatio={TechRatio}
            KEPCORatio={KEPCORatio}
            MokpoRatio={MokpoRatio}
            RewardRatio={RewardRatio}
            PurchaseRatiohandler={OnPurchaseRatioChange}
            TechRatiohandler = {OnTechRatioChange}
            KEPCORatiohandler = {OnKEPCORatioChange}
            MokpoRatiohandler = {OnMokpoRatioChange}
            RewardRatiohandler = {OnRewardRatioChange}
             
            title="비   율"
            placeholder="%"
            readonly="false"
          />
          <Divider section />

          <SubmitButton />
        </Segment>
      </div>
    );
  }
}

export default ProductForm;
