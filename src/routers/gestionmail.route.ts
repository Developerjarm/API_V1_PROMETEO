import express from 'express'
import {getItemGestionMail,getItemGestionMailById,createItemGestionMail,updateItemGestionMail,deleteItemGestionMail} from '../services/gestionmail.controller'

const route = express.Router()

route.get('/',getItemGestionMail)
route.get('/:id_item',getItemGestionMailById)
route.post('/',createItemGestionMail)
route.put('/:id_item', updateItemGestionMail)
route.delete('/:id_item',deleteItemGestionMail)

export default route