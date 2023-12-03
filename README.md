# react-tuts

# Episode 12
- Redux Toolkit
- react-redux package
- Redux Store, Actions/Reducers, useSelector, useDispatch.
- Interview Questions around Redux.
- Best practices while using Redux.
- Redux Dev tools

# Redux
- Redux works in the data layer of react application
- Redux is not mandatory, use it only when required. All the application that are build using redux can be build without it also.
- Redux and React are different libraries.
- Alternative to Redux, zustand state management library 
- Advantages of Redux:
    - Used for handling state of application
    - Using this our application becomes easier to debug, Redux offers easy debugging
- Redux offers two libraries to us:
    - React-Redux: Bridge between the react and redux
    - Redux-Toolkit: Latest way to write the code

# Vanilla Redux vs Redux Toolkit (RTK)
- Redux toolkit came to solve three concerns related to redux
    - Configuring a Redux store is too complicated
    - I have to add a lot of packages to get Redux to do anything useful
    - Redux requires too much boiler plate code

# Redux Store
- It is not a problem if we create a really big object in redux store.
- We have slices(small portion of redux store) inside redux store which helps not ti make our redux store clumsy and big by storing everything inside a single object.
- To make our data separate we make logical partition known as slice. E.g Theme slice, cart slice, user slice.
- Redux says you can't directly modify card slice, there is a way through which you can modify data inside slice.
- As you click on icon you have to dispatch a action, after it calls a function and the function modifies the cart. This function is known as reducer.
- When you click on the add button, it dispatches an action and it calls the reducer function which updates the slice of the redux store.
- To read the data from store we will use selector, and this selector will modify our UI.
- Subscribing to the store. Subscribed to the store = sync with the stores. E.g Header component has subscribed to the store.
- Header component is subscribed to the store using selector. As the value in store changes it will automatically update UI.

# Redux Toolkit
- Install 
    - @reduxjs/toolkit (they have kept the name for their library this way maybe they have thought it is cool)
    - react-redux
- Build our store
- Connect our store to app
- Create a slice(cartSlice)
- dispatch(action)
- read data using selector

# Creating your own store
- We will create our own store inside the utils folder
- configureStore form "@reduxjs/toolkit" : used to create a redux store
- Add store to your app: we will be needing "provider" from "react-redux", add it to root element of your app.
- So, this "provider" will act as a bridge between your react app and the redux store. It is redux-react package to make store communicate to our app.
- You just have to wrap the portion of your app to access the store inside this Provider tag.
- Just like the React Context provider we have Redux store provider.
- Creating a slice:
    - To create a cartSlice we will use a function, createSlice() from "@reduxjs/toolkit", it comes from this library because this is something which is related to redux.
    - This function takes configuration to create a slice.
    - In these configuration we have the reducer function corresponding to the actions for the slice.
    - Reducer is again an object and now we will write reducer function corresponding to each action.
    - E.g. of actions: you can add an item, you can remove an item, you can clear the cart, so these things are actions. You can think of them as small apis to communicate with redux store.
    - E.g. addItem: reducerFn(),
    - Reducer function will actually, modifies the data inside the slice.
    - Now, we have to export our actions and reducers from the slice. We will do it with "export default cartSlice.reducer"
- Now, we have to add this cartReducer to our appStore reducer. appStore reducer will have multiple reducers from different slice.
- We will subscribe to the store via selector
- We will dispatch our actions through the useDispatch() hook.
    dispatch(addItems("pizza"));
    {
        payload: "pizza"
    } This done automatically by the React-Redux.
- Whatever you send it from the above statement it will be received by the reducer of respective action. You can then access the input using action.payload (as the above object is received in action)
- using the useSelector hook helps to read the contents in the store. And you have to pass the contents you want to access.

# Reading the card info
- You have to subscribe to the store

# Redux Interview Question
- If you don't subscribe to the correct portion of the store, it will be a big performance loss.
    Way 1: const cartItems = useSelector((store)=>store.cart.items);
    Way 2: const store = useSelector((store)=>store)
           const cartItems = store.cart.items
    - In the way 2 you are subscribing to the big portion of the store but in way 1 only to a portion of the store. The way 2 will work fine but it is really work inefficient.
    - This happens because, in way 2 the store is subscribed to the react redux store. Whenever anything changes inside the store your cart component get to know, so any change in our store will get to know by the component and it will affect this component as we have subscribed the store from here.
    - So, never ever subscribe to the whole store, only subscribe to the portion of the store which you need in the component.
    - useSelector: "The name is selector because you are selecting a portion of the store."
- When you are creating store for your app, it will have one reducer for the whole app and it can contain multiple small reducers. But when you are creating storeSlice it will have multiple small reducer functions. There we can have multiple reducers.

# Redux Dev Tools
- Redux is used for very large scale applications

# RTK Query
- Learn about it from the RTK docs
- In the older versions of redux to make api call we used to use middleware, redux-thung, etc. but now with RTK we have RTK Query.
- https://redux-toolkit.js.org/rtk-query/overview

# When you do google search Entities involved:

1. DNS resolution
2. TCP three-way handshake
3. HTTP Request/Response
4. HTTPS upgrade
5. Browser renders server response
