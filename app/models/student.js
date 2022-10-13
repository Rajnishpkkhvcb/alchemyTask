module.exports = (sequelize, Sequelize) => {
    const student = sequelize.define("student", {
      id: {
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.BIGINT
      },
      studentid: {
        type: Sequelize.BIGINT
      },
      courseid: {
        type: Sequelize.BIGINT
      },
    enrolledon: {
        allowNull: true,
        type: Sequelize.BIGINT
    },
    status:{
        type: Sequelize.BOOLEAN
}});
  
    return student;
  };