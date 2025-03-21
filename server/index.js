import 'dotenv/config';

import express from 'express';
import { loadMiddlewares } from './utils/middlewareLoader.js';
import postRoutes from './routes/postRoutes.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

// Cargar todos los middlewares dinámicamente
loadMiddlewares(app);

// Registrar rutas
app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

// Middleware para manejo de errores (siempre después de las rutas)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Ocurrió un error en el servidor' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
