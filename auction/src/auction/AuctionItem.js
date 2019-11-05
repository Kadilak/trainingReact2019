import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'


class AuctionItem extends Component {

    render() {
        const {id,title,imgURL,description,price} = this.props;

        return (
            <div className="card">
                <div className="card-header">{title}</div>
                <img className="card-img" src={imgURL} alt={title}/>
                <div className="card-body">
                    <p className="card-text">{description}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <strong>{price} {price ? 'zł' : ''}</strong>
                    <button className="btn btn-primary">
                        <FontAwesomeIcon icon={faShoppingBasket} />
                    </button>
                </div>
            </div>
        )
    }
}

export default AuctionItem
