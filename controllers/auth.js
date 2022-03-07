import jwt from "jsonwebtoken";

export const genToken = async (req, res) => {
  const token = await jwt.sign(process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return res.json({ token });
};

export const handleToken = (req, res) => {
  return res.json({ ok: true });
};
