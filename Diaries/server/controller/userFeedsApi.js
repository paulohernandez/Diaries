const sqlfunction = require("../helpers/sqlfunction");
const GlobalFunctions = require("../utils/globalFunctions");
const { getDate } = require("../utils/globalFunctions");

module.exports = class UserFeedsAPI {
  static async insertFeed(req, res) {
    const { content } = req.body;
    const date = GlobalFunctions.getDateTime();
    const insertQuery = {
      table: "dd_status",
      values: [`${content}`, 0, `${date}`],
      column: "dd_content,dd_likes,dd_date",
    };
    try {
      const insert = await sqlfunction.insert(insertQuery);
      if (insert.responsecode == 1) {
        res.status(202).json({ message: "inserted" });
      }
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
  static async fetchFeed(req, res) {
    try {
      const fetchQuery = {
        table: "dd_status",
      };
      const query = await sqlfunction.fetch(fetchQuery);

      if (query.responsecode == 1 && query.data.length > 0) {
        res.status(202).json({ data: query.data });
      } else {
        console.log("here");
        res.status(202).json({ message: "No Data Available" });
      }
    } catch (error) {
      res.status(400).json({ mesage: error });
    }
  }
  static async updateFeed(req, res) {}
};
