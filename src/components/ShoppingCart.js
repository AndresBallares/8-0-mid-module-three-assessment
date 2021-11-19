import { Component } from 'react';

class ShoppingCart extends Component {

    render () {
        const { name, price, } = this.props.item

        return (
            <div className="">
                <div>
                    <h3>Cart</h3>
                </div>
                <ul>
                    <ol name={this.props.item.name}>

                    </ol>
                </ul>
                <div>
                    <p>Subtotal: {this.props.item.price}</p>
                </div>
                <div>
                    <p>Tax:</p>
                </div>
                <div>
                    <p>Total:</p>
                </div>
            </div>

        );
    }
}

export default ShoppingCart;