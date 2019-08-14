import { observable, action } from 'mobx';
import ApolloClient, {gql} from 'apollo-boost';
import numeral from 'numeral';

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

const GET_SALES_DATA = gql`
  query {
    prices {
      id
      priceMVer
      priceSVer
      priceSAVer
      priceMPackage
    }
    equityRatios {
      id
      purchaseRatio
      technicalRatio
      kepcoRatio
      mokpoRatio
      compensationRatio
    }
    equityRatioPrivates {
      id
      dsk
      smkim
      ssj
      bsk
    }
  }
`;

export default class SaleStore {
    @observable isLoading = false;
    @observable ExchangeRate = '';
    
    // @observable price = [
    //     {id: 0 , name : 'priceMver', text: 'M-ver', value : 12400 },
    //     {id: 1, name: 'priceSver', text: 'S-ver', value : 6200 },
    //     {id: 2, name: 'priceSAver', text: 'SA-ver', value : 6200 },
    //     {id: 3, name: 'priceMPackage', text: 'M-Package', value : 22000 }
    //   ];
      
    // @observable EquityRatio = [
    //     {id: 0, name: 'purchaseRatio', text: '구매가비율', value: 0.7 },
    //     {id: 1, name: 'technicalRatio', text: '기술요율', value: 0.2 },
    //     {id: 2, name: 'kepcoRatio', text: '한전지분율', value: 0.8 },
    //     {id: 3, name: 'mokpoRatio', text: '목포지분율', value: 0.2 },
    //     {id: 4, name: 'compensationRatio', text: '보상요율', value: 0.6 }
    //   ];
    // @observable EquityRatioPrivate = [
    //     {id: 0, name: 'dsk', text: 'DSK', value : 0.35 },
    //     {id: 1, name: 'smkim', text: 'SMKIM', value : 0.35 },
    //     {id: 2, name: 'ssj', text: 'SSJ', value : 0.05 },
    //     {id: 3, name: 'bsk', text: 'BSK', value : 0.05 }
    //   ];
  
      // 표출되는 데이터
    @observable InputDataList = [
      { id: 0,
        netIncomeKepco: "7,440,000",
        netIncomePP: "14,582,400",
        patentDisposalCompensation: "1,666,560",
        technicalFeePaymentKepco: "2,777,600",
        technicalFreePaymentMmu: "694,400",
        totalPurchasePrice: "17,360",
        totalPurchasePrice_won: "17,360,000",
        totalSellingPrice: "24,800",
        totalSellingPrice_won: "24,800,000",
        value_M: "1",
        value_MP: "",
        value_S: "1",
        value_SA: "1",
        value_total: 3,}
    ];

    @observable originPricesData = [];
    @observable originEquityRatiosData = [];
    @observable originEquityRatioPrivatesData = [];

    @observable prices = [];
    @observable equityRatios = [];
    @observable equityRatioPrivates = [];

    async getMetaData() {
      let response = await client.query({
        query : GET_SALES_DATA
      });
      this.originPricesData = [...response.data.prices];
      this.originEquityRatiosData = [...response.data.equityRatios];
      this.originEquityRatioPrivatesData = [...response.data.equityRatioPrivates];
    }

    @action getData = () => {
      this.isLoading = true;

      this.getMetaData().then(() => {
        this.prices = this.originPricesData;
        this.equityRatios = this.originEquityRatiosData;
        this.equityRatioPrivates = this.originEquityRatioPrivatesData;
      });
    }

    @action insertExchangeRate = (exchangeRate) => {
      this.ExchangeRate = exchangeRate;
    }

    @action insert = (id, input_m, input_mp, input_s, input_sa, ExchangeRate) => {
      console.log('insert시행');
      console.log(this.InputDataList);
      const value_total = Number(input_m) + Number(input_s) + Number(input_sa) + Number(input_mp);
      const totalsellingprice = Number(input_m*this.prices[0].priceMVer) + Number(input_s*this.prices[0].priceSVer) 
                                  +Number(input_sa*this.prices[0].priceSAVer) + Number(input_mp*this.prices[0].priceMPackage);
      const totalSellingPrice_won = totalsellingprice*ExchangeRate;
      const totalPurchasePrice = totalsellingprice*0.7;
      const totalPurchasePrice_won = totalPurchasePrice*ExchangeRate;
      const technicalFeePaymentKepco = totalPurchasePrice_won*this.equityRatios[0].technicalRatio*this.equityRatios[0].kepcoRatio;
      const technicalFreePaymentMmu = totalPurchasePrice_won*this.equityRatios[0].technicalRatio*this.equityRatios[0].mokpoRatio;
      const patentDisposalCompensation = technicalFeePaymentKepco*this.equityRatios[0].compensationRatio;
      const addInputDataList = [];
      addInputDataList.push({
          id : id++,
          value_M : input_m,
          value_MP : input_mp,
          value_S : input_s,
          value_SA : input_sa,
          value_total : value_total,
          totalSellingPrice: numeral(totalsellingprice).format('0,0'),
          totalSellingPrice_won: numeral(totalSellingPrice_won).format('0,0'),
          totalPurchasePrice : numeral(totalPurchasePrice).format('0,0'),
          totalPurchasePrice_won : numeral(totalPurchasePrice_won).format('0,0'),
          technicalFeePaymentKepco: numeral(technicalFeePaymentKepco).format('0,0'),
          technicalFreePaymentMmu: numeral(technicalFreePaymentMmu).format('0,0'),
          patentDisposalCompensation :numeral(patentDisposalCompensation).format('0,0'),
          netIncomePP : numeral(totalPurchasePrice_won - technicalFeePaymentKepco).format('0,0'),
          netIncomeKepco : numeral(totalSellingPrice_won-totalPurchasePrice_won).format('0,0')
    });
    this.InputDataList = [
      ...this.InputDataList, ...addInputDataList
    ];
  };

    @action onDelete = (id) => {
      const index = this.InputDataList.findIndex(Inputdata => Number(Inputdata.id) === Number(id));
  
      this.InputDataList = [
        ...this.InputDataList.slice(0, index),
        ...this.InputDataList.slice(index + 1, this.InputDataList.length)
      ];
     
      console.log(this.InputDataList);  
    }
  };