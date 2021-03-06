// react
import React from 'react';

// components
// import Cube from './components/Cube';
// import Globe from './components/Globe';
import ReactGlobeGL from './components/ReactGlobeGL';

// styles
import './styles/global-styles.css';

function App() {
  return (
    <>
      <header className="map-header">
        <h1>ThreeJS Virtual Globe</h1>
      </header>
      {/* <Cube /> */}
      {/* <Globe /> */}
      <ReactGlobeGL />
    </>
  );
}

export default App;
