import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Contact from './components/Contact';
import {
  Routes,
  Route,

} from "react-router-dom";
import Home from './components/Home';
import RegistrationFirst from './components/Forms/RegistrationFirst';
import RegistrationSecond from './components/Forms/RegistrationSecond';

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />


      </Routes>


      {/* Forms */}
      {/* <RegistrationFirst /> */}
      {/* <RegistrationSecond /> */}




    </>
  );
}

export default App;
