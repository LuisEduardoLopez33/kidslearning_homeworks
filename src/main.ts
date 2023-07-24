import express from "express";
import { Signale } from "signale";

import { homeWorkRoute } from "./homeworks/infraestructure/HomeWorkRouter";


const app = express();

const signale = new Signale();

app.use(express.json());
app.use("/class", homeWorkRoute);


app.listen(3000, () => {
  signale.success("Server online in port 3000");
});