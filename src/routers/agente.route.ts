import express from 'express'
import {getAgent, getAgentById,createAgent,deleteAgent, updateAgent} from '../services/agent.controller'

const route = express.Router()

route.get('/',getAgent)
route.get('/:id_item', getAgentById)
route.post('/',createAgent)
route.put('/:id_item',updateAgent)
route.delete('/:id_item',deleteAgent)

export default route