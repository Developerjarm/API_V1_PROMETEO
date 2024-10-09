//get item gestion mail
export const queryGetItemsGestionMail = 'SELECT * FROM gestionmail '
//get item gestion mail by id
export const queryGetItemsGestionMailById = 'SELECT * FROM gestionmail WHERE idgestionmail = $1 '
//create new item if nut exist
export const queryGetItemsGestionMailByNme = 'SELECT * FROM gestionmail WHERE name_gestionmail = $1;'
export const queryCreateItemGestionMail = 'INSERT INTO gestionmail(name_gestionmail)VALUES ($1) RETURNING *'
//update name item gestionmail
export const queryUpdateItemGestionMail = 'UPDATE gestionmail SET  name_gestionmail= $1 WHERE idgestionmail = $2 RETURNING *'
//delete item gestionmail
export const queryDeleteItemGestionMail = 'DELETE FROM gestionmail WHERE idgestionmail = $1 RETURNING *'
