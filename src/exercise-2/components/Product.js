import React from 'react';
import data from "../mockups/data.json";

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            id: "",
            price: 0,
            quantity: 0,
            desc: "",
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const productInfo = Object.values(data).find(productInfo => {
            return productInfo.id === Number.parseInt(id);
        })

        this.setState({
            name: productInfo.name,
            id: productInfo.id,
            price: productInfo.price,
            quantity: productInfo.quantity,
            desc: productInfo.desc,
        })
    }

    render() {
        return (
            <div class="product">
                <p>Product Details:</p>
                <ul>
                    <li>Name: {this.state.name}</li>
                    <li>Id: {this.state.id}</li>
                    <li>Price: {this.state.price}</li>
                    <li>Quantity: {this.state.quantity}</li>
                    <li>Description: {this.state.price}</li>
                </ul>
            </div>
        );
    }
}

export default Product;
