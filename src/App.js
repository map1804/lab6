import Trangchu from './component/trangchu';
import Lienhe from './component/lienhe';
import Giohang from './component/giohang';
import { BrowserRouter, Route, Link  } from 'react-router-dom'
import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { actDuaSachVaoStore } from './action/actSach';
import  ThemSach from './component/themSach'
import list_Sach from './component/list_Sach';
import Login from './component/login';
import Doitien from './component/doitien'

function App(props) {
  React.useEffect(() => {
    let url="http://localhost:3007/sach";
    fetch(url).then(res => res.json()).then(data => {      
      props.DuaSachVaoStore(data);
    });
  }, []);
  return (
    <BrowserRouter>
    <div className="container">
      <header>
          <nav>
            <Link to='/'>Trang chủ</Link>
            <Link to='/about'>Liên hệ</Link>
            <Link to='/cart'>Giỏ hàng</Link>
            <Link to='/list_sach'>Sản phẩm</Link>
            <Login />
          </nav>
          <Doitien />
      </header>
      <main>
          <article>
            <Route path='/' exact component={Trangchu} />
            <Route path='/about' component={Lienhe} />
            <Route path='/cart' component={Giohang} />
            <Route path='/list_sach' exact component={list_Sach} />
            <input></input>
          </article>
          <aside className="mt-3">
            <ThemSach></ThemSach>
          </aside>
      </main>    
      <footer>FOOTER</footer>
    </div>
    </BrowserRouter>

  );
}
const mapDispatch = (dispatch) => {
  return {
    DuaSachVaoStore: (arrSach) => {
      dispatch(actDuaSachVaoStore(arrSach));
    },
  };
};

export default connect(null, mapDispatch)(App);
