import type { VercelRequest, VercelResponse } from "@vercel/node";
import { pool } from "./db";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, phone, city, paymentId, amount, status } = req.body;

  try {
    await pool.query(
      `INSERT INTO users 
      (name, email, phone, city, payment_id, amount, status) 
      VALUES ($1,$2,$3,$4,$5,$6,$7)`,
      [name, email, phone, city, paymentId, amount, status]
    );

    return res.status(200).json({ success: true });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}
