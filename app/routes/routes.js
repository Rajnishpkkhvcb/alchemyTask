module.exports = app => {
    const controller = require("../controllers/ctrl");
  
    var router = require("express").Router();


    router.get("/student/details", controller.getstudentDetails);

    // router.get("/student/course", controller.getCourses);
  
    app.use('/api', router);
};