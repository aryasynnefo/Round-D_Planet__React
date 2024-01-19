import { Router } from "express";
import * as controller from "./controller.js";
import auth from "./middleware/auth.js";

const router = Router();
router.route("/adminreg").post(controller.adminRegister);
router.route("/adminlogin").post(controller.adminLogin);
router.route("/addpkg").post(controller.addPackage);
router.route("/display").get(controller.displayPackage);
router.route("/userreg").post(controller.userRegister);
router.route("/userlogin").post(controller.Userlogin);
router.route("/home").get(auth, controller.home);
router.route("/pkgsub/:id").get(auth,controller.getPackage);
router.route("/detail").post(controller.pkgDetails);
router.route("/displaydetail").get(controller.displayDetails);





export default router;