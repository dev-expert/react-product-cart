import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';

import Header from './components/common/header'
import Footer from './components/common/footer'
import Products from './components/products'
import Payment from './components/payment'

function App() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route
              exact
              path="/products"
              component={Products}
            />
            <Route
              exact
              path="/payment"
              component={Payment}
            />
            <Redirect
              from="/"
              to="/products"
            />
          </Switch>
          <Footer/>
        </BrowserRouter>
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
