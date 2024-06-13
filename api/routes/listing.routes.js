import express from 'express';
import { createListing, deleteListing, updateListing ,getListing,getListings} from '../controlers/listing.controler.js';
import { verifyToken } from '../Utls/verifyUser.js';

const router = express.Router();

router.post('/create', verifyToken, createListing);


 router.delete('/delete/:id', verifyToken, deleteListing);
 router.post('/update/:id', verifyToken, updateListing);
 router.get('/get/:id', getListing);
 router.get('/get', getListings);

export default router;
