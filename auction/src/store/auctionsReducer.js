import {
    AUCTIONS_ERROR,
    AUCTIONS_FETCHED,
    AUCTIONS_LOADING
  } from "./auctionsActions";
  
  const initialAuctions = {
    isLoading: false,
    errorMessage: "",
    auctions: []
  };
  
  export default function(state = initialAuctions, action) {
    const { auctions, errorMessage, isLoading } = action;
    switch (action.type) {
      case AUCTIONS_LOADING:
        return { ...state, isLoading };
      case AUCTIONS_ERROR:
        return { ...state, errorMessage };
      case AUCTIONS_FETCHED:
        return { ...state, auctions };
      default:
        return state;
    }
  }
  