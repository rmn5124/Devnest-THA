import React from "react";
import ItemListing from "./pages/ItemListing";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={ItemListing} />
        <Route exact path="/cart" component={MainPage} />
      </Switch>
    </>
  );
}

export default App;
