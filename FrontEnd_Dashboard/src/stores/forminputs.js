import { observable, action } from 'mobx';

export default class FormInputStore {
  @observable IssueDate = null;
  @observable PoNumber = null;

  @observable RewardType = 0;

  @observable SellPrice_Mver = 12400;
  @observable SellPrice_Sver = 6200;
  @observable SellPrice_SAver = 6200;
  @observable SellPrice_MPack = 22000;

  @observable OrderNum_Mver = null;
  @observable OrderNum_Sver = null;
  @observable OrderNum_SAver = null;
  @observable OrderNum_MPack = null;

  @observable WDRDate = null;
  @observable WonDollarRatio = null;

  @observable PurchaseRatio = 70;
  @observable ExecPurchaseRatio = 80;
  @observable TechRatio = 20;
  @observable RewardRatio = 60;

  @observable KEPCORatio = 80;
  @observable MokpoRatio = 20;
  @observable KSMRatio = 35;
  @observable KDSRatio = 35;
  @observable JSSRatio = 5;
  @observable KBSRatio = 5;

  @observable BuyPrice_Mver = this.SellPrice_Mver * this.PurchaseRatio * 0.01;
  @observable BuyPrice_Sver = this.SellPrice_Sver * this.PurchaseRatio * 0.01;
  @observable BuyPrice_SAver = this.SellPrice_SAver * this.PurchaseRatio * 0.01;
  @observable BuyPrice_MPack = this.SellPrice_MPack * this.PurchaseRatio * 0.01;

  @observable ExecBuyPrice_Mver =
    this.BuyPrice_Mver * this.ExecPurchaseRatio * 0.01;
  @observable ExecBuyPrice_Sver =
    this.BuyPrice_Sver * this.ExecPurchaseRatio * 0.01;
  @observable ExecBuyPrice_SAver =
    this.BuyPrice_SAver * this.ExecPurchaseRatio * 0.01;
  @observable ExecBuyPrice_MPack =
    this.BuyPrice_MPack * this.ExecPurchaseRatio * 0.01;

  @observable TextShrink = new Array(6).fill(false);

  @observable FilePath = null; //new Object();
  @observable SelectedFile = null; //new Object();

  @action
  OnPoNumberChange = e => {
    this.TextShrink[0] = e.target.value ? true : false;
    this.PoNumber = e.target.value;
  };
  OnIssueDateChange = (date, dateString) => {
    this.IssueDate = dateString; //2019-09-05 형식
  };

  OnSellPriceMverChange = e => {
    //this.TextShrink[13] = true;
    this.SellPrice_Mver = e.target.value;
    this.BuyPrice_Mver = this.SellPrice_Mver * this.PurchaseRatio * 0.01;
  };
  OnSellPriceSverChange = e => {
    //this.TextShrink = true;
    this.SellPrice_Sver = e.target.value;
    this.BuyPrice_Sver = this.SellPrice_Sver * this.PurchaseRatio * 0.01;
  };
  OnSellPriceSAverChange = e => {
    //this.TextShrink = true;
    this.SellPrice_SAver = e.target.value;
    this.BuyPrice_SAver = this.SellPrice_SAver * this.PurchaseRatio * 0.01;
  };
  OnSellPriceMPackChange = e => {
    //this.TextShrink = true;
    this.SellPrice_MPack = e.target.value;
    this.BuyPrice_MPack = this.SellPrice_MPack * this.PurchaseRatio * 0.01;
  };

  OnOrderNumMverChange = e => {
    this.TextShrink[1] = e.target.value ? true : false;
    this.OrderNum_Mver = e.target.value;
  };

  OnOrderNumSverChange = e => {
    this.TextShrink[2] = e.target.value ? true : false;
    this.OrderNum_Sver = e.target.value;
  };
  OnOrderNumSAverChange = e => {
    this.TextShrink[3] = e.target.value ? true : false;
    this.OrderNum_SAver = e.target.value;
  };

  OnOrderNumMPackChange = e => {
    this.TextShrink[4] = e.target.value ? true : false;
    this.OrderNum_MPack = e.target.value;
  };

  OnWonDollarRatioChange = e => {
    this.TextShrink[5] = e.target.value ? true : false;
    this.WonDollarRatio = e.target.value;
    console.log(this.WonDollarRatio);
  };

  OnWDRDateChange = (date, dateString) => {
    this.WDRDate = dateString; //2019-09-05 형식
    //console.log(this.WDRDate);
  };

  OnBuyPriceMverChange = e => {
    this.BuyPrice_Mver = e.target.value;
  };
  OnBuyPriceSverChange = e => {
    this.BuyPrice_Sver = e.target.value;
  };
  OnBuyPriceSAverChange = e => {
    this.BuyPrice_SAver = e.target.value;
  };
  OnBuyPriceMPackChange = e => {
    this.BuyPrice_MPack = e.target.value;
  };

  OnExecBuyPriceMverChange = e => {
    this.ExecBuyPrice_Mver = e.target.value;
  };
  OnExecBuyPriceSverChange = e => {
    this.ExecBuyPrice_Sver = e.target.value;
  };
  OnExecBuyPriceSAverChange = e => {
    this.ExecBuyPrice_SAver = e.target.value;
  };
  OnExecBuyPriceMPackChange = e => {
    this.ExecBuyPrice_MPack = e.target.value;
  };

  OnPurchaseRatioChange = e => {
    this.PurchaseRatio = e.target.value;
    this.BuyPrice_Mver = this.SellPrice_Mver * this.PurchaseRatio * 0.01;
    this.BuyPrice_Sver = this.SellPrice_Sver * this.PurchaseRatio * 0.01;
    this.BuyPrice_SAver = this.SellPrice_SAver * this.PurchaseRatio * 0.01;
    this.BuyPrice_MPack = this.SellPrice_MPack * this.PurchaseRatio * 0.01;
    this.ExecBuyPrice_Mver = this.BuyPrice_Mver * this.ExecPurchaseRatio * 0.01;
    this.ExecBuyPrice_Sver = this.BuyPrice_Sver * this.ExecPurchaseRatio * 0.01;
    this.ExecBuyPrice_SAver =
      this.BuyPrice_SAver * this.ExecPurchaseRatio * 0.01;
    this.ExecBuyPrice_MPack =
      this.BuyPrice_MPack * this.ExecPurchaseRatio * 0.01;
  };

  OnTechRatioChange = e => {
    this.TechRatio = e.target.value;
  };

  OnRewardRatioChange = e => {
    this.RewardRatio = e.target.value;
  };

  OnKEPCORatioChange = e => {
    this.KEPCORatio = e.target.value;
  };

  OnMokpoRatioChange = e => {
    this.MokpoRatio = e.target.value;
  };

  OnKEPCORatioChange = e => {
    this.MokpoRatio = e.target.value;
  };
  OnMokpoRatioChange = e => {
    this.MokpoRatio = e.target.value;
  };
  OnKSMRatioChange = e => {
    this.KSMRatio = e.target.value;
  };
  OnKDSRatioChange = e => {
    this.KDSRatio = e.target.value;
  };
  OnJSSRatioChange = e => {
    this.JSSRatio = e.target.value;
  };
  OnKBSRatioChange = e => {
    this.KBSRatio = e.target.value;
  };

  initializeStates = e => {
    this.IssueDate = null;
    this.PoNumber = '';
    this.FilePath = null;
    this.RewardType = 0;
    this.SelectedFile = null;

    this.OrderNum_Mver = 0;
    this.OrderNum_Sver = 0;
    this.OrderNum_SAver = 0;
    this.OrderNum_MPack = 0;

    this.WDRDate = null;
    this.WonDollarRatio = 0;

    this.PurchaseRatio = 70;
    this.ExecPurchaseRatio = 80;
    this.TechRatio = 20;
    this.RewardRatio = 60;

    this.SellPrice_Mver = 12400;
    this.SellPrice_Sver = 6200;
    this.SellPrice_SAver = 6200;
    this.SellPrice_MPack = 22000;

    this.BuyPrice_Mver = this.SellPrice_Mver * this.PurchaseRatio * 0.01;
    this.BuyPrice_Sver = this.SellPrice_Sver * this.PurchaseRatio * 0.01;
    this.BuyPrice_SAver = this.SellPrice_SAver * this.PurchaseRatio * 0.01;
    this.BuyPrice_MPack = this.SellPrice_MPack * this.PurchaseRatio * 0.01;

    this.ExecBuyPrice_Mver = this.BuyPrice_Mver * this.ExecPurchaseRatio * 0.01;
    this.ExecBuyPrice_Sver = this.BuyPrice_Sver * this.ExecPurchaseRatio * 0.01;
    this.ExecBuyPrice_SAver =
      this.BuyPrice_SAver * this.ExecPurchaseRatio * 0.01;
    this.ExecBuyPrice_MPack =
      this.BuyPrice_MPack * this.ExecPurchaseRatio * 0.01;

    this.KEPCORatio = 80;
    this.MokpoRatio = 20;
    this.KSMRatio = 35;
    this.KDSRatio = 35;
    this.JSSRatio = 5;
    this.KBSRatio = 5;

    //    console.log('Hello,onClick')
  };
  ParamtoStates = params => {
    this.TextShrink.fill(true);
    this.IssueDate = params.IssueDate;
    this.PoNumber = params.PoNumber;

    this.SellPrice_Mver = params.SellPrice_Mver;
    this.SellPrice_Sver = params.SellPrice_Sver;
    this.SellPrice_SAver = params.SellPrice_SAver;
    this.SellPrice_MPack = params.SellPrice_MPack;

    this.OrderNum_Mver = params.OrderNum_Mver;
    this.OrderNum_Sver = params.OrderNum_Sver;
    this.OrderNum_SAver = params.OrderNum_SAver;
    this.OrderNum_MPack = params.OrderNum_MPack;

    this.WDRDate = params.WDRDate;
    this.WonDollarRatio = params.WonDollarRatio;

    this.BuyPrice_Mver = params.SellPrice_Mver * params.PurchaseRatio * 0.01;

    this.BuyPrice_Sver = params.SellPrice_Sver * params.PurchaseRatio * 0.01;

    this.BuyPrice_SAver = params.SellPrice_SAver * params.PurchaseRatio * 0.01;

    this.BuyPrice_MPack = params.SellPrice_MPack * params.PurchaseRatio * 0.01;

    this.ExecBuyPrice_Mver =
      this.BuyPrice_Mver * params.ExecPurchaseRatio * 0.01;
    this.ExecBuyPrice_Sver =
      this.BuyPrice_Sver * params.ExecPurchaseRatio * 0.01;
    this.ExecBuyPrice_SAver =
      this.BuyPrice_SAver * params.ExecPurchaseRatio * 0.01;
    this.ExecBuyPrice_MPack =
      this.BuyPrice_MPack * params.ExecPurchaseRatio * 0.01;

    this.PurchaseRatio = params.PurchaseRatio;
    this.ExecPurchaseRatio = params.ExecPurchaseRatio;
    this.TechRatio = params.TechRatio;
    this.RewardRatio = params.RewardRatio;

    this.KEPCORatio = params.KEPCORatio;
    this.MokpoRatio = params.MokpoRatio;
    this.KSMRatio = params.KSMRatio;
    this.KDSRatio = params.KDSRatio;
    this.JSSRatio = params.JSSRatio;
    this.KBSRatio = params.KBSRatio;

    //    console.log('Hello,onClick')
  };

  setFilePath = fp => {
    console.log('ccc');
    console.log(fp);
    console.log('ccc');
    this.FilePath = fp;

    console.log('zzz');
    console.log(this.FilePath);
    console.log('zzz');
  };

  setFileList = fl => {
    this.SelectedFile = fl;
  };

  setRewardType = type => {
    this.RewardType = type;
  };
}
