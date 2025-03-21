import { verifyToken } from '../utils/jwt.js';

const DEV_TOKEN = 'development-token'; // Token estático para pruebas

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log('Encabezado Authorization:', authHeader); // Agrega un log para depuración

    if (!authHeader) {
        return res.status(401).json({ error: 'Token no proporcionado' });
    }

    const token = authHeader.split(' ')[1]; // Extraer el token después de "Bearer"

    if (!token) {
        return res.status(401).json({ error: 'Token no proporcionado' });
    }

    try {
        const decoded = verifyToken(token);
        req.user = decoded; // Agregar los datos decodificados del usuario al request
        next();
    } catch (err) {
        res.status(403).json({ error: 'Token inválido o expirado' });
    }
};

export default authMiddleware;
