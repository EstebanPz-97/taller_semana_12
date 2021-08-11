import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Component1 from './components/Component1';
import Components2 from './components/Components2';


function App() {
  return (
    <div className="App">
      <Router>
      <Component1/>
      <Components2/>
      </Router>
    </div>
  );
}

export default App;
