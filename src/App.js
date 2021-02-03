import React from 'react';
import './styles/application.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Nav from './components/Nav';

const App = () => (
  // <div className="container-f">
  <BrowserRouter>

    <Nav />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />


    </Switch>

  </BrowserRouter>
  //   <Nav />
  //   <div className="container">

  //   </div>
  // </div>


);


// https://www.golangprograms.com/how-to-create-simple-react-router-to-navigate-multiple-pages.html
export default App;
