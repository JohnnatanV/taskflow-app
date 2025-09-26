import express from "express";
import bcrypt from "bcrypt";
import { prisma } from "../prismaClient";
import { signAccess, signRefresh } from "../utils/tokens";
import crypto from "crypto";

const router = express.Router();

// register
router.post("/register", async (req, res) => {
  const { email, password, name } = req.body;
  const passwordHash = await bcrypt.hash(password, 12);
  const user = await prisma.user.create({
    data: { email, name, passwordHash },
  });

  // send verification email (generate token + URL)
  res.status(201).json({ id: user.id, email: user.email });
});

// login
router.post("/login", async (req, res) => {
  const invalidCreds = res.status(401).json({ message: "Invalid credentials" });
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return invalidCreds;
  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return invalidCreds;

  const access = signAccess({ sub: user.id });
  const refresh = crypto.randomBytes(64).toString("hex");
  const hashed = await bcrypt.hash(refresh, 10);
  const session = await prisma.session.create({
    data: {
      userId: user.id,
      refreshToken: hashed,
      expiresAt: new Date(Date.now() + 14 * 24 * 3600 * 1000),
    },
  });

  res.cookie("refresh_token", refresh, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/api/auth/refresh",
  });
  res.json({ access });
});

export default router;
