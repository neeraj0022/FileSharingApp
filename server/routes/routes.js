//We are using mvc structure..models, view, controller

import express from 'express';
import { uploadImage, getImage } from '../controller/image-controller.js';
import upload from '../utils/upload.js';

const router= express.Router();


// It takes 3 functions ..endpoint, middleware, callback function
router.post('/upload', upload.single('file'),  uploadImage);
router.get('/file/:fileId', getImage )

export default router;