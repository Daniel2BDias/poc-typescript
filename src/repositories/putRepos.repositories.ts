import db from "@/database/database.connection"

async function putName (id, name) {
    await db.query(`UPDATE registers SET name=$2 WHERE id=$1`, [id, name]);
};

async function putPhone (id, phone) {
    await db.query(`UPDATE registers SET phone=$2 WHERE id=$1`, [id, phone]);
};

async function putEmail (id, email) {
    await db.query(`UPDATE registers SET email=$2 WHERE id=$1`, [id, email]);
};

async function putNameAndPhone (id, name, phone) {
    await db.query(`UPDATE registers SET name=$2, phone=$3 WHERE id=$1`, [id, name, phone]);
};

async function putNameAndEmail (id, name, email) {
    await db.query(`UPDATE registers SET name=$2, email=$3 WHERE id=$1`, [id, name, email]);
};

async function putPhoneAndEmail (id, phone, email) {
    await db.query(`UPDATE registers SET phone=$2, email=$3 WHERE id=$1`, [id, phone, email]);
};

async function putAll (id, name, phone, email) {
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