import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home"
import OmOss from "./pages/OmOss"
import KursB from "./pages/KursB"
import KursC from "./pages/KursC"
import KursD from "./pages/KursD"
import Profile from "./pages/Profile"
import LogIn from "./pages/LogIn"
import SignUp from "./pages/SignUp"
import Header from './components/Header';


export default function 
APP() {
  return (
      <BrowserRouter >
      <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/kurs b" element={<KursB />} /> 
          <Route path="/kurs c" element={<KursC />} />
          <Route path="/kurs d" element={<KursD/>} />
          <Route path="/om oss" element={<OmOss />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
        </Routes> 
      
      </BrowserRouter>
  );
  
}
