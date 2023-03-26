const Conversations = require("./conversations.models");
const Messages = require("./messages.models");
const Participans = require("./participants.models");
const Type_conversations = require("./type_conversations.models");
const Users = require("./user.models");

const initModels = () => {
  // TODO relacion entre Users y Posts
  // * BelongsTo
  // * hasMany
  // Users.hasMany(Conversations, { foreignKey: "created_by"});
  // Conversations.belongsTo(Users, { foreignKey: "created_by"});

  Users.hasMany(Messages, { foreignKey: "username" });
  Messages.belongsTo(Users, { foreignKey: "username" });

  Conversations.hasMany(Messages, { foreignKey: "id_conversation" });
  Messages.belongsTo(Conversations, { foreignKey: "id_conversation" });

  // Conversations.belongsToMany(Users, { through: "participants", foreignKey: "username"});
  // Users.belongsToMany(Conversations, {through: "participants" , foreignKey:"id_conversation"});

  Conversations.hasMany(Participans, { foreignKey: "id_conversation" });
  Participans.belongsTo(Conversations, {foreignKey: "id_conversation"});

  Users.hasMany(Participans, { foreignKey: "username"});
  Participans.belongsTo(Users, { foreignKey: "username" });
  // // // * Post - Categories
  Type_conversations.hasMany(Conversations, { foreignKey: "type" });
  Conversations.belongsTo(Type_conversations, { foreignKey: "type" });

};

module.exports = initModels;
