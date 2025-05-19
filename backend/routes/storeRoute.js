import express from 'express'
import { createStore, getStoreById, getStoreRating, getStores, saveStoreRating } from '../controllers/storeController.js'
const storeRouter = express.Router()
storeRouter.get('/stores', getStores);
storeRouter.post('/add-store', createStore);
storeRouter.get('/store/:id', getStoreById);
storeRouter.post('/store/rating', saveStoreRating);
storeRouter.get('/store/rating/:id', getStoreRating);
export default storeRouter