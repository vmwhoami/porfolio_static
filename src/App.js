import React from 'react';
import './styles/application.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Contact from './pages/contact';

import Nav from './components/Nav';


const App = () => (

  <BrowserRouter>
    <div className="container-f">
      <Nav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />


      </Switch>
    </div>
  </BrowserRouter >
  //   <Nav />
  //   <div className="container">


  // </div>


);


// https://www.golangprograms.com/how-to-create-simple-react-router-to-navigate-multiple-pages.html
export default App;
