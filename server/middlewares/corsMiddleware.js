import cors from 'cors';

const corsMiddleware = cors({
    origin: 'http://localhost:5173', // Puedes modificar para aceptar múltiples orígenes
});

export default corsMiddleware;
