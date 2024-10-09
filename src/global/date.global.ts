import { DateTime } from 'luxon';

// Objeto de configuración global
const config = {
  colombiaDate: '',
};

// Función para actualizar la fecha en la zona horaria de Colombia
export const updateColombiaDate = () => {
  const colombiaTimezone = 'America/Bogota';
  const now = DateTime.now().setZone(colombiaTimezone);
  config.colombiaDate = now.toFormat('yyyy-MM-dd');
};

// Función para obtener la fecha actual
export const getColombiaDate = () => config.colombiaDate;


