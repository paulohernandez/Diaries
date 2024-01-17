const UserFeedsAPI = require("../controller/userFeedsApi");

const router = require("express").Router();

router.post("/", UserFeedsAPI.insertFeed);

module.exports = router;
