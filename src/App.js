import React from 'react'
import MemoryGame from './screens/MemoryGame'
import Start from './screens/Start'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Lead from './screens/Lead';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/memo",
    element: <MemoryGame />,
  },
  {
    path: "/lead",
    element: <Lead />
  },
]);

function App() {
  return (
    <div>
    {<RouterProvider router={router}></RouterProvider> }
    </div>
  )
}

export default App