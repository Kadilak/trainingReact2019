import { axInstance } from './ax-instance'

const baseURI = '/auctions'

const auctionService = {
    getAllAuctions() {
        return axInstance.get(baseURI);
    }
}

export default auctionService;

// function getAllAuctions()
// {

// }

// function getAllAuctions()
// {

// }