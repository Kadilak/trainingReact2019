import React, { Component } from 'react'
import {connect} from 'react-redux'

function CartSite ({auctions}) {
        console.log(auctions);
        return (
            <div>
                <h2>Cart</h2>
                { JSON.stringify(auctions)}   
            </div>
        )
}
const mapStateStateToProps = (state) => {
    return {
        auctions: state.cart,
    }
}
export default connect(mapStateStateToProps)(CartSite);
