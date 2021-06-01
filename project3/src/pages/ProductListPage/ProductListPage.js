
import React , {Component} from 'react';
import { connect } from 'react-redux';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductList from '../../components/ProductList/ProductList';
import {Link} from 'react-router-dom'
import callApi from '../../utils/apiCaller';
import {actDeleteProductsRequest, actFetchProductsRequest} from '../../actions/index';
class  ProductListPage extends Component {
  
  componentDidMount(){ // duoc goi sau render
    this.props.fetchAllProducts();

  }
  onDelete = (id) => {
    
    this.props.onDeleteProduct(id);
  }
  render(){
    // var products =[];
    var {products} = this.props;
    
    return (    
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"> 
                    <Link to="/product/add" className="btn btn-primary mb-10">Them san pham</Link>
                    <ProductList>
                        {this.showProducts(products)}
                    </ProductList> 
                    </div>
      
    );
  }
  showProducts(products){
    var result= null;
    if(products.length> 0){
      result = products.map((product ,index) => {
        return (
          <ProductItem 
          key = {index}
          product= {product}
          index={index}
          onDelete={this.onDelete}
          />
        )

      });
    }
    return result;
  }
}
const mapStatetoProps = state =>{
  return {
    products : state.products
  }
}
const mapDispatchToProps = (dispatch ,props) =>{
  return {
    fetchAllProducts : ()=>{
      dispatch(actFetchProductsRequest())
    },
    onDeleteProduct : (id) => {
      dispatch(actDeleteProductsRequest(id))
    }
  }
}

export default connect(mapStatetoProps,mapDispatchToProps) (ProductListPage);

