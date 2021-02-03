import React from 'react';
// import './styles/application.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Navigation from './components/Nav';

const App = () => (
  // <div className="container-f">
  //   <Nav />
  //   <div className="container">

  //   </div>
  // </div>

  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />


      </Switch>
    </div>
  </BrowserRouter>
);


// https://www.golangprograms.com/how-to-create-simple-react-router-to-navigate-multiple-pages.html
export default App;
