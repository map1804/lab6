// import MotSach from './MotSach';
// import { connect } from 'react-redux'; 

// const List_Sach = (props) => {
//   let listData=[];
//   if (props.lisSach!="") 
//   props.listSach.forEach(s=>{listData.push(<MotSach sach={s} key={s.id}/>)});   
//   return (<div className="listSach">{listData}</div>);
// };

// const mapState = (state) => {  
//   return {  listSach: state.sach, }; 
// };
// export default connect(mapState, null)(List_Sach);













import { Component } from "react";
import Hien1Sach from './hien1Sach'
import React, { useState } from "react";
import { connect } from "react-redux";
const List = (props)=>{
    let listData=[];
    if(props.listSach!=""){
      props.listSach.forEach(s=>{listData.push(<Hien1Sach sach={s} key={s.id}/>)});   
    }
    
    return (<div className="listSach">{listData}</div>);
  
}
const mapState = (state) => {  
return {  listSach: state.sach, }; 
};
export default connect(mapState, null)(List);