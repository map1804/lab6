import { GET_TT, LOGIN, LOGOUT } from "../const"

export const actLogin = ()=>{
    return {type: LOGIN, TT:true}
}
export const actLogout =() =>{
    return {type:LOGOUT, TT: false}
}
export const actGet_TT = (tt) =>{
    return {type: GET_TT, tt}
}