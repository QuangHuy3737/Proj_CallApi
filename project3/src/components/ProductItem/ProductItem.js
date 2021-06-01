
import React , {Component} from 'react';
import callApi from '../../utils/apiCaller';
import {Link} from 'react-router-dom';
class  ProductItem extends Component {
  onDelete = (id) =>{
    if(confirm('Do you delete item?')){//eslint-disable-line
        this.props.onDelete(id);
    }
  }
  render(){
    var {index ,product} = this.props;
    var statusName = product.status ? 'Con hang ' : 'het hang';
    var statusClass = product.status ? 'success' : 'danger';
  return (

      <tr>
          <td>{index +1}</td>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <span className={`label label-${statusClass}`}>
              {statusName}
            </span>
          </td>
          <td>          
            <Link to={`/product/${product.id}/edit`} className="btn btn-success mr-10">Edit</Link>
            <button type="button" className="btn btn-danger"
              onClick = {() => this.onDelete(product.id)}
            > Delete</button>     
          </td>
       </tr>

  );
}
}

export default ProductItem;

