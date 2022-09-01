import {EDIT_LOGIN , EDIT_NOMBRE} from "./type";





export const editLogin = (login) => ({
    type:   EDIT_LOGIN,
    payload: login
});


export const editNombre = (nombre) => ({
    type:   EDIT_NOMBRE,
    payload: nombre
});
