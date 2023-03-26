const { DataTypes } = require('sequelize');
const db = require("../utils/database");

const Participants = db.define("participants",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_conversation: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
);

module.exports = Participants;
