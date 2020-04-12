import React, { useEffect, Fragment } from 'react';
import Facebook from './components/Facebook';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';
import Navbar from './components/Navbar';



function App() {

  useEffect(() => {
    // MJS init
    M.AutoInit();
  });

  return (
    <Fragment>
      <Navbar />
      <Facebook />
    </Fragment>
  );
}

export default App;
