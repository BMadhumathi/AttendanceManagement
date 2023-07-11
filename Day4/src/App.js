// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import Login from './login.component'
// import SignUp from './signup.component'
// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//           <div className="container">
//             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//               <ul className="navbar-nav ml-auto">
//                 <li className="nav-item">
//                   <Link className="nav-link" to={'/sign-in'}>
//                     Login
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={'/sign-up'}>
//                     Sign up
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//         <div className="auth-wrapper">
//           <div className="auth-inner">
//             <Routes>
//               <Route exact path="/" element={<Login />} />
//               <Route path="/sign-in" element={<Login />} />
//               <Route path="/sign-up" element={<SignUp />} />
//             </Routes>
//           </div>
//         </div>
//       </div>
//     </Router>
//   )
// }
//export default App
// import './App.css';
// import Form from './Form';
// import React from 'react';



// function App() {
//   return (
//     <div className="App">
//       <Form></Form>
//     </div>
//   );
// }

// export default App;
import './App.css';
import Navbar from './Navbar';
import Form from './Form';
import React from 'react';
import SignUp from './login';
import Products from './pages/Products';
import Reports from './pages/Reports';
import Home from './pages/Home';
import About from './About';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
    <Navbar />
    <Routes>
    <Route path='/' exact element={<Home/>} />
    <Route path='/reports' element={<Reports/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/products' element={<Products/>} />
    <Route path="/form" element={<Form/>}/>    
    <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </div>
    
  
  );
}

export default App;
