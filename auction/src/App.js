import React from 'react';
import Header from "./Header";
import MenuBar from './MenuBar';
import AuctionSite from './auction/AuctionSite';
import PromotionSite from './auction/PromotionSite';
import { Switch, Route, Redirect } from 'react-router-dom'
import CartSite from './auction/CartSite';
import LogInSite from './auth/LogInSite';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <MenuBar/>
        <Switch>
          <Redirect path="/" to="/auctions" exact/>
          <Route path="/auctions" component={AuctionSite}/>
          <Route path="/promotions" component={PromotionSite}/>
          <Route path="/cart" component={CartSite}/>
          <Route path="/log-in" component={LogInSite}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
