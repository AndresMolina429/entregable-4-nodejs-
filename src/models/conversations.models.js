const { DataTypes } = require('sequelize');
const db = require('../utils/database');

const Conversations = db.define(
    "conversations",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // created_by: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // }

    }
)

module.exports = Conversations;