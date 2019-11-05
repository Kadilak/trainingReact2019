import { axInstance } from './ax-instance'

const baseURI = '/auctions'

export function getAllAuctions()
{
    return axInstance.get(baseURI);
}

// function getAllAuctions()
// {

// }

// function getAllAuctions()
// {

// }