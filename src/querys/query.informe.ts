//-----------------------------------------------CRUD INFORME REGISTER LOG ------------------------------------------------------//
//CREATE REGISTER INFORME LOG
export const queryCreateInformeResgister = `
INSERT INTO public.informe(
	 id_agent,
	 id_gestionmail, 
	 id_typecause,
	 id_client,
	 pos_tienda, 
	 id_marca, 
	 value_monetizacion, 
	 id_monetizacion, 
	 id_supervisor,
	 ticket_mesa,
	 ticket_secon_level)
	VALUES (
	$1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8,
    $9,
    $10,
    $11) 
	RETURNING *;
`;

//UPDATE INFORME REGISTER BY ID
export const queryUpdateRegisterInforme = `
UPDATE informe
SET 
    id_agent = $1,
    id_gestionmail = $2,
    id_typecause = $3,
    id_client = $4,
    pos_tienda = $5,
    id_marca = $6,
    value_monetizacion = $7,
    id_monetizacion = $8,
    id_supervisor = $9,
    ticket_mesa = $10,
    ticket_secon_level = $11
WHERE id_register = $12
RETURNING *;
`;

//DELETE INFORME REGISTER BY ID
export const queryDeleteRegisterInforme = `
DELETE FROM informe WHERE id_register = $1 RETURNING *;
`


//-----------------------------------------------QUERY SQL RESGISTER LOG ------------------------------------------------------//
//GET INFORME SIN FILTRO
export const queryInforme = `
SELECT informe.id_register,agent.name_agente,gestionmail.name_gestionmail,tipificacion.name_typecause,
informe.id_client,informe.pos_tienda,marca.name_marca,informe.value_monetizacion,monetizacion.name_monetizacion,
supervisor.name_supervisor,informe.ticket_mesa,informe.ticket_secon_level,informe.date_register
FROM informe
INNER JOIN agent ON agent.idagent = informe.id_agent
INNER JOIN gestionmail ON gestionmail.idgestionmail = informe.id_gestionmail
INNER JOIN tipificacion ON tipificacion.idtypecause = informe.id_typecause
INNER JOIN marca ON marca.idmarca = informe.id_marca
INNER JOIN monetizacion ON monetizacion.idmonetizacion = informe.id_monetizacion
INNER JOIN supervisor ON supervisor.idsupervisor = informe.id_supervisor
ORDER BY informe.date_register DESC
`;
//GET INFORME FILTRO POR FECHA INICIAL Y FINAL
export const queryInformeByDate = `
SELECT informe.id_register,agent.name_agente,gestionmail.name_gestionmail,tipificacion.name_typecause,
informe.id_client,informe.pos_tienda,marca.name_marca,informe.value_monetizacion,monetizacion.name_monetizacion,
supervisor.name_supervisor,informe.ticket_mesa,informe.ticket_secon_level,informe.date_register
FROM informe
INNER JOIN agent ON agent.idagent = informe.id_agent
INNER JOIN gestionmail ON gestionmail.idgestionmail = informe.id_gestionmail
INNER JOIN tipificacion ON tipificacion.idtypecause = informe.id_typecause
INNER JOIN marca ON marca.idmarca = informe.id_marca
INNER JOIN monetizacion ON monetizacion.idmonetizacion = informe.id_monetizacion
INNER JOIN supervisor ON supervisor.idsupervisor = informe.id_supervisor
WHERE informe.date_register BETWEEN $1 AND $2
ORDER BY informe.date_register
`;
//GET INFORME AGENT AND DATE
export const queryInformeByAgentAndDate = `
SELECT informe.id_register,agent.name_agente,gestionmail.name_gestionmail,tipificacion.name_typecause,
informe.id_client,informe.pos_tienda,marca.name_marca,informe.value_monetizacion,monetizacion.name_monetizacion,
supervisor.name_supervisor,informe.ticket_mesa,informe.ticket_secon_level,informe.date_register
FROM informe
INNER JOIN agent ON agent.idagent = informe.id_agent
INNER JOIN gestionmail ON gestionmail.idgestionmail = informe.id_gestionmail
INNER JOIN tipificacion ON tipificacion.idtypecause = informe.id_typecause
INNER JOIN marca ON marca.idmarca = informe.id_marca
INNER JOIN monetizacion ON monetizacion.idmonetizacion = informe.id_monetizacion
INNER JOIN supervisor ON supervisor.idsupervisor = informe.id_supervisor
WHERE agent.name_agente = $1 AND informe.date_register = $2
ORDER BY informe.date_register
`;
//GET INFORME BY ID RESGISTER
export const queryGetInformeById = `
SELECT informe.id_register,agent.name_agente,gestionmail.name_gestionmail,tipificacion.name_typecause,
informe.id_client,informe.pos_tienda,marca.name_marca,informe.value_monetizacion,monetizacion.name_monetizacion,
supervisor.name_supervisor,informe.ticket_mesa,informe.ticket_secon_level,informe.date_register
FROM informe
INNER JOIN agent ON agent.idagent = informe.id_agent
INNER JOIN gestionmail ON gestionmail.idgestionmail = informe.id_gestionmail
INNER JOIN tipificacion ON tipificacion.idtypecause = informe.id_typecause
INNER JOIN marca ON marca.idmarca = informe.id_marca
INNER JOIN monetizacion ON monetizacion.idmonetizacion = informe.id_monetizacion
INNER JOIN supervisor ON supervisor.idsupervisor = informe.id_supervisor
WHERE id_register = $1
ORDER BY informe.date_register DESC
`;

//filter data 10 items mas utilizados general
export const queryInformeByFilterteenItems = `
SELECT 
    (tipificacion.name_typecause) AS typecause,
    COUNT(*) AS total_registros
FROM informe
INNER JOIN agent ON agent.idagent = informe.id_agent
INNER JOIN gestionmail ON gestionmail.idgestionmail = informe.id_gestionmail
INNER JOIN tipificacion ON tipificacion.idtypecause = informe.id_typecause
INNER JOIN marca ON marca.idmarca = informe.id_marca
INNER JOIN monetizacion ON monetizacion.idmonetizacion = informe.id_monetizacion
INNER JOIN supervisor ON supervisor.idsupervisor = informe.id_supervisor
GROUP BY tipificacion.name_typecause
ORDER BY total_registros DESC
LIMIT 10;
`
//filter data 10 items mas utilizados SAC
export const queryInformeByFilterteenItemsSac = `
SELECT 
    (tipificacion.name_typecause) AS typecause,
    COUNT(*) AS total_registros
FROM informe
INNER JOIN agent ON agent.idagent = informe.id_agent
INNER JOIN gestionmail ON gestionmail.idgestionmail = informe.id_gestionmail
INNER JOIN tipificacion ON tipificacion.idtypecause = informe.id_typecause
INNER JOIN marca ON marca.idmarca = informe.id_marca
INNER JOIN monetizacion ON monetizacion.idmonetizacion = informe.id_monetizacion
INNER JOIN supervisor ON supervisor.idsupervisor = informe.id_supervisor
WHERE tipificacion.name_typecause NOT LIKE '%SITAR%'
GROUP BY tipificacion.name_typecause
ORDER BY total_registros DESC
LIMIT 10;
`
//filter data 10 items mas utilizados SITAR
export const queryInformeByFilterteenItemsSitar = `
SELECT 
    (tipificacion.name_typecause) AS typecause,
    COUNT(*) AS total_registros
FROM informe
INNER JOIN agent ON agent.idagent = informe.id_agent
INNER JOIN gestionmail ON gestionmail.idgestionmail = informe.id_gestionmail
INNER JOIN tipificacion ON tipificacion.idtypecause = informe.id_typecause
INNER JOIN marca ON marca.idmarca = informe.id_marca
INNER JOIN monetizacion ON monetizacion.idmonetizacion = informe.id_monetizacion
INNER JOIN supervisor ON supervisor.idsupervisor = informe.id_supervisor
WHERE tipificacion.name_typecause LIKE '%SITAR%'
GROUP BY tipificacion.name_typecause
ORDER BY total_registros DESC
LIMIT 10;
`

//FILTER DATA 10 ITEMS MAS UTILIZADOS SITAR AND VALUE
export const queryInformeByFilterteenItemsSitarAndValue = `
SELECT 
    tipificacion.name_typecause AS typecause,
    SUM(CASE 
        WHEN informe.value_monetizacion IS NOT NULL THEN informe.value_monetizacion 
        ELSE 0 
    END) AS total_monetizacion,
    COUNT(*) AS total_registros
FROM informe
INNER JOIN agent ON agent.idagent = informe.id_agent
INNER JOIN gestionmail ON gestionmail.idgestionmail = informe.id_gestionmail
INNER JOIN tipificacion ON tipificacion.idtypecause = informe.id_typecause
INNER JOIN marca ON marca.idmarca = informe.id_marca
INNER JOIN monetizacion ON monetizacion.idmonetizacion = informe.id_monetizacion
INNER JOIN supervisor ON supervisor.idsupervisor = informe.id_supervisor
WHERE tipificacion.name_typecause LIKE '%SITAR%'
GROUP BY tipificacion.name_typecause
ORDER BY total_registros DESC
LIMIT 10;
`

//FILTER DATA 10 ITEMS MAS UTILIZADOS sac y value
export const queryInformeByFilterteenItemsSacAndValue = `
SELECT 
    tipificacion.name_typecause AS typecause,
    SUM(CASE 
        WHEN informe.value_monetizacion IS NOT NULL THEN informe.value_monetizacion 
        ELSE 0 
    END) AS total_monetizacion,
    COUNT(*) AS total_registros
FROM informe
INNER JOIN agent ON agent.idagent = informe.id_agent
INNER JOIN gestionmail ON gestionmail.idgestionmail = informe.id_gestionmail
INNER JOIN tipificacion ON tipificacion.idtypecause = informe.id_typecause
INNER JOIN marca ON marca.idmarca = informe.id_marca
INNER JOIN monetizacion ON monetizacion.idmonetizacion = informe.id_monetizacion
INNER JOIN supervisor ON supervisor.idsupervisor = informe.id_supervisor
WHERE tipificacion.name_typecause NOT LIKE '%SITAR%'
GROUP BY tipificacion.name_typecause
ORDER BY total_registros DESC
LIMIT 10;
`

