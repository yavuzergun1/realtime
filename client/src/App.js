import { useEffect } from "react";
import {init} from "./socketApi"
import './App.css';
import Palatte from './Components/Palatte';

function App() {
useEffect(() => {
init();
}, [])


  return (
    <div className="App">
    <Palatte/>
    </div>
  );
}

export default App;
