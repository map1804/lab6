import { Component } from "react";
import { connect } from "react-redux";
import {actXoaSach} from '../action/actSach'
class Hien1Sach extends Component{
    // constructor(props){  super(); }
    xoa = (id)=>{
      this.props.xoaSach(id)
    }

    gia = (gia)=>{
      if(this.props.doitien.doitien === "usd"){
        return (gia / 23000).toFixed(2) + " USD"
        // return gia.toLocaleString('en-US') + " USD"
      } else {
        return gia.toLocaleString('vi-VN') + " VND"
      }
    }
    render(){
      const kq =
      <div className='MotSach' >
        <div class="card border-primary mb-3">
        <img class="card-img-top"  src={this.props.sach.urlHinh} alt=''/>
          <div class="card-body">
            <h4 class="card-title">{this.props.sach.tensach}</h4>
            <p className="gia">{this.gia(this.props.sach.gia)}</p>
            <p className="button">          
              <button className='btn btn-danger mr-3' type='button' onClick={()=>this.xoa(this.props.sach.id)}>Xóa</button>
              <button className='btn btn-primary' type='button'>Chọn</button>
            </p>
          </div>
        </div>
          {/* <h3></h3>     
            <div className='w-sach'>
              <img src={this.props.sach.urlHinh} alt=''/>
            <p className="gia">{this.gia(this.props.sach.gia)}</p>
           
            </div>
          <hr />        */}
      </div>
      return (kq);
    }
  
}
const mapDispatch = (dispatch) => {
  return {
    xoaSach: (id) => {
      dispatch(actXoaSach(id));
    },
  };
};

const mapState = (state) =>{
  return {
    doitien :state.doitien
  }
}
export default connect(mapState, mapDispatch)(Hien1Sach)