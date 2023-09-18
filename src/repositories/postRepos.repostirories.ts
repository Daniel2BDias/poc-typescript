import db from "@/database/database.connection";
import { QueryResult } from "pg";

export default async function postRepo (name: string, phone: string, email: string): Promise<void>{
    const result: QueryResult = await db.query(`INSERT INTO registers (name, phone, email) VALUES ($1, $2, $3)`, [name, phone, email]);
};