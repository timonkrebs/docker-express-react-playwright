import express from "express";
import cors from "cors";


const app = express();
const port = 5000;

const corsOptions = {
  origin: 'http://localhost:3000', // Specify your frontend URL
  optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

 app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ text: "Hello, TypeScript Express!" }, null, 3));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
