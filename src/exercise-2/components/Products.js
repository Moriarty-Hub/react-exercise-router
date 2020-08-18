import React from 'react';
import { Link } from "react-router-dom";

class Products extends React.Component {

    render() {
        return (
            <div class="product-list">
                <p>All Products</p>
                <ul>
                    <li><Link to="/products/1">Bicycle</Link></li>
                    <li><Link to="/products/2">TV</Link></li>
                    <li><Link to="/products/3">Pencil</Link></li>
                </ul>
            </div>
        );
    }
}

export default Products;
