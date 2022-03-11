import express from "express";
import userController from "./../controllers/users.controller";
import auth from "./../middleware/auth";

const router = express.Router();

/* create user */
router.route("/users").post(userController.save);

/* user login */
router.route("/users/login").post(userController.login);

/* user logout */
router.post("/users/logout", auth, userController.logout);

/* user details */
router.get("/users/me", auth, async (req, res) => {
  res.send(req.user);
});

/* logout from all sessions */
router.post("/users/logoutAll", auth, userController.logoutAll);

/* delete user */
router.delete('/users/me', auth, userController.deleteUser);

/* update user */
router.patch('/users/me', auth, userController.updateUser)

export default router;
