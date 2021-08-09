import { Component } from "react";
import Hien1Sach from './hien1Sach'
import React, { useState } from "react";
import { connect } from "react-redux";

const TrangChu = () => {
  const [listSach, ganlistSach] = useState([]);
  React.useEffect(() => {
    let url="http://localhost:3007/sach";
    fetch(url).then(res => res.json()).then(data => {      
      ganlistSach(data); 
    });
  }, []);
      let listData=[];
      listSach.forEach(s=>{listData.push(<Hien1Sach sach={s} key={s.id}/>)});   
      return (<div className="listSach">{listData}</div>);
}

export default TrangChu;