
import { observable, action } from "mobx";


export default class FormInputStore {
  @observable IssueDate = null;
  @observable PoNumber = null;

  @observable SellPrice_Mver = null;
  @observable SellPrice_Sver = null;
  @observable SellPrice_SAver = null;
  @observable SellPrice_MPack = null;

  @observable OrderNum_Mver = null;
  @observable OrderNum_Sver = null;
  @observable OrderNum_SAver = null;
  @observable OrderNum_MPack = null;

  @observable WDRDate = null;
  @observable WonDollarRatio = null;

  @observable BuyPrice_Mver = 0;
  @observable BuyPrice_Sver = 0;
  @observable BuyPrice_SAver = 0;
  @observable BuyPrice_MPack = 0;

  @observable PurchaseRatio = null;
  @observable TechRatio = null;
  @observable KEPCORatio = null;
  @observable MokpoRatio = null;
  @observable RewardRatio = null;

  @action
  OnPoNumberChange = (e) => {        
    this.PoNumber = e.target.value;
  };
  OnIssueDateChange = (date, dateString) => {        
    this.IssueDate = dateString;    //2019-09-05 형식
  };
  

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
    console.log(this.WonDollarRatio);
    
  };

  OnWDRDateChange = (date, dateString) => {        
    this.WDRDate = dateString;    //2019-09-05 형식
    //console.log(this.WDRDate);
  };



  OnBuyPriceMverChange = (e) =>{
    this.BuyPrice_Mver = e.target.value;
  };
  OnBuyPriceSverChange = (e) =>{
    this.BuyPrice_Sver = e.target.value;
  };
  OnBuyPriceSAverChange = (e) =>{
    this.BuyPrice_SAver = e.target.value;
  };
  OnBuyPriceMPackChange = (e) =>{
    this.BuyPrice_MPack = e.target.value;
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

 
  initializeStates = (e) =>{
    this.IssueDate = "";
    this.PoNumber = "";
  
    this.SellPrice_Mver = 0;
    this.SellPrice_Sver = 0;
    this.SellPrice_SAver = 0;
    this.SellPrice_MPack = 0;
  
    this.OrderNum_Mver = 0;
    this.OrderNum_Sver = 0;
    this.OrderNum_SAver = 0;
    this.OrderNum_MPack = 0;
  
    this.WDRDate = null;
    this.WonDollarRatio = 0;

    this.BuyPrice_Mver = 0;
    this.BuyPrice_Sver = 0;
    this.BuyPrice_SAver = 0;
    this.BuyPrice_MPack = 0;
  
    this.PurchaseRatio = 0;
    this.TechRatio = 0;
    this.KEPCORatio = 0;
    this.MokpoRatio = 0;
    this.RewardRatio = 0;
//    console.log('Hello,onClick')
  };


  

}
