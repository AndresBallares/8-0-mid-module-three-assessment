import { Component } from 'react';


class ProductsCard extends Component {
    render() {
        const { name, description, price, img, } = this.props.cart
        return (
            <div className="products">
                <h3></h3>
                <h6>{this.props.cart.name}</h6>
                <p>Price: {this.props.cart.price}</p>
                <button onClick={this.handleProductCart} type="submit">Add To Cart</button> 
                <img src="https://via.placeholder.com/200/0000FF/FFFFFF?text=Baseball+Glove" alt={this.props.cart.name} />
                <p>{this.props.cart.description}</p>
            </div>
        )
    }
}

export default ProductsCard;