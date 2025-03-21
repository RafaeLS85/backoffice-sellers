const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Continúa al siguiente middleware o ruta
};

export default loggerMiddleware;
