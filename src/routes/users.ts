import  express, {Request, Response} from 'express';
import { CreateUserEmail, DeleteUserMail, GetAllUserEmail, UpdateUserMail } from '../controller/users';
const router = express.Router();

/* GET users listing. */
router.post('/create', CreateUserEmail);
router.get('/get', GetAllUserEmail);
router.put('/update', UpdateUserMail);
router.delete('/delete', DeleteUserMail);

export default router;
