import logo from './logo.svg';
import Voting from './Voting/voting_list';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />       
        <Voting/>
      </header>
    </div>
  );
}

export default App;
