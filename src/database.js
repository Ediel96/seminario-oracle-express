const oracledb = require('oracledb');
// hr schema password
var password = 'EDDI2020' 
// checkConnection asycn function


async function checkConnection() {
  try {
    connection = await oracledb.getConnection({
        user: "eddi",
        password: password,
        connectString: "(DESCRIPTION =(LOAD_BALANCE = ON)(FAILOVER = ON)(ADDRESS =(PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=XE)(FAILOVER_MODE=(TYPE=SELECT)(METHOD = BASIC))))"
    });
    console.log('connected to database');
  } catch (err) {
    console.error(err.message);
  } finally {
    if (connection) {
      try {
        // Always close connections
        await connection.close(); 
        console.log('close connection success');
      } catch (err) {
        console.error(err.message);
      }
    }
  }
}

checkConnection();