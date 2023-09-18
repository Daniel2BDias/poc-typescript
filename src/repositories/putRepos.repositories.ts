import db from "@/database/database.connection"

async function putName (id: string, name: string) {
    await db.query(`UPDATE registers SET name=$2 WHERE id=$1`, [id, name]);
};

async function putPhone (id: string, phone: string) {
    await db.query(`UPDATE registers SET phone=$2 WHERE id=$1`, [id, phone]);
};

async function putEmail (id: string, email: string) {
    await db.query(`UPDATE registers SET email=$2 WHERE id=$1`, [id, email]);
};

async function putNameAndPhone (id: string, name: string, phone: string) {
    await db.query(`UPDATE registers SET name=$2, phone=$3 WHERE id=$1`, [id, name, phone]);
};

async function putNameAndEmail (id: string, name: string, email: string) {
    await db.query(`UPDATE registers SET name=$2, email=$3 WHERE id=$1`, [id, name, email]);
};

async function putPhoneAndEmail (id: string, phone: string, email: string) {
    await db.query(`UPDATE registers SET phone=$2, email=$3 WHERE id=$1`, [id, phone, email]);
};

async function putAll (id: string, name: string, phone: string, email: string) {
    await db.query(`UPDATE registers SET name=$2, phone=$3, email=$4 WHERE id=$1`, [id, name, phone, email]);
};

export const putRepos = { 
                         putName,
                         putEmail, 
                         putPhone, 
                         putNameAndEmail, 
                         putNameAndPhone, 
                         putPhoneAndEmail,
                         putAll 
                        }