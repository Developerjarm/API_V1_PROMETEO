//obtain items monetizacion
export const queryMonetizacionItem = 'SELECT * FROM monetizacion'
//obtain item by ID
export const queryMonetizacionItemById = 'SELECT * FROM monetizacion WHERE idmonetizacion = $1'
//cretae new item monetizacion if else exist
export const queryCreateItemMonetizacion = 'INSERT INTO monetizacion(name_monetizacion) VALUES ($1) RETURNING *'
export const queryMonetizacionItemByName = 'SELECT * FROM monetizacion WHERE name_monetizacion = $1'
//update name item monetizacion
export const queryUpdateItemmonetizacion = 'UPDATE monetizacion set name_monetizacion = $1 WHERE idmonetizacion = $2 RETURNING *'
//delete item monetizacion
export const queryDeleteItemMonetizacion = 'DELETE FROM monetizacion WHERE idmonetizacion = $1 RETURNING *'

