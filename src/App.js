import React from 'react';

import './styles/application.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Mobilenav from './components/Mobilenav';
import Home from './pages/home';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import Errorpage from './pages/errorpage';
import PortfolioItem from './pages/portfolioItem'




const App = () => (
  <BrowserRouter>
    <div className="container-f">
      <Nav />
      <Mobilenav />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
        <Route path="/portfolio/:id" children={<PortfolioItem />} />
        <Route path="*" component={Errorpage} />
      </Switch>
    </div>
  </BrowserRouter >

);


// https://www.golangprograms.com/how-to-create-simple-react-router-to-navigate-multiple-pages.html
export default App;
