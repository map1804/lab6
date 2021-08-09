// src/reducers/indexReducer.js
import {combineReducers} from 'redux' 
import sachReducer from './sachReducer';
import loaisachReducer from './loaisachReducer';
import { loginReducesrs, TTReducesrs } from './loginReducesrs';
import {tienReducer} from './tienReducer'
export default combineReducers({      
    loaisach: loaisachReducer,  
    sach: sachReducer,
    TrangThai : loginReducesrs,
    Thongtin: TTReducesrs,
    doitien: tienReducer,
})
