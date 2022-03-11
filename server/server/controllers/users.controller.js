import userService from "./../services/user.service";
import { sendWelcomeEmail } from "./../emails/account";

// Create new user
const save = async (req, res) => {
  const newUser = { ...req.body };

  try {
    const user = await userService.save(newUser);
    sendWelcomeEmail(user.email, user.name);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
};

// user Login
const login = async (req, res) => {
  try {
    const user = await userService.login(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
};

const logout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();

    res.send();
  } catch (e) {
    res.status(500).send();
  }
};

const logoutAll = async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
};

const deleteUser = async (req, res) => {
  try {
      await req.user.remove()
      res.send(req.user)
  } catch (e) {
      res.status(500).send()
  }
}

const updateUser = async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'email', 'password']
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

  if (!isValidOperation) {
      return res.status(400).send({ error: 'Invalid updates!' })
  }

  try {
      updates.forEach((update) => req.user[update] = req.body[update])
      const user = await userService.save(req.user);
      res.send(user)
  } catch (e) {
      res.status(400).send(e)
  }
}

export default {
  save: save,
  login: login,
  logout: logout,
  logoutAll: logoutAll,
  deleteUser: deleteUser,
  updateUser: updateUser
};
