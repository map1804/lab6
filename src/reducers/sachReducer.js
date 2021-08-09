  // reducers/sachReducers.js
  import { actXoaSach } from "../action/actSach";
import {THEM_SACH,CHINH_SACH,XOA_SACH,DUA_SACH_VAO_STORE} from "../const/index";
  const sachReducer = (state = [], action) => {
  switch (action.type) {    
    case DUA_SACH_VAO_STORE:
      //code đưa sách vào store
      action.arrSach.forEach( s => {
        state= [...state, 
          {id: s.id, tensach: s.tensach, gia: s.gia, urlHinh:s.urlHinh,idLoai: s.idLoai}
        ];
        });      
        console.log("Đã đưa sách vào store:" , state);    
      return state;
    case THEM_SACH:
      //code thêm sách
      let id = new Date().getTime();
      state=[...state, {
        id: id, tensach: action.tensach, gia:action.gia, urlHinh:''
      }]
      console.log('da them',state)
      return state;
    case CHINH_SACH:
      //code chỉnh sách
      return state;
    case XOA_SACH:
      const diai = action.id
      state = state.filter( as =>{
        if(as.id===diai){
          return false
        }
        return true
      })
      //code xóa sách
      return state;
    default:
      return state;
  }
};
export default sachReducer
