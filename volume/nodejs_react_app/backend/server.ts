import express from "express";

const app: express.Express = express();
const port = 8000;

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hello, Snodejs!");

});

app.listen(port, () => {
    console.log(`port ${port} starting`)
});
