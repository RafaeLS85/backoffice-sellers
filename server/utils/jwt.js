import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key'; // Cambia esto a una clave segura

export const generateToken = (payload) => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }); // Expira en 1 hora
};

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (err) {
        throw new Error('Token inválido');
    }
};
