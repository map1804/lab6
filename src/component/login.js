import { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { connect } from "react-redux";
import { actGet_TT, actLogin, actLogout } from "../action/actLogin";

class Login extends Component{
    login = (kq)=>{
        this.props.getTT(kq.profileObj)
        console.log(kq);
        this.props.LOGOUT()

    }
    loginErr = (kq) =>{
        console.log(kq);
    }
    logout = (kq)=>{
        // alert ("bye bye");
        console.log(kq);
        this.props.LOGIN();
        this.props.getTT({})
    }
    render(){
        let id = "55497390912-e71f5h2569dik00clff9k86tq2gqsjei.apps.googleusercontent.com";

        return(
            <div>
                {this.props.TrangThai?
                <GoogleLogin clientId = {id} 
                buttonText = 'ĐĂNG NHẬP VỚI GOOGLE'
                onSuccess = {this.login} 
                onFailure = {this.loginErr} 
                cookiePolicy = {'single_host_origin'}
                isSignedIn={true} />: 
                <GoogleLogout clientId = {id}
                buttonText = 'ĐĂNG XUẤT'
                onLogoutSuccess = {this.logout} />}
            </div>
        )
    }
}

const mapState = (kq) =>{
    return{
        TrangThai: kq.TrangThai
    }
}
const mapDispatch = (kq) =>{
    return{
        getTT: (tt)=>{
            kq(actGet_TT(tt))
        },
        LOGIN: ()=>{
            kq(actLogin())
        },
        LOGOUT: ()=>{
            kq(actLogout())
        }

    }
}

export default connect(mapState,mapDispatch)(Login)