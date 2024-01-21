const sqlfunction = require("../helpers/sqlfunction");
const GlobalFunctions = require("../utils/globalFunctions");

module.exports = class UserFeedsAPI {
  static async insertFeed(req, res) {
    const { content } = req.body;
    const date = GlobalFunctions.getDateTime();
    const insertParams = {
      table: "dd_status",
      values: [`${content}`, 0, `${date}`],
      column: "dd_content,dd_likes,dd_date",
    };
    try {
      const insert = await sqlfunction.insert(insertParams);
      if (insert.responsecode == 1) {
        res.status(202).json({ message: "inserted" });
      }
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
  static async fetchFeed(req, res) {
    try {
      const fetchParams = {
        table: "dd_status",
      };
      const query = await sqlfunction.fetch(fetchParams);

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
  static async updateFeed(req, res) {
    const { feedId } = req.body
    try {
      const updateParams = {
        table:'dd_status',
        condition:`dd_id = ${feedId}`,
        newValue:`dd_likes += 1`
      }
      const query = await sqlfunction.updateFeed(updateParams)
      if(query.responsecode == 1){
        res.status(202).json({data:feedId})
      }
    } catch (error) {
      res.status(400).json({message:error})
    }
  }
};
