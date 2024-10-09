//get items supervisor
export const queryGetItemSupervisor = 'SELECT * FROM supervisor;'
//get item supervisor by is
export const queryGetItemSupervisorById = 'SELECT * FROM supervisor WHERE idsupervisor = $1;'
//insert new item supervisor
export const queryGetItemSupervisorByNme = 'SELECT name_supervisor FROM supervisor WHERE name_supervisor = $1;'
export const queryCreateItemSupervisor = 'INSERT INTO supervisor(name_supervisor) VALUES ($1) RETURNING *'
//update name item supervisor
export const queryUpdateItemSupervisor = 'UPDATE supervisor SET name_supervisor= $1 WHERE idsupervisor = $2 RETURNING *'
//delete item supervisor
export const queryDeleteItemSupervisor = 'DELETE FROM supervisor WHERE idsupervisor = $1 RETURNING *' 