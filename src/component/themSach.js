
import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { actThemSach} from '../action/actSach' //Import các actions 
function ThemSach(props) {
  const [content, setContent] = useState(); 
  const refTenSach = useRef('');
  const refGia = useRef('');
  const hamThemSach = () => {
    props.ThemSach( refTenSach.current.value,  refGia.current.value); 
    refTenSach.current.value = ''; 
    refGia.current.value = '';  
  };
  console.log(props.gugu);
  return (
    <div className="col-md-12">
            {props.ahuhu
            ?<div></div>
            :<div><img src={props.gugu.tt.imageUrl} />
              <p>{props.gugu.tt.name}</p></div>}
       <div className="mb-3">
        <input className="form-control" placeholder="Tên sách" ref={refTenSach} />
       </div>
       <div className="mb-3">
        <input className="form-control" placeholder="Giá" ref={refGia}/>
       </div>
       <div className="mb-3">
          <button type="button" className="btn btn-primary" onClick={hamThemSach}>
            Thêm Sách
          </button>
        </div>
    </div>
  );
} 
const mapDispatch = (dispatch) => {
  return {
    ThemSach: (tensach, gia) => {
      dispatch(actThemSach(tensach, gia));
    },
  };
};

const mapState = (state) =>{
  return {
    gugu: state.Thongtin,
    ahuhu: state.TrangThai
  }
}
export default connect(mapState, mapDispatch)(ThemSach);
