import React, { Component } from 'react'
class Card extends Component {
    render() {
        return (
            <>
                <div className="card" >
                    <img src={this.props.card.image} alt="" />
                    <div className="text">
                        <div className="name">{this.props.card.name}</div>
                        <div className="status">{this.props.card.status}</div>
                        <div className="species">{this.props.card.species}</div>
                    </div>
                </div>

            </>
        );
    }

}
export default Card;

