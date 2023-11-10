import React from 'react'
import MemoryGame from './screens/MemoryGame'
import Start from './screens/Start'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Lead from './screens/Lead';
import History from './screens/History';
import PanelLeads from './screens/PanelLeads';


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
  {
    path: "/historia",
    element: <History />
  },
  {
    path: "/painel-leads",
    element: <PanelLeads />
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