import corsMiddleware from '../middlewares/corsMiddleware.js';
import loggerMiddleware from '../middlewares/loggerMiddleware.js';
import tokenMiddleware from '../middlewares/tokenMiddleware.js';

const middlewares = [
    loggerMiddleware,
    corsMiddleware,
    tokenMiddleware // Puedes añadir más middlewares aquí en el futuro
];

export const loadMiddlewares = (app) => {
    middlewares.forEach((middleware) => {
        app.use(middleware);
    });
};
