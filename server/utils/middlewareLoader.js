import corsMiddleware from '../middlewares/corsMiddleware.js';
import loggerMiddleware from '../middlewares/loggerMiddleware.js';
import express from 'express'; // Import express

const middlewares = [
    express.json(), // Add express.json() here
    loggerMiddleware,
    corsMiddleware,
];

export const loadMiddlewares = (app) => {
    middlewares.forEach((middleware) => {
        app.use(middleware);
    });
};
