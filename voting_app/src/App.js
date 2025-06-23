import logo from './logo.svg';
import Home from './components/voting_list';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />       
        <Home/>
      </header>
    </div>
  );
}

export default App;
