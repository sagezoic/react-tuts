# react-tuts

# Episode 7
- React Router.
- React-router-dom
- useRouteError Hook
- Children Routes
- Outlet Component.
- Link Component
- More about SPA's
- UseParams Hook
- Dynamic Routing
- 2 types of Routing: Client Side Routing & Server-side Routing.

# useEffect Hook
- arguments: callback fxn, dependency array
- Every time the component is rendered useEffect is called but the dependency array changes the behavior of its render.
- Only callback function is mandatory in useEffect, dependency array is optional.
- If no dependency array that means useEffect is called on every render. It is the default nature of useEffect to be called after each render.
- If the dependency array is empty [], then useEffect is called on initial render (just once).
- If we put something inside dependency array, then useEffect is called every time dependency changes

# useState Hook
- useState is used to create local state variables inside functional components.
- Try to call the useState() at the top (meant to be at the higher level, just below where your fxn starts), to make your code consistent and maintainable.
- Never ever make create state variables outside your component.
- Never create state variables inside conditional statements, loop, inner functions this can lead to inconsistency in your code.

# React Router DOM
- Install react-router-dom: npm install react-router-dom
- For routing we will use this package
- We will use it in the root level component (in our case it is App.js)
- createBrowserRouter will create a routing configuration for us.
- configuration means that some information that will define what will happen at specific route.
- createBrowserRouter("takes_a_list_of_paths")
- Each and every path object defines a path and what should happens on that path.
- RouterProvider: Will provide the routing configuration to the app.
- Earlier, we was rendering the AppLayout directly, now instead of this we will provide the router configuration. E.g. root.render(<RouterProvider router={appRouter} />) router prop takes the configuration.
- That's it you just configured the routing.
- This really easy as compared to the react-router-dom v5 where you have to enclose your root component inside browser router and create routes and do switching.
- There are different routers provided by react-router-dom package E.g. createHashRouter, createBrowserRouter, createMemoryRouter, etc.
- createBrowserRouter is the recommended router for all React Router web projects. It uses the DOM History API to update the URL and manage the history stack.

FUN FACT: You can use "rafce" for react functional component boiler plate.

# Error Handling Page
- By default React router DOM gives you a 404 page and handles unexpected URLs.
- add errorElement in your configuration (at root path) and you can handle the errors manually

# useRouteError Hook
- Whenever a function starts with use, you know it is a Hook
- This hook is given by react router dom for providing more information about the error. You can display better errors using it.
- const err = useRouteError() // It give all the errors in path which are thrown and react router dom will catch and give it to us in this err object.

# Creating children routes
- With this you can get the functionality that your header and footer will keep intact and your body will change.
- You have give the children to the paths, and children will be list of children paths
- Outlet: It is a component which will help us to render children according to paths. This is given by react router dom.
- So, it is kind of a tunnel and according to path the children element comes to the outlet and it gets rendered.
- I can have multiple parents and children and according to route Outlet will be filled.
- You will not see the Outlet component in the console, this outlet component is replaced by a component according to route.

# Link
- When your are using React never use anchor tag for referencing cuz using anchor tag the whole page will get refreshed which is not desirable and lead to low performance.
- I want to navigate to new page without reloading the page.
- Link component given by react router dom have all the super power to do this. So, we will use it rather than ahref.
- Link component works similar to anchor tag
- Using link doesn't reload the whole page it just refreshes the components.
- This is why we call react as single page application, here it is just changes the components rather than loading the whole page.
- When you will inspect the Link in the HTML it is still an anchor tag. It means behind the scenes it is using anchor tag.
- With link react-router-dom keeps the track of the 

# Single Page Application
- Its just one page and the components are getting interchanged via Client Side Routing.

# Routing in web apps
- Two types:
    - Client side routing
    - Server side routing
- In server side routing a complete new call goes to the server and server then sends the complete page and pages gets reloaded
- In Client side routing we don't have to make network calls when we are navigating to a page, only the api calls is executed and here the component which is mapped to a route is loaded without making a network call as when the first time the app loads it already have all the components in it. 

Now, we will be building different pages for the different restaurants and we will learn dynamic routing through this exercise.

# Dynamic Routing
- Depending
- GraphQL is used to save yourself from nesting of data in api response like you saw in Swiggy Api. It helps you with over fetching of data.
- 

# useParams() Hook
- to read path variables
- given by react-router-dom

NOTE: It always a good practice to keep all your apis in a constant folder.