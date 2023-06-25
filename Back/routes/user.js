import express from 'express'
import { Delete, dislike, getuser, like, subscribe, unsubscribe, update } from '../Controlers/users.js';
import { verifytoken } from '../verifytoken.js';

const router = express.Router();

//update users
router.put("/:id",verifytoken, update)
// delete users
router.delete("/:id",verifytoken ,Delete)
//get users
router.get("/find/:id",getuser)
//subcribe a user
router.put("/sub/:id",verifytoken, subscribe)
//unsucsribeuser 
router.put("/unsub/:id",verifytoken, unsubscribe)
//like a video
router.put("/like/:videoId",verifytoken, like)
//dislike a video
router.put("/dislik/:videoId",verifytoken, dislike);
export default router;