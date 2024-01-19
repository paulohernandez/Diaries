const { connectDb } = require("./dbConfig");

module.exports = class sqlfunction {
  static async insert(parameters) {
    const DB = await connectDb();
    const values = parameters.values;
    const newval = values.map((v) => `'${v}'`).join(",");
    try {
      const query = await DB.request().query(
        `INSERT into ${parameters.table} (${parameters.column}) values (${newval})`,
      );
      return { responsecode: 1 };
    } catch (error) {
      return { responsecode: 0 };
    } finally {
      DB.release();
    }
  }
  static async fetch(parameters) {
    const DB = await connectDb();
    try {
      const query = await DB.request().query(
        `select * from ${parameters.table} order by dd_id desc`,
      );
      return { responsecode: 1, data: query.recordset };
    } catch (error) {
      return { responsecode: 0 };
    } finally {
      DB.release();
    }
  }
};
