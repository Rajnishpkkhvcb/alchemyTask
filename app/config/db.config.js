module.exports = {
    HOST: "localhost",
    USER: "rajnish",
    PASSWORD: "password",
    DB: "studentdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };