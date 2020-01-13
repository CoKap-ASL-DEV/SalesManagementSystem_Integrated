const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { mergeTypes, mergeResolvers } = require("merge-graphql-schemas");
const { createConnection } = require("typeorm");
const FormDataSchema = require("./schemas/FormData");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../../FrontEnd/build")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../../FrontEnd/build", "index.html"));
});

const typeDefs = mergeTypes([FormDataSchema.typedef], { all: true });

const resolvers = mergeResolvers([FormDataSchema.resolvers]);

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.applyMiddleware({ app });

createConnection({
  type: "postgres",
  host: "john.db.elephantsql.com",
  port: 5432,
  username: "acofjdzg",
  password: "RpkWuUX_ahpQ6s7XMj0atKaPMFdb5ed_",
  database: "acofjdzg",
  synchronize: true,
  logging: false,
  entities: [require("./entities/FormData")]
})
  .then((/*res*/) => {
    app.listen({ port: 2000 }),
      url => {
        console.log(`🚀  Server ready at ${url}`);
      };
  })
  .catch(err => {
    console.log("Could nott connect to the database", err);
  });
