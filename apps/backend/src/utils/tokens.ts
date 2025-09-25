import jwt from "jsonwebtoken";
export function signAccess(payload: any) {
  return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: "15m" });
}

export function signRefresh(payload: any) {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET!, {
    expiresIn: "14d",
  });
}
