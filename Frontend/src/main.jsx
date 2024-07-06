import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Login from './components/Authentication/Login.jsx';
import Register from './components/Authentication/Register.jsx';
import AllJobs from './components/Jobs/AllJobs.jsx';
import MyJobs from './components/Jobs/MyJobs.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App/> }>
      <Route path='login' element={ <Login/> }/>
      <Route path='register' element={ <Register/> }/>
      <Route path='job/all' element={ <AllJobs/> }/>
      <Route path='applications/me' element={ <MyJobs/> }/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
