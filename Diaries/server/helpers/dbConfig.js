require("dotenv").config();
const sql = require("mssql/msnodesqlv8");
const dbConn = process.env.connectionString;
var config = { driver: "msnodesqlv8", connectionString: dbConn };

const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();

const connectDb = async () => {
  try {
    await poolConnect;
    return poolConnect;
  } catch (err) {
    console.log("Database connection failed!", err);
    return err;
  }
};

module.exports = {
  connectDb,
};
