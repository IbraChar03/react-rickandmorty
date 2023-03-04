// import React, { Component } from 'react'
// class Card extends Component
function Card(props) {
    // render() {
    return (
        <>
            <div className="card" >
                <img src={props.card.image} alt="" />
                <div className="text">
                    <div className="name">{props.card.name}</div>
                    <div className="status">{props.card.status}</div>
                    <div className="species">{props.card.species}</div>
                </div>
            </div>

        </>
    );
    // }

}
export default Card;

