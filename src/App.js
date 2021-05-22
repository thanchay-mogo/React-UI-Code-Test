import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/signup' exact component={Signup} />
      <Route component={NoMatch} />
    </Switch>
    </BrowserRouter>
          
  );
}

function NoMatch() {
  return (
    <NotFound />
  );
}

export default App;
