

import React , {Component} from 'react';
import { Switch } from 'react-router-dom';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductList from '../../components/ProductList/ProductList';
import callApi from '../../utils/apiCaller';
import {Link } from 'react-router-dom';
class  ProductActionPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:'',
      txtName : '',
      txtPrice : '',
      status: ''
    };
  }
  componentDidMount(){
    var {match} = this.props;
    if(match) {
      var id = match.params.id;
      callApi(`product/${id}`, 'GET', null).then(res =>{
        var data= res.data;
        this.setState({
          id :data.id,
          txtName : data.name,
          txtPrice : data.price,
          status : data.status
        })
      })
    }
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type ==='checkbox' ? target.checked : target.value;
    this.setState({
      [name]:value
    });
  }
  onSave = (e) => {
    e.preventDefault();
    var {history} = this.props;
    var {id,txtName ,txtPrice, status} =this.state;
    if(id ){//update
      callApi(`product/${id}`, "PUT", {
        name : txtName,
        price: txtPrice,
        status :status
        
      }).then(res=>{
        history.goBack();

      })
    } 
    else{
      callApi('product', 'POST', {
        name : txtName,
        price: txtPrice,
        status :status
      }).then(res =>{
        history.goBack();
      })

    }
    
  } 
  render(){
    var {txtName, txtPrice, status} = this.state;
    return (  
      
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"> 
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label >Tên sản phẩm</label>
            <input onChange={this.onChange} value={txtName} type="text" class="form-control" name="txtName"/>
          </div>
          <div className="form-group">
            <label >Giá</label>
            <input type="number"
             className="form-control"
              name="txtPrice" 
              value={txtPrice}
              onChange={this.onChange}/>
          </div> 
          <div className="form-group">
            <label >Trạng thái</label>
          </div>
          
          <div className="checkbox">
            <label>
              <input checked={status} value={status} onChange={this.onChange} type="checkbox" name="status"/>
                Còn hàng
            </label>
          </div>
          
          <Link to="/product-list" className="btn btn-danger" >
          Trở lại
          </Link>
          
          <button type="submit" className="btn btn-default">Lưu lại</button>
          
        </form>
        
      </div>
      
      
    );
  }
  
}

export default ProductActionPage;

