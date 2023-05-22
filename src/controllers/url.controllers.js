import { nanoid } from 'nanoid';
import { getUrl, getUrlId, insertUrlShort, updateUrl } from '../repositories/url.repository';

export async function postUrlShort (req, res) {
    const { url } = req.body;
    const id = req.locals.id;
    const urlShort = nanoid();

    try {
        const urlItem = await insertUrlShort(url, urlShort, id);
        return res.status(201).send({ id: urlItem.rows[0].id, urlShort });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

export async function getUrlById (req, res) {
    const { id } = req.params;

    if (isNaN(id)) {
        return res.status(404).send('O parâmetro tem que ser um número');
    }
    try {
        const url = await getUrl(id);
        if (url.rowCount === 0) return res.status(404).send("Url não existe");

        return res.status(200).json(url.rows[0]);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

export async function redirectToLinkc (req, res) {
    const { shortUrl } = req.params;

    try {
        const shortUrlId = await getUrlId(shortUrl);

        if (url.rowCount === 0) return res.status(404).send("Url não existe");

        const url = await getUrl(shortUrlId.rows[0].id);

        await updateUrl(url.rows[0].url);
        return res.redirect(rows[0].url);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const deleteById = async (req, res) => {
    const { id } = req.params;
    const userId = res.locals.userId;

    try {
        const { rows } = await UrlRepository.deleteById(id);

        res.status(204).send(rows[0]);
    } catch (error) {
        res.status(500).send(error.message)
    }
};