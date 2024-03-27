import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Pages/Root/Root';
import Home from './Pages/Home/Home';
import ListedBooks from './Pages/ListedBooks/ListedBooks';
import PagesRead from './Pages/PagesRead/PagesRead';
import BookDetails from './Pages/BookDetails/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/bookData.json'),
      },
      {
        path: "/readpages",
        element: <PagesRead></PagesRead>
      },
      {
        path: "/bookdetails/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/bookData.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
