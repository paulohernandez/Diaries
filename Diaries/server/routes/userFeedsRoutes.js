const UserFeedsAPI = require("../controller/userFeedsApi");

const router = require("express").Router();

router.post("/", UserFeedsAPI.insertFeed);
router.get("/", UserFeedsAPI.fetchFeed);
router.patch("/", UserFeedsAPI.updateFeed);

module.exports = router;
