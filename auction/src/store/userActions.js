export const LOG_IN_USER= 'LOG_IN_USER';
export const LOG_OUT_USER = 'LOG_OUT_USER';

export const logInUser = (credentials) => ({type: LOG_IN_USER, credentials})
export const logOutUser = () => ({type: LOG_OUT_USER})