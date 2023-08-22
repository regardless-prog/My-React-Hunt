import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Auth from './components/Auth';
import ForgotPassword from './components/ForgotPassword';
import Domain from './components/Domain';
import EmailFinder from './components/EmailFinder';
import Navigation from './components/Navigation';
import AuthorFinder from './components/AuthorFinder';
import EmailVerifier from './components/EmailVerifier';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/forgot" element={<ForgotPassword/>}/>
        <Route path="/navigation" element={<Navigation/>}/>
        <Route path="/domain" element={<Domain/>}/>
        <Route path="/email" element={<EmailFinder/>}/>
        <Route path="/author" element={<AuthorFinder/>}/>
        <Route path="/verifier" element={<EmailVerifier/>}/>
      </Routes>
    </Router>
  );
}

export default App;
