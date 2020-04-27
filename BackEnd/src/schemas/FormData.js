const { getRepository } = require("typeorm");
const FormData = require("../entities/FormData");
const { createWriteStream, existsSync, mkdirSync } = require("fs");
const path = require("path");

const FormDataArguments_Str = [
  "CreatedDate",
  "IssueDate",
  "PoNumber",
  "WDRDate",
];

const FormDataArguments_Flt = [
  //"SeqNum",
  "SellPrice_Mver",
  "SellPrice_Sver",
  "SellPrice_SAver",
  "SellPrice_MPack",
  "OrderNum_Mver",
  "OrderNum_Sver",
  "OrderNum_SAver",
  "OrderNum_MPack",
  "WonDollarRatio",
  "PurchaseRatio",
  "ExecPurchaseRatio",
  "TechRatio",
  "RewardRatio",
  "KEPCORatio",
  "MokpoRatio",
  "KSMRatio",
  "KDSRatio",
  "JSSRatio",
  "KBSRatio",
];
const FormDataArguments = [...FormDataArguments_Flt, ...FormDataArguments_Str];
// TODO: what is not null and what is nullable
const schemaObject = {
  typedef: `
        type FormData {
            id: ID!
            ${FormDataArguments_Flt.map((d) => d + ": Float").join("\n")}
            ${FormDataArguments_Str.map((d) => d + ": String").join("\n")}
        }
        type Query {
            formDatas: [FormData]
            formData(id: ID!): FormData!
        }
        type Mutation {
            addFormData(
                ${FormDataArguments_Flt.map((d) => d + ": Float").join("\n")}
                ${FormDataArguments_Str.map((d) => d + ": String").join("\n")}
            ): FormData
            editFormData(
                id: ID!
                ${FormDataArguments_Flt.map((d) => d + ": Float").join("\n")}
                ${FormDataArguments_Str.map((d) => d + ": String").join("\n")}
            ): FormData
            deleteFormData(id: ID!): Boolean
            uploadFile(file: Upload!): Boolean
        }
    `,
  resolvers: {
    Query: {
      formDatas: () => {
        return getRepository(FormData).find();
      },
      formData: (_, { id }) => {
        return getRepository(FormData).findOne(id);
      },
    },
    Mutation: {
      addFormData: (_, { ...FormDataArguments }) => {
        const formData = Object.assign(
          {
            ...FormDataArguments,
          },
          FormData
        ); //assign 파라미터를 반대로 하니 데이터는 업데이트 되는데 id가 자동생성 안됨

        return getRepository(FormData).save(formData);
      },
      editFormData: async (_, { id, ...FormDataArguments }) => {
        const editItem = await getRepository(FormData).findOne({ id });

        const editedEntry = Object.assign(editItem, { ...FormDataArguments });

        await getRepository(FormData).save(editedEntry);
      },
      deleteFormData: async (_, { id }) => {
        try {
          const delItem = await getRepository(FormData).findOne({ id });

          await getRepository(FormData).remove(delItem);

          return true;
        } catch (err) {
          console.log(err);
          return false;
        }
      },
      uploadFile: async (_, { file }) => {
        const { createReadStream, filename } = await file;
        await new Promise((res) =>
          createReadStream()
            .pipe(createWriteStream(path.join(__dirname, "/attach", filename)))
            .on("close", res)
        );

        //files.push(filename);

        return true;
      },
    },
  },
};

module.exports = schemaObject;
