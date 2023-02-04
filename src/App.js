import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Topics from './pages/Topics';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import MissionLog from './pages/MissionLog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/topics",
    element: <Topics/>
  },
  {
    path: "/missions",
    element: <MissionLog/>
  }
])
export default function App() {

  return (
    <div class="app-container">
      <RouterProvider router={router}/>
    </div>
  );
}


