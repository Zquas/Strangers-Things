import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css';
import NotFound from "./NotFound.js";
import Root from "./pages/Root";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children:[
      {
        path: "Posts",
        element: <Posts/>,
      },
      {
        path: "Profile",
        element: <Profile/>,
      },
      {
        path: "Register",
        element: <Register/>,
      },
      {
        path: "Login",
        element: <Login/>,
      },
    ],
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
