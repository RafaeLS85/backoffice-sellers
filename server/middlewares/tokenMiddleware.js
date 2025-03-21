const tokenMiddleware = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ error: 'Token no proporcionado' });
    }
    // Aquí podrías verificar el token (JWT, OAuth, etc.)
    console.log('Token recibido:', token);
    next();
};

export default tokenMiddleware;
