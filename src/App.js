import React, { Component } from 'react';
import './App.css';
import banner from './img/banner.jpg';
import Gravida from './Gravida.js';
import Products from './Products.js';
import ProductModal from './ProductModal.js';

const gravidaItems = [
  { name: 'Cras ac mauris', content: 'nteger dictum hendrerit pharetra. Cras fermentum posuere egestas.'},
  { name: 'Curabitur elementum', content: 'Cras vel imperdiet mauris. Pellentesque libero mauris, interdum a felis et, condimentum mattis erat.'},
  { name: 'Awards and Recognition', content: 'Aliquam eget ligula mauris. Etiam viverra non turpis eu auctor. Nullam pretium est libero, et condimentum massa egestas id.'},
  { name: 'Morbi placerat', content: 'Nam feugiat ultrices ligula eget faucibus. Mauris convallis ipsum est.'},
  { name: 'Suspendisse eu', content: 'Duis pretium elementum dui, id feugiat neque facilisis vel.'},
  { name: 'Integer faucibus', content: 'Vivamus at rutrum est, eu pellentesque lacus. Curabitur imperdiet tortor sit amet enim ullamcorper, a aliquet odio rutrum.'}
];
const productItems = [
  { number: 1, price: 500, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { number: 2, price: 1900, content: 'Donec ornare magna sit amet erat molestie sollicitudin ac vitae lectus.' },
  { number: 3, price: 1900, content: 'Cras non metus sed odio tristique imperdiet.' },
  { number: 4, price: 1900, content: 'Pellentesque mattis tellus ut molestie dapibus.' }
]
let temp = 0;

class App extends Component {
  state = {
    isModalOpen: false,
    currentIndex: 0,
  }
  handleClick = (e) => {
    this.setState({
        isModalOpen: true,
        currentIndex: e.target.value
    })
  }
  
  handleClose = () => {
    this.setState({
      isModalOpen: false,
    })
  }

  render() {
    return (
      <div className="App">
        <img className='banner' src={banner} alt="banner" />
        <div className="container">
          <div className="libero">
            <div className="intro">
              <h2>In Gravida Libero</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer enim neque, molestie ut placerat id, tincidunt in sem. Pellentesque sodales lobortis eros nec pulvinar. In ac ultrices ipsum, ultricies semper nisi. 
                Morbi ac hendrerit nulla. Sed nec ex commodo, tincidunt felis ac, iaculis ipsum.
                Morbi ac hendrerit nulla. Sed nec ex commodo, tincidunt felis ac, iaculis ipsum
              </p>
            </div>
            <div className="stateFinder">
              <h2>State Finder</h2>
              <p>Morbi ac hendrerit nulla. Sed nec ex commodo</p>
              <input list="stateList" placeholder="Search Hotels" />
              <datalist id="stateList">
                <option value="">Select State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </datalist>
            </div>
          </div>

          <div className="gravida">
            <h2>In Gravida</h2>
            <div className="gravida-container">
            {
              gravidaItems.map(items => {
              return (
                <Gravida 
                  name={items.name}
                  content={items.content}
                />
              );
            })}
            </div>
          </div>
          <div className="products">
            <div className="products-header">
              <h2>Products</h2>
              <div className="products-filter">
                <p>Filter by:</p>
                <select>
                  <option>All</option>
                  <option>Less Than $500</option>
                  <option>From $500 to $1000</option>
                  <option>From $1000 to $2000</option>
                  <option>$2000 or more</option>
                </select>
              </div>
              </div>
            <div className="products-container">
                {
                  productItems.map(index => {
                    return (
                      <Products 
                        number={index.number}
                        price={index.price}
                        content={index.content}
                        handleClick={this.handleClick}
                        isModalOpen={this.state.isModalOpen}
                        currentIndex={this.state.currentIndex}
                      />
                    )
                  })
                }
            </div>
            </div>
            <ProductModal 
              currentIndex={this.state.currentIndex}
              isModalOpen={this.state.isModalOpen}
              handleClick={this.handleClose}
              price={
                this.state.currentIndex == 0 ? 
                productItems[this.state.currentIndex].price :
                productItems[this.state.currentIndex - 1].price
              }
            />
          </div>
      </div>
    );
  }
}

export default App;
