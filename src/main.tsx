import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home.tsx';
import Data from './pages/Data.tsx';
import References from './pages/References.tsx';


const router = createBrowserRouter([
  {
    path: "/sg-elections/",
    element: <App />,
    children: [
      {
        path: "/sg-elections/",
        element: <Home />,
      },
      {
        path: "/sg-elections/data",
        element: <Data />,
      },
      {
        path: "/sg-elections/references",
        element: <References />,
      },
    ],
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);