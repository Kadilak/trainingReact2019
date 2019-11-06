import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'; 

AuctionItem.propTypes = {
    title: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    addToCart: PropTypes.func,
}

AuctionItem.defaultProps = {
    description: 'Brak opisu...'
}

function AuctionItem ({id, title, imgURL, description, price, addToCart}) {
    const auction = {id, title, imgURL, description, price };
    return (
        <div className="card">
            <div className="card-header">{title}</div>
            <img className="card-img" src={imgURL} alt={title}/>
            <div className="card-body">
                <p className="card-text">{description}</p>
            </div>
            <div className="d-flex justify-content-between">
                <strong>{price} {price ? 'zł' : ''}</strong>
                <button onClick={() => addToCart(auction)} className="btn btn-primary">
                    <FontAwesomeIcon icon={faShoppingBasket} />
                </button>
            </div>
        </div>
    )
}

export default AuctionItem
