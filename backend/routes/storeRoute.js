import express from 'express'
import { createStore, getStoreById, getStoreRating, getStores, saveStoreRating } from '../controllers/storeController.js'
import { verifyToken } from '../middlewares/verifyToken.js';
const storeRouter = express.Router()
storeRouter.get('/stores', verifyToken, getStores);
storeRouter.post('/add-store', verifyToken, createStore);
storeRouter.get('/store/:id', verifyToken, getStoreById);
storeRouter.post('/store/rating', verifyToken,saveStoreRating);
storeRouter.get('/store_rating',verifyToken, getStoreRating)
export default storeRouter