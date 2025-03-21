import cors from 'cors';

const corsMiddleware = cors({
    origin: 'http://localhost:5173', // Puedes modificar para aceptar múltiples orígenes
    allowedHeaders: ['Authorization', 'Content-Type']
});

export default corsMiddleware;
