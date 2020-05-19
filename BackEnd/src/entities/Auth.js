const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "UserAuths",
  columns: {
    UserId: {
      primary: true,
      type: "text",
    },
    Password: {
      type: "text",
      nullable: false,
    },
    CreatedDate: {
      type: "text",
      nullable: false,
    },
    LastLoginDate: {
      type: "text",
      nullable: true,
    },
  },
});
