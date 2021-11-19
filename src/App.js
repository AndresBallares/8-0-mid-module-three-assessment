import { Component } from "react";
import "./App.css";
import ProductsCard from "./components/ProductsCard";
import ShoppingCart from "./components/ShoppingCart";
import CheckoutForm from "./components/CheckoutForm";
import productData from "./data/productData";

class App extends Component  {
  constructor () {
    super()
    this.state = ({
      items: productData,
      cart: {
        name: " ",
        price: 0,
        img: "https://via.placeholder.com/200/0000FF/FFFFFF?text=Baseball+Glove",
        description: " ",
      },
    })
  }

  handleProductCart = (event) => {
    const { items } = this.state
    const formatPrice = (price) => `$${price.toFixed(2)}`;
    let proCard = items.map((item) => {
      return <ShoppingCart
                name={item.name}
                price={item.price}
            />
    })
  }

  handleProductCard = this.state.items.map((item) => {
    return <ProductsCard
        name={item.name}
        price={item.price}
        description={item.description}
        img={item.img} />
  })




  render() {
      console.log(this.handleProductCart)
    return (
      <div className="container">
        <ProductsCard item={this.handleProductCard} />
        <ShoppingCart handleProduct={this.handleProductCart} />
        <CheckoutForm />
      </div>


    );
  }
};

export default App;
