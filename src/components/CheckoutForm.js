import { Component } from "react";


class CheckoutForm extends Component {

    render (){
        return (
            <div id="">
                <h2>CheckOut</h2>
                <br />
                <form>
                    <div>
                        <label htmlFor="name">First Name</label>
                    </div>
                    <div>
                        <input type="text" id="" name="name"/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="Last Name">Last Name</label>
                    </div>
                    <div>
                        <input type="text" id="" name="Last name"/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="Email">Email</label>
                    </div>
                    <div>
                        <input type="Email" id="" name="Email"/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="Credit Card">Credit Card</label>
                    </div>
                    <div>
                        <input type="Number" id="" name="Credit Card"/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="Zip Code">Zip Code</label>
                    </div>
                    <div>
                        <input type="Number" id="" name="Zip Code"/>
                    </div>
                    <br />
                    <button type="submit">Buy Now</button> 
                </form>
            </div>
        );
    }
}

export default CheckoutForm;