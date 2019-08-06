import { observable, action } from "mobx";

export default class FormInputStore {
  @observable SellPrice_Mver = null;
  @observable SellPrice_Sver = null;
  @observable SellPrice_SAver = null;
  @observable SellPrice_MPack = null;

  @observable OrderNum_Mver = null;
  @observable OrderNum_Sver = null;
  @observable OrderNum_SAver = null;
  @observable OrderNum_MPack = null;

  @observable WonDollarRatio = null;

  @observable BuyPrice_Mver = null;
  @observable BuyPrice_Sver = null;
  @observable BuyPrice_SAver = null;
  @observable BuyPrice_MPack = null;

  @observable PurchaseRatio = null;
  @observable TechRatio = null;
  @observable KEPCORatio = null;
  @observable MokpoRatio = null;
  @observable RewardRatio = null;

  @action
  OnSellPriceMverChange = (e) => {    
    this.SellPrice_Mver = e.target.value;
    this.BuyPrice_Mver = this.SellPrice_Mver * 0.7;
    
  };
  OnSellPriceSverChange = (e) => {    
    this.SellPrice_Sver = e.target.value;
    this.BuyPrice_Sver = this.SellPrice_Sver * 0.7;
    
  };
  OnSellPriceSAverChange = (e) => {        
    this.SellPrice_SAver = e.target.value;       
    this.BuyPrice_SAver = this.SellPrice_SAver * 0.7;
    
  };
  OnSellPriceMPackChange = (e) => {        
    this.SellPrice_MPack = e.target.value;
    this.BuyPrice_MPack = this.SellPrice_MPack * 0.7;
  };

  OnOrderNumMverChange = (e) => {        
    this.OrderNum_Mver = e.target.value;
  };

  OnOrderNumSverChange = (e) => {        
    this.OrderNum_Sver = e.target.value;
  };
  OnOrderNumSAverChange = (e) => {        
    this.OrderNum_SAver = e.target.value;
  };

  OnOrderNumMPackChange = (e) => {        
    this.OrderNum_MPack = e.target.value;
  };
  
  OnWonDollarRatioChange = (e) => {        
    this.WonDollarRatio = e.target.value;
  };


  OnPurchaseRatioChange = (e) => {        
    this.PurchaseRatio = e.target.value;
  };

  OnTechRatioChange = (e) => {        
    this.TechRatio = e.target.value;
  };

  OnKEPCORatioChange = (e) => {        
    this.KEPCORatio = e.target.value;
  };

  OnMokpoRatioChange = (e) => {        
    this.MokpoRatio = e.target.value;
  };

  OnRewardRatioChange = (e) => {        
    this.RewardRatio = e.target.value;
  };



  

}
