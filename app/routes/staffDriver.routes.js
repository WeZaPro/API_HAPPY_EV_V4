// routes/staffDriver.routes.js

const express = require("express");
const router = express.Router();
const staffDriver = require("../controllers/staffDriver.controller");
const { authJwt } = require("../middlewares");

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  staffDriver.create_staffDriver
);
router.get(
  "/",
  [authJwt.verifyToken, authJwt.isAdmin],
  staffDriver.getAllStaffDrivers
);

module.exports = (app) => {
  app.use("/api/staffDriver", router);
};
