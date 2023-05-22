import jwt from "jsonwebtoken";
import { getToken } from "../repositories/token.repository";


export async function validateToken(req, res, next) {

    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send("Authorization inválido.");

    const token = authorization?.replace("Bearer ", "")
    if (!token) return res.status(401).send ("Token inválido.")

    const user = jwt.verify(token, process.env.SECRET_KEY);

    try {
        const tokenItem = await getToken(token, user);
        res.locals.userId = user;
        if (tokenItem.rowCount === 0) return res.status(401).send("Token não existe.");

        next()
    }
    catch (error) {
        return res.status(500).send(error.message)
    }
}