const db = require("ibm_db");

const openDB2Connection = async () => {
  let conn;

  try {
    // This will fail to return under boxednode
    conn = await db.open(
      "Database=somedb;Hostname=localhost;Port=50011;Protocol=TCPIP;Uid=someuser;Pwd=somepw;",
      {
        connectTimeout: 2,
      }
    );

    console.log("Successfully connected");
  } catch (err) {
    console.log("Failed to connect", { message: err.message });
  } finally {
    if (conn) {
      conn.close();
    }
  }
};

(async () => {
  console.log("attempting connection");
  try {
    await openDB2Connection();
  } catch (error) {
    console.log("Connection threw error", { message: error.message });
  }
  console.log("Leaving async function");
})();
