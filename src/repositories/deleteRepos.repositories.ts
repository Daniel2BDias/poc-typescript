import db from "@/database/database.connection";

export default async function deleteRepo (id: string) {
    await db.query(`DELETE FROM registers WHERE id=$1`, [id]);
};