import './App.css';
import { createBrowserRouter, RouteProvider, Route, RouterProvider } from 'react-router-dom';
import Topics from './pages/Topics';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Header from './components/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/topics",
    element: <Topics/>
  }
])
export default function App() {

  return (
    <div class="app-container">
      <RouterProvider router={router}/>
    </div>
  );
}


