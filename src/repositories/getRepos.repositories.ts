import db from "@/database/database.connection";
import { Registry } from "@/protocols/Registry";

async function getAllRepo(): Promise<Registry[]> {
    const result = await db.query(`SELECT * FROM registers;`);
    return result.rows;
};

async function getOneRepo(id: string): Promise<Registry> {
    const result = await db.query(`SELECT * FROM registers WHERE id=$1`, [id]);
    return result.rows[0];
};

export const getRepos = { getAllRepo, getOneRepo };