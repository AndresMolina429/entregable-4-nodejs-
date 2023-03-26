const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Type_conversations = db.define(
    "type_conversations",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps:false
    }
)

module.exports = Type_conversations;