import { Component } from "react";
import Products from "./ProductList";

class Shoppingcart extends Component{

    state = {
        products: [
            {
                id: 1,productName: 'iPhone',price: 8900,quantity:0 
            },
            {
                id: 2,productName: 'Samsung',price: 14000,quantity:0 
            },
            {
                id: 3,productName: 'Android',price: 8900,quantity:0 
            },
            {
                id: 4,productName: 'Gionee',price: 1200,quantity:0 
            },
            {
                id: 5,productName: 'itel',price: 8800,quantity:0 
            },
            {
                id: 6,productName: 'iPad Pro',price: 890,quantity:0 
            },
        ]
    }

    render(){
        return (
            <div>
                <h1>Shopping Cart</h1>
                <Products product = {this.state.products} 
                Increment={this.handleIncrement}
                Decrement={this.handleDecrement}/>
            </div>
        )
    }

    handleIncrement=(index) => {
    
        let productsArray = this.state.products
        let number = this.state.products[index].quantity
        number++
        productsArray[index].quantity = number

        this.setState(productsArray)
    }

    handleDecrement=(index) => {
    
        let productsArray = this.state.products
        let number = this.state.products[index].quantity
        number--
        productsArray[index].quantity = number

        this.setState(productsArray)
    }

}


export default Shoppingcart