import {Router} from "express";
import {getAllUser, getUser, createUser, updateUser, deleteUser } from "../controllers/user-controller.js";

const router = Router();

router.get('/users', getAllUser);
router.get('/user/:id', getUser);
router.post('/user/create', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;