import express from 'express'
import {
    getItemsSupervisor,
    getItemsSupervisorById,
    createItemSupervisorById,
    updateItemSupervisorById,
    deleteItemSupervisorById
} from '../services/supervisor.controller'

const route = express.Router()

route.get('/',getItemsSupervisor)
route.get('/:id_item',getItemsSupervisorById)
route.post('/',createItemSupervisorById)
route.put('/:id_item',updateItemSupervisorById)
route.delete('/:id_item', deleteItemSupervisorById)


export default route;