

import React , {Component} from 'react';
import {Route , Link} from 'react-router-dom';
const menus =[
  {
    name : "Trang chủ",
    to : "/",
    excat:true
  },
  {
    name : "Quản lý sản phẩm",
    to : "/product-list",
    excat:false
  },
  
];
const MenuLink =({label , to ,activeOnlyExact}) =>{
  return (
    <Route
    path ={to}
    exact={activeOnlyExact}
    children= {({match}) => {
      var active =match ? 'active': '';
      return (
        <li className={active}>
          <Link to={to}>
            {label}
          
          </Link>
        </li>
      );

    }}
    />
  )

}
class  Menu extends Component {
  render(){
   return (
    <div>
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" >Call API</a>
          </div>
          <ul className="nav navbar-nav">
            {/* <li className="active"><a >Trang chu</a></li>
            <li><a >Quan ly san pham</a></li> */}
            {this.showMenu(menus)}
          </ul>
        </div>
      </nav>
    </div>
   );
  }
  showMenu = (menus)=>{
    var result = null
    if(menus.length>0){
      result= menus.map((menu,index)=>{
        return (
          <MenuLink
            key={index}
            label ={menu.name}
            to={menu.to}
            activeOnlyExact={menu.exact}
          />
        );

      });
    }
    return result
  }

}

export default Menu;

