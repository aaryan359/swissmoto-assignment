import { BrowserRouter as Router, Route, Routes, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AddEvent from './pages/CreateEvent.jsx';
import Header from './components/Header.jsx';
import UserProfile from './pages/UserProfile.jsx';


createRoot(document.getElementById('root')).render(
    
    <Router>
        <Header />
      
      <Routes>
      

       <Route path="/" element={<App />} />
       <Route path='/addevent' element={<AddEvent/>} />
       <Route path='/profile' element={<UserProfile/>} />

     </Routes>
  </Router>
  
  
  
)
