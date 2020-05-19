const crypto = require("crypto");
const { getRepository } = require("typeorm");
const jwt = require("jsonwebtoken");
const Auth = require("../entities/Auth");

const SECRET_KEY = "kepco_dsl_proto";

// TODO: what is not null and what is nullable
const schemaObject = {
  typedef: `
    type Auth {
      UserId: ID!
      Password: String!
      CreatedDate: String!
      LastLoginDate: String!
    }
    type JwtResult {
      result: Boolean!
      token: String
    }
    type Query {
      login(id: ID!, password: String!): JwtResult
    }
    type Mutation {
      signup(id: ID!, password: String!): Auth!
    }
`,
  resolvers: {
    Query: {
      login: async (_, { id, password }) => {
        const user = await getRepository(Auth).findOne(id);
        const secretedPassword = await generatePassword(password);

        console.log("login");

        if (user.Password === secretedPassword) {
          const token = jwt.sign(
            {
              user_id: id,
            },
            SECRET_KEY,
            {
              expiresIn: "1h",
            }
          );

          return {
            result: true,
            token,
          };
        } else {
          return {
            result: false,
          };
        }
      },
    },
    Mutation: {
      signup: async (_, { id, password }) => {
        const secretedPassword = await generatePassword(password);

        console.log("signup");

        const userData = {
          UserId: id,
          Password: secretedPassword,
          CreatedDate: new Date().getTime(),
          LastLoginDate: null,
        };

        return getRepository(Auth).save(userData);
      },
    },
  },
};

function generatePassword(password) {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(
      password,
      "kepcodsl",
      100000,
      64,
      "sha512",
      (err, derivedKey) => {
        if (err) {
          reject("error generating password");
        }

        resolve(derivedKey.toString("hex"));
      }
    );
  });
}

module.exports = schemaObject;
