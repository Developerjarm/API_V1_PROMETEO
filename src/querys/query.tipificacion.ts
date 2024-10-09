//get item tipificacion
export const queryGetItemstypeCause = 'SELECT * FROM tipificacion;'
//get item tipificaion by id
export const queryGetItemstypeCauseById = 'SELECT * FROM tipificacion WHERE idtypecause = $1;'
//create new item if nut exist
export const queryGetItemstypeCauseByNme = 'SELECT * FROM tipificacion WHERE name_typecause = $1;'
export const queryCreateItemTypecause = 'INSERT INTO tipificacion(name_typecause) VALUES ($1) RETURNING *'
//update name item typecause
export const queryUpdateItemTypecause = 'UPDATE tipificacion SET name_typecause= $1 WHERE idtypecause = $2 RETURNING *'
//delete item typecause
export const queryDeleteItemTypecause = 'DELETE FROM tipificacion WHERE idtypecause = $1  RETURNING *'
