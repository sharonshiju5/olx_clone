import { Router } from "express";
import * as rh from "./RequestHandler/user.requesthandler.js"
const router=Router();

router.route("/adduser").post(rh.addUser);
router.route("/login").post(rh.loginUser);
export default router;