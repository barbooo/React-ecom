
import express from "express"
import { verifytoken } from "../verifytoken";
import { addcom, delcom, getcom } from "../Controlers/comments";

const route = express.Router();

route.post("/",verifytoken, addcom);
route.delete("/:id",verifytoken, delcom);
route.get("/videoid",getcom);



export default route;