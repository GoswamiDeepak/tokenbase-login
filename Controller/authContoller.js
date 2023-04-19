const Auth = require("../Modals/auth");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')

exports.register = async (req, res) => {
  const { email, password } = req.body;

  const existAuth = await Auth.findOne({ email: email });
  if (existAuth) {
    return res.status(404).json({ error: "Already registered" });
  }

  try {
    const hasPassword = await bcrypt.hash(password, 10);
    const payload = {
      email: email,
      password: hasPassword,
    };
    const user = new Auth(payload);
    const userData = await user.save();
    res.status(201).json({
      message: "Registration successful",
      data: userData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const existAuth = await Auth.findOne({ email: email });
    console.log(existAuth);
    if (!existAuth) {
      return res.status(404).json({ error: "User not found" });
    }
    const isPasswordMatch = await bcrypt.compare(password, existAuth.password);
    if (!isPasswordMatch) {
      return res.status(404).json({ error: "Invalid password" });
    }

    const token = jwt.sign({ email: existAuth.email }, process.env.SECRET_KEY, {
      expiresIn: "15m",
    });

    try {
        res.status(200).json({
          message: "Login successful",
          token: token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" });
    }

}

