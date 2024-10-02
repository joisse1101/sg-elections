import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './pages/Home.tsx';
import Contact from './pages/Contact.tsx';


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
        path: "/sg-elections/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);