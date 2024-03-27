import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home/Home.jsx';
import Root from './Components/Root/Root.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import Pages from './Components/Pages/Pages.jsx';
import ErrorPage from './Components/ErrorPages/ErrorPage.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('../books.json')
      },{
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        
      },
      {
        path:'/listed',
        element:<ListedBooks></ListedBooks>,
        loader:()=>fetch('../books.json')
      },{
        path:'/pages',
        element:<Pages></Pages>,
        loader:()=>fetch('../books.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
