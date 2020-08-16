import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SelectSide from './component/Selectside';
import Home from './component/Home';
import Single from './component/Single';
import Double from './component/Double';

function App() {
  return (
    <Router>
      <Route exact path="/" render={(props) => (<Home {...props} isAuthed={true} />)} />
      <Route exact path="/selectsides" render={(props) => (<SelectSide {...props} isAuthed={true} />)} />
      <Route exact path="/singleplayer" render={(props) => (<Single {...props} isAuthed={true} />)} />
      <Route exact path="/doubleplayer" render={(props) => (<Double {...props} isAuthed={true} />)} />
    </Router>
  );
}
export default App;