import  express, { Router }  from "express";
import { verifytoken } from "../verifytoken";
import { addvid, deletvid, updvid , deletvid, getvid, subvid, random, trend, addview, getbytags, search} from "../Controlers/videos";


const router = express.Router();

// create a video 

router.post("/",verifytoken,addvid);
//update video 
router.put("/:id",verifytoken,updvid);
router.delete("/:id",verifytoken,deletvid);
router.get("/find/:id",verifytoken,getvid);
router.put("/views/:id",addview);
router.get("/tendance",trend);
router.get("/random",random)
router.get("/sub/:id",verifytoken, subvid);
router.get("/tags",getbytags);
router.get("/search",search);

export default router;