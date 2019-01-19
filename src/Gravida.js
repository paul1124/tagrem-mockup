import React, { Component } from 'react';

class Gravida extends Component {
    render() {
        return (
            <div className="gravida-items">
                <h3>{this.props.name}</h3>
                <p>{this.props.content}</p>
                <button className="btn">Learn More ></button>
            </div>
        )
    }
}
export default Gravida;