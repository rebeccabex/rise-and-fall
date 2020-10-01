import React from 'react';
import './App.css';
import { Tabs } from './Components/Tabs';
import { MapPage } from './Components/Map/MapPage';
import { PowerPage } from './Components/Power/PowerPage';

function App() {
  return (
    <div className="App">
      <Tabs>
        <MapPage label="Map">
          Map page
        </MapPage>
        <PowerPage label="Power">
          Power page
        </PowerPage>
      </Tabs>
    </div>
  );
}

export default App;
