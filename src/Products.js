import React, { Component } from 'react';
import product1 from './img/cereal_b.jpg';
import product2 from './img/flower_b.jpg';
import product3 from './img/machine_b.jpg';
import product4 from './img/candy_b.jpg';

class Products extends Component {
    // handleClick = () => {
    //     this.setState({
    //         isModalOpen: !this.state.isModalOpen,
    //     })
    // }

    render() {
        {
            switch(this.props.number) {
                case 1: 
                    return (
                        <div className="product-item">
                            <h3>Product Title {this.props.number}</h3>
                            <p className="product-price">Starting at ${this.props.price}</p>
                            <p className="product-content">{this.props.content}</p>
                            <img className="product-image" src={product1} alt="Product Image" />
                            <button onClick={this.props.handleClick} value="1">Learn More ></button>

                        </div>
                    )
                case 2:
                return (
                    <div className="product-item">
                        <h3>Product Title {this.props.number}</h3>
                        <p className="product-price">Starting at ${this.props.price}</p>
                        <p className="product-content">{this.props.content}</p>
                        <img className="product-image" src={product2} alt="Product Image" />
                        <button onClick={this.props.handleClick} value="2">Learn More ></button>
                    </div>
                )
                case 3:
                return (
                    <div className="product-item">
                        <h3>Product Title {this.props.number}</h3>
                        <p className="product-price">Starting at ${this.props.price}</p>
                        <p className="product-content">{this.props.content}</p>
                        <img className="product-image" src={product3} alt="Product Image" />
                        <button onClick={this.props.handleClick} value="3">Learn More ></button>
                    </div>
                )
                case 4: 
                return (
                    <div className="product-item">
                        <h3>Product Title {this.props.number}</h3>
                        <p className="product-price">Starting at ${this.props.price}</p>
                        <p className="product-content">{this.props.content}</p>
                        <img className="product-image" src={product4} alt="Product Image" />
                        <button onClick={this.props.handleClick} value="4">Learn More ></button>
                    </div>
                )
            }
    }
}}
export default Products;