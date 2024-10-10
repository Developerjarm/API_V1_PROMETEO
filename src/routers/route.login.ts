import  express  from 'express';
import {login} from '../services/login.controller'

const route = express.Router()

route.post('/',login)


export default route