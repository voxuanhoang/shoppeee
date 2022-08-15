export const type_log= 'log';
export const type_error= 'error';
export const type_warn= 'warn';

function logger(log, type = type_log){
  console[type](log);
}
export default logger