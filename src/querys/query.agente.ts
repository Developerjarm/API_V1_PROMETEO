//get item agente
export const queryGetAgenteItem = 'SELECT * FROM agent'
//get item agente by id
export const queryGetAgenteItemById = 'SELECT * FROM agent WHERE idagent = $1'
//create item agente
export const queryGetAgenteItemByName = 'SELECT * FROM agent WHERE name_agente = $1'
export const queryCreateAgenteItem = 'INSERT INTO agent(name_agente)VALUES ($1) RETURNING *'
//update name item agente
export const queryUpdateAgenteItem = 'UPDATE agent SET  name_agente= $1 WHERE idagent = $2'
//delete item agente
export const queryDeleteAgenteItem = 'DELETE FROM agent WHERE idagent = $1 RETURNING *'
