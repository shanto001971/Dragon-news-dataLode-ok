import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './route/route.jsx'
import AuthContex from './AuthContex/AuthContex';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContex>
    <RouterProvider router={router}/>
    </AuthContex>
  </React.StrictMode>,
)
