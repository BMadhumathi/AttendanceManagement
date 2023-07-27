// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './pages/Redux2/store'
import { Provider } from 'react-redux'
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import Frontpage from './pages/Frontpage'
import AddStudentForm from './AddStudent'
import MainPage from './FormSubmission'
import ManageStudents from './pages/Managestudent'
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
// <App />
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <Frontpage/>
  </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);
 document.getElementById('root');


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
