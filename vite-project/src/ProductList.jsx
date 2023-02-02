import { Component } from "react";

class Products extends Component {
  render() {
    
    return this.props.product.map((prod,index) => {
      return (
        <div>
          <p>{prod.id}</p>
          <h5>{prod.productName}</h5>
          <p>{prod.price}</p>
          <p>{prod.quantity}</p>

          <div className="space-x-12">
            <button onClick ={() =>{this.props.Increment(index)}} className='p-5 bg-blue-500'>+</button>
            <button className='p-5 bg-blue-500'>-</button>
          </div>
        </div>
      )
    })
  }
}

export default Products;


