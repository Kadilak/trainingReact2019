import React, { Component } from 'react'
import AuctionItem from './AuctionItem'
import auctionService from '../services/auctionService'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addItemToCart } from '../store/cardActions'
import CartItemsCounter from './CartItemsCounter'

class AuctionSite extends Component {

    static propTypes = {
        addItemToCart: PropTypes.func.isRequired
    }

    state = {
        isLoading: true,
        auctions: [],
        error: '',
        count: 0
    }

    componentDidMount() {
        auctionService
        .getAllAuctions()
        .then((res) => {
            this.setState({auctions: res.data, isLoading: false})
        })
        .catch( error => {
            this.setState({errorMessage:error.message, isLoading: false})
        })
    }

    handleAddAuctionToCart = (auction) => {
        this.props.addItemToCart(auction);
    };

    render() {
        const {auctions} = this.state;
        return (
            <div>
                <h2>Lista aukcji</h2>
                <CartItemsCounter />
                <div className="row">
                    {auctions.map((auction) => (
                        <div key={auction.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <AuctionItem  {...auction} addToCart={(auction) => this.handleAddAuctionToCart(auction)} />
                        </div>
                    )
                    )}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: (auction) => dispatch(addItemToCart(auction))
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.cart.length
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AuctionSite)
