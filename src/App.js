import "./App.css";
/* Components */
import DetailPage from "./components/DetailPage";
import ListPage from "./components/ListPage";
import HomePage from "./components/HomePage";
import { useState } from "react";
import movies from "./movies";
import { Route, Switch } from "react-router";
import { GlobalStyle } from "./styles";
function App() {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route path="/:movieId">
          <DetailPage movies={movies} />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
