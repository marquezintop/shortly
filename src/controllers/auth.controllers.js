import { registerUser, verifyEmail } from "../repositories/auth.repository.js";

export const signUp = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    const hash = bcrypt.hashSync(password, 10);
    if(password!==confirmPassword) return res.sendStatus(422)

    try {
        const isEmail = await verifyEmail(email);
        if (isEmail.rowCount !== 0) return res.status(409).send("E-mail já está em uso!");

        await registerUser({ name, email, password: hash });
        res.sendStatus(200);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

export const signIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = verifyEmail(email);
        if (user.rowCount !== 1) return res.status(409).send("E-mail não está cadastrado!");

        const encryptedPassword = user.rows[0].password;
        const isValidPassword = bcrypt.compareSync(password, encryptedPassword);

        if (!isValidPassword) {
            return res.status(401).send("Senha incorreta! Tente novamente.");
        }

        const token = jwt.sign(user.rows[0].id, process.env.SECRET_KEY);

        res.status(200).send({ token: token });
    } catch (error) {
        res.status(500).send(error.message);
    }
};