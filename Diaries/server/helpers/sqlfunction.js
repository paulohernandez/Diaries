const { connectDb } = require("./dbConfig");

module.exports = class sqlfunction {
  static async insert(parameters) {
    const DB = await connectDb();
    const values = parameters.values;
    const newval = values.map((v) => `'${v}'`).join(",");
    try {
      await DB.request().query(
        `INSERT into ${parameters.table} (${parameters.column}) values (${newval})`,
      );
      return { responsecode: 1 };
    } catch (error) {
      return { responsecode: 0 };
    }
  }
};
