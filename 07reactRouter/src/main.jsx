import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Home from './component/Home/Home'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import User from './component/User/User'
import GitHub, { githubInfo } from './component/GitHub/Github'

//Method 1 for Routes
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },{
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])


//Routes 


//Method 2 for Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='user/:id' element={<User/>}/>
        <Route
        loader={githubInfo}
        path='github' element={<GitHub/>}/>
      </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
