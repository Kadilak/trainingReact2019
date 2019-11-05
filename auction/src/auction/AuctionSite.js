import React, { Component } from 'react'
import AuctionItem from './AuctionItem'
import { getAllAuctions } from '../services/auctionService'

// const auctions = [
//     {
//         id: 1,
//         title:"hellooo",
//         imgURL: "https://picsum.photos/id/123/200/200",
//         price: 200,
//         description: "description"
//     },
//     {
//         id: 2,
//         title:"hellooo",
//         imgURL: "https://picsum.photos/id/321/200/200",
//         price: 33,
//         description: "description"
//     },
//     {
//         id: 3,
//         title:"hellooo",
//         imgURL: "https://picsum.photos/id/111/200/200",
//         price: 22,
//         description: "description"
//     },
//     {
//         id: 4,
//         title:"hellooo",
//         imgURL: "https://picsum.photos/id/222/200/200",
//         price: 11,
//         description: "description"
//     },
//     {
//         id: 5,
//         title:"hellooo",
//         imgURL: "https://picsum.photos/id/52/200/200",
//         price: 11,
//         //description: "description"
//     },
//     {
//         id: 6,
//         title:"hellooo",
//         imgURL: "https://picsum.photos/id/32/200/200",
//         price: 11,
//         description: "description"
//     },
//     {
//         id: 7,
//         title:"hellooo",
//         imgURL: "https://picsum.photos/id/221/200/200",
//         price: 11,
//         //description: "description"
//     },
// ]


class AuctionSite extends Component {

    componentDidMount() {
        getAllAuctions()
        .then((res) => {
            this.setState({auctions: res.data, isLoading: false})
        })
        .catch( error => {
            this.setState({errorMessage:error.message, isLoading: false})
        })
    }

    state = {
        isLoading: true,
        auctions: [],
        error: ''
    }

    render() {
        const {auctions} = this.state;
        return (
            <div>
                <h2>Lista aukcji</h2>
                <div className="row">
                    {auctions.map((auction) => (
                        <div key={auction.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <AuctionItem  {...auction}/>
                        </div>
                    )
                    )}
                </div>
            </div>
            
        )
    }
}

export default AuctionSite
