import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavHeader from './components/NavHeader';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavHeader/>
        <Switch>
          {/* whilst this is hosted on github pages, the path for the homepage needs to include jpautomotive*/}
          <Route path="/jpautomotive" exact component={HomePage}/>
          <Route path="/about" component={AboutPage}/>
        </Switch>
      </div>
    </Router>
  );
}