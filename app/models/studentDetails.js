module.exports = (sequelize, Sequelize) => {
    const studentDetails = sequelize.define("studentDetails", {
      id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.BIGINT
      },
      fullname: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      email:{
        type: Sequelize.STRING
      },
      mobileno: {
        type: Sequelize.INTEGER
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
  
    return studentDetails;
  };