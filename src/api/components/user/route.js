import { Router } from 'express';
import { createUser, deleteUser, getUser, updateUser } from './controller.js';

const router = Router();

router.post('/createUser', createUser);
router.get('/getUser/:id', getUser);
router.put('/updateUser/:id', updateUser);
router.delete('/deleteUser/:id', deleteUser);

export default router;
