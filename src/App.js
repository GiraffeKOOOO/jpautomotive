import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavHeader from './components/NavHeader/NavHeader';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavHeader/>
        <Switch>
          {/* whilst this is hosted on github pages, the path for the homepage needs to include jpautomotive*/}
          <Route path="/" exact component={HomePage}/>
          <Route path="/jpautomotive" exact component={HomePage}/>
          <Route path="/jpautomotive/about" component={AboutPage}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}