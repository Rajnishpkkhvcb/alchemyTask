module.exports = (sequelize, Sequelize) => {
    const users = sequelize.define("users", {
      id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.BIGINT
      },
      username: {
        type: Sequelize.STRING
      },
      mobileno: {
        type: Sequelize.INT
      },
      role: {
        type: Sequelize.STRING
      },
    createdAt: {
        allowNull: true,
        type: Sequelize.BIGINT
    },

    updatedAt: {
        allowNull: true,
        type: Sequelize.BIGINT
    }
    });
  
    return users;
  };