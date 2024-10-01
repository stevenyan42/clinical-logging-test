import express from 'express';
import firebaseAuthController from '../controllers/firebase-auth-controller.js';

const router = express.Router();

router.post('/api/register', firebaseAuthController.registerUser);
router.post('/api/login', firebaseAuthController.loginUser);
router.post('/api/logout', firebaseAuthController.logoutUser);
router.post('/api/reset-password', firebaseAuthController.resetPassword);

export default router;