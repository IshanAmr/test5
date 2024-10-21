const { DataTypes, sequelize } = require("../lib/index");

const employee = sequelize.define("employee", {
    name: DataTypes.TEXT,
    salary: DataTypes.INTEGER,
    department: DataTypes.TEXT,
    deisgnation: DataTypes.TEXT
});

module.exports = { employee };