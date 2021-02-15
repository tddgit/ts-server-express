import express, { Request, Response } from "express";
import { router } from "./routes/loginRoutes";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.get("/", (req: Request, res: Response) => {
  res.send(`
    <div>
        <h1>
            Hi there!
        </h1>
    </div>
    `);
});

app.listen(3000, () => console.log("listening on 3000"));
