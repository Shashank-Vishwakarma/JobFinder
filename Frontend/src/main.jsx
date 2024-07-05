import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Jobs from './Job/Jobs';
import JobDetails from './Job/JobDetails';
import PostJob from './Job/PostJob';
import MyJobs from './Job/MyJobs';
import Application from './Application/Application';
import MyApplications from './Application/MyApplications';
import NotFound from './NotFound/NotFound'
import App from './App';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="job/all" element={<Jobs />} />
      <Route path="job/:id" element={<JobDetails />} />
      <Route path="job/post" element={<PostJob />} />
      <Route path="job/me" element={<MyJobs />} />
      <Route path="application/:id" element={<Application />} />
      <Route path="applications/me" element={<MyApplications />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
