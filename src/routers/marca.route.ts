import express from 'express';
import { getMarca,getMarcaById,createMarca,updateItemMarca, deleteItemMarca} from '../services/marca.controller'

const route = express.Router();


route.get('/',getMarca)
route.get('/:id_item', getMarcaById)
route.post('/', createMarca)
route.put('/:id_item',updateItemMarca)
route.delete('/:id_item', deleteItemMarca)


export default route;