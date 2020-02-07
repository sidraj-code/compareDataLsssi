const oracledb = require('oracledb');

const mypw = "hO3kKrdQDsLuosRPSTekGNKMJ" // set mypw to the hr schema password

async function run() {
  try {
    var connection = await oracledb.getConnection({
      user          : "SDD_APP",
      password      : mypw,
      connectString : "@ldap://oid:inf.fedex.com:3060/SDD_L1"
    });

    var result = await connection.execute(`SELECT last_name FROM employees`);
    console.log("Result is:", result);

  } catch (err) {
    console.error(err.message);
  } finally {
    if (connection) {
      try {
        await connection.close();   // Always close connections
      } catch (err) {
        console.error(err.message);
      }
    }
  }
}

run();