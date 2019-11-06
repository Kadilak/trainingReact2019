export const AUCTIONS_LOADING = "AUCTIONS_LOADING";
export const AUCTIONS_ERROR = "AUCTIONS_ERROR";
export const AUCTIONS_FETCHED = "AUCTIONS_FETCHED";
import auctionService  from './../services/auctionService'

const auctionsError = error => ({
  type: AUCTIONS_ERROR,
  errorMessage: error.message
});

const auctionsLoading = isLoading => ({
  type: AUCTIONS_LOADING,
  isLoading
});

const auctionsFetched = auctions => ({
  type: AUCTIONS_FETCHED,
  auctions
});

export const getAllAuctions = () => dispatch => {
  dispatch(auctionsLoading(true));
  auctionService
    .getAllAuctions()
    .then(res => dispatch(auctionsFetched(auctions)))
    .catch(error => dispatch(auctionsError(error)))
    .finally(() => dispatch(auctionsLoading(false)));
};
