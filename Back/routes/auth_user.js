import express from 'express'
import { auth, signin } from '../Controlers/auth_user.js';
const router = express.Router();

// Createuser
// router.post("/signup",()=>{console.log('l9laaawi')});
router.post("/signup",auth);
//Signin
router.post("/signin",signin)

//authentificationuser with google also 
router.post("/google",)
export default router;


