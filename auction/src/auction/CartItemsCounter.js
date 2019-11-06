import React, { Component } from 'react'
import { connect } from 'react-redux'

function CartItemsCounter(props){
        return (
            <div>
                {props.count > 0 ? <h2>W koszyku jest:{props.count}</h2> : ''}
            </div>
        )

}

const mapStateToProps = (state) => {
    return {
        count: state.cart.length || 0
    }
}

export default connect(mapStateToProps)(CartItemsCounter)