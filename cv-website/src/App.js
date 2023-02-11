import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home"
import PageNotFound404 from "./Pages/PageNotFound404"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "Home",
        element: <Home />
      }
    ],
  },
  {
    path: "*",
    element: <PageNotFound404 />
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
