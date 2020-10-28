import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Pages --->
import Homepage from './Pages/Homepage';
import AboutPage from './Pages/AboutPage';
import ProjectsPage from './Pages/ProjectsPage';
import ContactPage from './Pages/ContactPage';
// Compontents --->
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact>
            <Homepage></Homepage>
          </Route>
          <Route path='/about'>
            <AboutPage></AboutPage>
          </Route>
          <Route path='/projects'>
            <ProjectsPage></ProjectsPage>
          </Route>
          <Route path='/contact'>
            <ContactPage></ContactPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
