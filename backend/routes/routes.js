const express = require("express");
const router = express.Router();
const ContactModel = require("../models/ContactModel");
const AppointmentModel = require("../models/AppointmentModel");

router.post("/contact", (req, res) => {
  const Contact = new ContactModel({
    name: req.body.name,
    email: req.body.email,
    text: req.body.text,
  });
  Contact
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});
router.post("/appointment", (req, res) => {
  const Appointment = new AppointmentModel({
    name: req.body.name,
    email: req.body.email,
    dob: req.body.dob,
    schedule: req.body.schedule,
    problem: req.body.problem,
  });
  console.log(Appointment,'app')
  Appointment
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });
});



module.exports = router;
