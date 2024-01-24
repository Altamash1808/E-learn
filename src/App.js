// import './App.css';
// import Home from './Pages/Home';

// function App() {
//   return (
//     <div className="App">
     
//       <Home/>
//     </div>
//   );
// }

// export default App;



import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register.js'; // Import your Register component
import Login from './Pages/Login.js';

function App() {
  return (
    <div className="App">
    
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
</Routes>

     
    </div>
  );
}

export default App;
