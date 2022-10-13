const db = require("../models");

const users = db.users;
const student = db.student;
const courses = db.courses;
const studentDetails = db.studentDetails;

const Op = db.Sequelize.Op;


exports.getstudentDetails = (req, res) => {
    const title = req.query.title;
  
    studentDetails.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };