import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Artist from './components/Artist/Artist';
import Contacts from './components/Contacts/Contacts';
import NotFound from './components/NotFound/NotFound';

const router = createBrowserRouter([
  {path: "", element: <Layout/>, children: [
    {index: true, element: <Home />},
    {path: "about", element: <About />},
    {path: "artist", element: <Artist />},
    {path: "contacts", element: <Contacts />},
    {path: "*", element: <NotFound />}
  ]}
])

export default function App() {
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}
