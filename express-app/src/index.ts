import express from "express";
import cors from "cors";
// import mysql from "mysql2";

const app = express();
const port = 5000;

/*
try {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'db',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'my-secret-pw',
    database: process.env.DB_NAME || 'your-database-name'
  });
  connection.connect()

  connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) {
      console.error(err)
    } else {
      console.log('The solution is: ', (rows as any)[0].solution)
    }
  })

  connection.end()
} catch (e) {
  console.error(e)
}*/


const corsOptions = {
  origin: 'http://localhost:3000', // Specify your frontend URL
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  // https://node.testcontainers.org/modules/mysql/
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ text: "Hello, TypeScript Express!" }, null, 3));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

