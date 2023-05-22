import db from '../database/database.connetion.js';

export async function insertUrlShort(url, shortUrl, userId){
    return db.query(`INSERT INTO urls(url, "shortUrl", "userId") VALUES ($1, $2, $3)`, [url, shortUrl, userId])
}

export async function getUrl(id){
    return db.query('SELECT id, "shortUrl", url FROM urls WHERE id = $1', [id]);
}

export async function getUrlId(shortUrl){
    return db.query('SELECT id, "shortUrl" FROM urls WHERE "shortUrl" = $1', [shortUrl]);
}

export async function updateUrl(id){
    return db.query('UPDATE urls SET "visitCount" = "visitCount" + 1 WHERE id = $1', [id]);
}

