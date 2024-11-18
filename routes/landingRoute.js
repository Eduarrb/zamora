import express from 'express';

import { getLanding, postSendContact } from '../controllers/landing/landingController.js';

const router = express.Router();

router.get('/', getLanding);

router.post('/', postSendContact)

export default router;