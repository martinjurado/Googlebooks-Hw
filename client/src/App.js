import React from 'react';
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Nav from "./components/Nav";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        
        <Route exact path="/" component = {Search} />
        <Route exact path="/saved" component = {Saved} />
        
      </div>
    </Router>
  )
}

export default App;
