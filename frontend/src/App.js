import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import './App.css';
import { Header } from './components/Header.js';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <h1>Home</h1>
    </div>
  );
}

export default App;
