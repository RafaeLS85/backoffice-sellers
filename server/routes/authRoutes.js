import express from 'express';
import { generateToken } from '../utils/jwt.js';

const router = express.Router();

// Usuario de prueba para desarrollo
const devUser = {
    username: 'admin',
    password: 'admin1234'
};

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === devUser.username && password === devUser.password) {
        const token = generateToken({ username });
        return res.json({ token }); // Devuelve el token
    }

    return res.status(401).json({ error: 'Credenciales inválidas' });
});

export default router;
