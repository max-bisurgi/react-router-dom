import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './home.component';
import About from './about.component';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
