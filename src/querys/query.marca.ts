//get item marca
export const queryGetMarcaItem = 'SELECT * FROM marca';
//get item marca by id
export const queryGetMarcaItemById = 'SELECT * FROM marca WHERE idmarca = $1 ';
//create item marca
export const queryGetMarcaItemByName = 'SELECT * FROM marca WHERE name_marca = $1;';
export const queryCreateMarcaItem = 'INSERT INTO marca(name_marca) VALUES ($1) RETURNING *;';
//update name item marca
export const queryUpdateMarcaItem = 'UPDATE marca SET  name_marca= $1 WHERE idmarca = $2 RETURNING *';
//delete item marca
export const queryDeleteMarcaItem = 'DELETE FROM marca WHERE idmarca = $1 RETURNING *';