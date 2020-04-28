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
          //console.log(err);
          return false;
        }
      },
      uploadFile: async (_, { file }) => {
        ///file 형태
        // {
        //   uid: 'rc-upload-1588039042693-2',
        //   lastModified: 1586304591996,
        //   lastModifiedDate: '2020-04-08T00:09:51.996Z',
        //   name: 'Foods_(cropped).jpg',
        //   size: 1014440,
        //   type: 'image/jpeg',
        //   percent: 0,
        //   originFileObj: Promise {
        //     {
        //       filename: 'Foods_(cropped).jpg',
        //       mimetype: 'image/jpeg',
        //       encoding: '7bit',
        //       createReadStream: [Function: createReadStream]
        //     }
        //   },
        //   status: 'done',
        //   response: 'ok'
        // }
        const lastModified = file.lastModified;
        const { createReadStream, filename } = await file.originFileObj;

        await new Promise((res) =>
          createReadStream()
            .pipe(
              createWriteStream(
                path.join(
                  __dirname,
                  "../attachment/",
                  lastModified + "_" + filename
                )
              )
            )
            .on("close", res)
        );

        //files.push(filename);

        return true;
      },
    },
  },
};

module.exports = schemaObject;
