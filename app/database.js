const { Sequelize } = require("sequelize");

const client = new Sequelize(process.env.DATABASE_URL, {
  define: {
    underscored: true,
    updatedAt: "updated_at",
  },
});

module.exports = client;