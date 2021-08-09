import { Component } from "react";
import { connect } from "react-redux";
class Giohang extends Component{

    render(){
        return(
            <div>
                {this.props.gugu?
                <h3>Bạn phải đăng nhập mới được xem giỏ hàng ^^</h3>:
                
                <h3>Đây là giỏ hàng nè ^^</h3>
                  
                }
            </div>
        )
    }
}
const mapState = (state)=>{
    return{
        gugu: state.TrangThai
    }
}
export default connect(mapState, null)(Giohang)