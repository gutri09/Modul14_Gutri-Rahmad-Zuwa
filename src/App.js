import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import Layout from './component/layout';

class App extends Component {
   render() {
     return (
        <Router>
            <div className="App">
            <Routes>
                  <Route path='/' element={< Layout />}>
                     <Route index element ={<Home/>}></Route>
                     <Route path='about' element={< About />}></Route>
                     <Route path='contact' element={< Contact />}></Route>
                  </Route>
           </Routes>
           </div>
        </Router>
    );
   }
 }

export default App;
