import { fetchAllPosts, fetchPostById } from '../services/postService.js';

export const getAllPosts = async (req, res, next) => {
    try {
        const posts = await fetchAllPosts();
        res.json(posts);
    } catch (error) {
        next(error);
    }
};

export const getPostById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await fetchPostById(id);
        if (!post) {
            return res.status(404).json({ error: 'Publicación no encontrada' });
        }
        res.json(post);
    } catch (error) {
        next(error);
    }
};
