import express from 'express';
import axios from 'axios';

const router = express.Router();
const API_URL = 'https://jsonplaceholder.typicode.com/users';

router.get('/', async (req, res) => {
    try {
        const response = await axios.get(API_URL);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
});

export default router;
