module.exports = (sequelize, Sequelize) => {
    const student = sequelize.define("student", {
      id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.BIGINT
      },

      name:{
        type: Sequelize.STRING
      },
      noofavailableseats:{
        type: Sequelize.INT
      }

});
  
    return student;
  };