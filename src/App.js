import logo from './logo.svg';
import './App.css';
import Add from './Components/Add';
import Add1 from './Components/Add1';
import Add2 from './Components/Add2';
import Add3 from './Components/Add3';
import Vender from './Components/vender'
import './bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Vender} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/add1" component={Add1} />
        <Route exact path="/add2" component={Add2} />
        <Route exact path="/add3" component={Add3} />
      </Router>
    </div>
  );
}
export default App;
