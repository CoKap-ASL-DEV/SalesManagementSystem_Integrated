const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "FormInputData", //postgresql DB에 여기에서 지정한 이름을 소문자로 바꾸고 대문자로 시작하는 첫번째 글자앞에서 언더바 넣은(form_data)이름으로 테이블이 생성된다.
  columns: {
    id: {
      primary: true,
      type: "integer",
      generated: true,
    },
    // 생성 시각(timestamp)
    CreatedDate: {
      type: "text",
    },
    // 순번
    // SeqNum: {
    //   type: "numeric"
    // },

    /////////////구매 Order from BAUR/////////////

    // BAUR 구매 날짜
    IssueDate: {
      type: "text",
      nullable: true,
    },
    // BAUR 구매 주문서 번호
    PoNumber: {
      type: "text",
      nullable: true,
    },

    /////////////판매가/////////////
    // M-ver. price
    SellPrice_Mver: {
      type: "numeric",
    },
    // S-ver. price
    SellPrice_Sver: {
      type: "numeric",
    },
    // SA-ver. price
    SellPrice_SAver: {
      type: "numeric",
    },
    // M Package price
    SellPrice_MPack: {
      type: "numeric",
    },

    /////////////주문수량/////////////

    // M-version 주문 수량
    OrderNum_Mver: {
      type: "numeric",
    },
    // S-version 주문 수량
    OrderNum_Sver: {
      type: "numeric",
    },
    // SA-version 주문 수량
    OrderNum_SAver: {
      type: "numeric",
    },
    // M package 주문 수량
    OrderNum_MPack: {
      type: "numeric",
    },

    /////////////환율/////////////

    // 적용환율 기준일
    WDRDate: {
      type: "text",
    },
    // 적용환율 매매 기준율
    WonDollarRatio: {
      type: "numeric",
    },

    /////////////적용비율/////////////

    // 구매가 비율
    PurchaseRatio: {
      type: "numeric",
    },
    // 실시구매가 비율
    ExecPurchaseRatio: {
      type: "numeric",
    },
    // 기술요율
    TechRatio: {
      type: "numeric",
    },

    // 보상요율
    RewardRatio: {
      type: "numeric",
    },

    /////////////지분비율/////////////
    // 한전지분율
    KEPCORatio: {
      type: "numeric",
    },
    // 목포지분율
    MokpoRatio: {
      type: "numeric",
    },
    // 김성민 비율
    KSMRatio: {
      type: "numeric",
    },
    // 김동섭 비율
    KDSRatio: {
      type: "numeric",
    },
    // 전시식 비율
    JSSRatio: {
      type: "numeric",
    },
    // 김병석 비율
    KBSRatio: {
      type: "numeric",
    },
  },
});
