# react-tuts

# Episode 9
- Custom Hooks.
- Single Responsibility Principle
- Creating our own Custom Hook!
- Dynamic bundling.
- Suspense Component.

# S.O.L.I.D Principle
- Single Responsibility Principle
    - Each component should have single responsibility
    - This helps in modularity: It means that you breakdown your code in small small modules.
    - This way your code becomes more reusable, maintainable and testable.
- Just keep your code light

# Custom Hooks
- Creating a custom hook is not a mandatory thing but it is a very good thing because that will make your code readable, modular, and reusable.
- Can I abstract the fetching logic in my app?
- You can create your custom hooks inside utils cuz hooks are utility function.
- Always prefer to create a separate file for a separate hook. It's  a good practice to follow in your codebase.
- Give the file same name as the hook. Hook name always start with small case use. We use it cuz react is able to understand if name starts with "use" then it is a hook.
- Why we are maintaining state for data being received by hook?
    - 
- To start writing a hook first finalize the contract: input and output of hook
- https://stackoverflow.com/questions/72260868/why-or-when-should-i-use-state-within-a-custom-hook-in-react/72261107#72261107

# Online Event Listener
- This will help us to check if a user is online/ offline
- https://developer.mozilla.org/en-US/docs/Web/API/Window/online_event
- It's difficult to implement but it is really easy.

# JS File Optimization
- Your JS file size directly proportional to the number of components it is holding.
- Bundler creates single JS file.
- So, when you are creating a large scale application you have to breakdown the single JS file into multiple pieces.
- The process is known as Chunking/ Code Splitting/ Dynamic Bundling
- You can create bundles according to the functionalities in your app. E.g. Train Booking, Bus Booking, Flight Booking, etc.
- This way we don't put load into single bundle, and our request for the JS file doesn't become so heavy that it takes so much time to load.

# Dynamic Bundling/ Chunking/ Lazy Loading/ Code Splitting/ On Demand Loading
- When we open the app then only the homepage code will be loaded it will not load code for grocery that is why it is known as lazy loading. Only when we will go to grocery page then it will load code for grocery.
- To do lazy loading we have to use a function called lazy() which is given to us by react.
- Now, you have to import your component load this way:
    - const Grocery = lazy(()=>{
    import('./components/Grocery')
});
- You can see in network tab now two js files is loaded one index.js and other grocery.js

![Alt text](image-2.png)

- But you when you will try to load it, it will throw an error. It is throwing this error because the code for grocery is not present and when a request goes it takes some time to respond but react won't wait for that, as it doesn't finds the code it just stops rendering and shows error.
- To deal with this we will use Suspense component given by React.
- And you just have to wrap your component inside this suspense which is not present.
- This is how you can divide the app in smaller chunks and make your app performant.
