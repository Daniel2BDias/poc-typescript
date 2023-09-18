import db from "@/database/database.connection";

export default async function postRepo (name, phone, email): Promise<void>{
    const result = await db.query(`INSERT INTO registers (name, phone, email) VALUES ($1, $2, $3)`, [name, phone, email]);
};