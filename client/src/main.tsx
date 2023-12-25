import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage.tsx'
import AdminPage from './pages/AdminPage.tsx';
import App from './App';
import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route index element={<HomePage/>}/>  
      <Route path="admin" element={<AdminPage/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
