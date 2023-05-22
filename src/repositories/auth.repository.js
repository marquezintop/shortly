import { db } from "../database/connection.database";

export async function registerUser(name, email, password) {
	return db.query(`INSERT INTO users(name, email, password) VALUES ($1, $2, $3)`, [name, email, password]);
}

export async function verifyEmail (email) {
	return db.query('SELECT * FROM users WHERE email = $1', [email]);
}