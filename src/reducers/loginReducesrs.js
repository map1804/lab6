import { GET_TT, LOGIN, LOGOUT } from "../const"

export const loginReducesrs = (state = true, action) =>{
    switch (action.type){
        case LOGIN :
        state = action.TT
        return state
        case LOGOUT :
        state = action.TT
        return state
        default : return state
    }
}
export const TTReducesrs = (state = {}, action) =>{
    switch (action.type){
        case GET_TT:
        let tt = action.tt
        console.log("Da them vao store",tt);
        return {...state,tt}
        default : return state
    }
}