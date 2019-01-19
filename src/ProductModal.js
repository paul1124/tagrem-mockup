import React, { Component } from 'react';
import cereal_b from './img/cereal_b.jpg';
import flower_b from './img/flower_b.jpg';
import machine_b from './img/machine_b.jpg';
import candy_b from './img/candy_b.jpg';
import close from './img/close.png';

class ProductModal extends Component {
    render() {
        const { isModalOpen, currentIndex, price } = this.props;
        return (
            <div className="modal" style={{ display: isModalOpen ? 'block' : 'none' }}>
                <div className="product-modal">
                    <div className="product-modal-header">
                        <h2>Product Title {currentIndex}</h2>
                        <button className="closeBtn" onClick={this.props.handleClick}><img src={close} /></button>
                    </div>
                        <p className="product-modal-price">Starting at ${price}</p>
                        <div className="product-modal-content">
                        <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer enim neque, molestie ut placerat id, tincidunt in sem. Pellentesque sodales lobortis eros nec pulvinar. In ac ultrices ipsum, ultricies semper nisi. Morbi ac hendrerit nulla. Sed nec ex commodo, tincidunt felis ac, iaculis ipsum.
    Morbi ac hendrerit nulla. 
    <br /> <br />
    Sed nec ex commodo, tincidunt felis ac, iaculis ipsum</p>
                    <button className="btn buy-btn">Buy Online ></button>
                    </div>
                    <img className="product-modal-img" src={
                        currentIndex == 1 ?
                        cereal_b : (currentIndex == 2 ? 
                            flower_b : (currentIndex == 3 ? 
                                machine_b : (currentIndex == 4 ? 
                                    candy_b : "")))
                    } />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductModal;