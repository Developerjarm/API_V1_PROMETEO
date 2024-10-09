export interface InformeCreate {
    id_agent: string;
    id_gestionmail: string;
    id_typecause: string;
    id_client: string;
    id_marca: string;
    id_monetizacion: string;
    id_supervisor: number;
    ticket_mesa: number;
    ticket_secon_level: number;
    pos_tienda: string;
    value_monetizacion: number;
}
export interface CreateItems {
    name_item: string;
}
export interface ReqId {
    id_item: string;
}

export interface Login {
    username: string;
    password: string;
}