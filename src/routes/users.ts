import  express, {Request, Response} from 'express';
import { CreateUserEmail } from '../controller/users';
const router = express.Router();

/* GET users listing. */
router.post('/', CreateUserEmail);

export default router;
