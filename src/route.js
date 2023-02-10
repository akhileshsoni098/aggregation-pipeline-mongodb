const express = require("express");
const router = express.Router();
const UserController = require("./userController");
router.get("/", UserController.users);
router.get("/one_user", UserController.one_user);
router.post("/store", UserController.store);
router.put("/update", UserController.update);
router.delete("/delete", UserController.destroy);

// aggregation route

router.get("/getUserData", UserController.getUserData);

module.exports = router;
