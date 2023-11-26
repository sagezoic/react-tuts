import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { Header } from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => {
  return import("./components/Grocery");
});

const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();

  //Authentication
  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: "Sultan",
    };
    setUserInfo(data);
  }, []);

  return (
    // Default Value
    <UserContext.Provider value={{ loggedInUser: userInfo?.name, setUserInfo }}>
      {/* Sultan */}
      <div className="app">
        <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>
          {/* Elon Musk */}
          <Header />
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId", // Dynamic Route
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
