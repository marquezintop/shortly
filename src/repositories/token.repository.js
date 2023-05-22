import db from '../database/database.connetion.js';
export async function getToken(token, user){
    return db.query(`SELECT * FROM tokens WHERE token = $1 AND "userId" = $2`,[token, user]);
    }

export async function insertToken(token, userId) {
        return db.query(`INSERT INTO tokens(token, "userId") VALUES ($1, $2)`, [token, userId]);
    }