import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Login from './components/Authentication/Login.jsx';
import Register from './components/Authentication/Register.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App/> }>
      <Route path='login' element={ <Login/> }/>
      <Route path='register' element={ <Register/> }/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
