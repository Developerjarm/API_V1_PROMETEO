import express from 'express'
import agentRoute from '../routers/agente.route';
import gestionMail from '../routers/gestionmail.route';
import marca from '../routers/marca.route';
import monetizacion from '../routers/monetizacion.route'
import supervisor from '../routers/supervisor.route'
import tipificacion from '../routers/tipificacion.route'
import informe from '../routers/informe.route'
import login from '../routers/route.login'
import user from './user.route'
import{authenticate} from '../middleware/middleware'

const route = express.Router()
//agentes
route.use('/agent',authenticate,agentRoute)
//gestion mail
route.use('/gestionmail',authenticate,gestionMail)
//marca
route.use('/marca',authenticate,marca)
//monetizacion
route.use('/monetizacion',authenticate,monetizacion)
//supervisor
route.use('/supervisor',authenticate, supervisor)
//tipificacion
route.use('/typecause',authenticate,tipificacion)
//informeS
route.use('/informe',authenticate,informe)
//login
route.use('/login',login,authenticate)
//create user
route.use('/user',authenticate,user)



export default route;
