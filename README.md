# react-tuts

# Episode 11
Higher Order Components.
- Controlled and Uncontrolled Components.
- Lifting the State up (very important).
- Intro to React Dev Tools.
- Props Drilling.
- React Context

# Higher Order Component
- A higher order component is a function which takes a component and enhances a component and return it back.
- It acts as a enhancer
- We will enhance our food card and add the promoted label on it
- When we are writing Higher Order Components they are pure components. Pure Components means we are just enhancing it, adding something to our existing component without changing it directly.

An important part of your react application is to manage its data, UI is very static JSX thing and data is another part of your app.
And data layer is very important. All the React applications have two important layers UI Layer and Data Layer. And UI Layer is powered by Data Layer. Data Layer consists of your state, props, local variables. If you know how to manage data in your application your application will be super fast and performant. UI Layer is mostly consists of JSX. Today, we will learn how to manage data in our application. You have to be very good at logic of your data layer.

# Accordion
- Accordion header and accordion data
- w-6/12 this way you can give width in grid system for tailwind
- If we want to build the feature so that only one accordion body is open and rest is closed then we have to build, it in different manner.
- Building a accordion which will collapse all the other accordion body
    - To build this you have to lift the state up.
    - Now, we want to Restaurant Menu to control all the collapse and expand feature.
    - We will control it using the showIndex state, it will automatically expand one and collapse all other.

# Lifting state up
- It is an important concept in the React, sometimes we have to lift state up if we have to control all the component children.
- This is an advanced concept, 
- Important interview question
- https://react.dev/learn/sharing-state-between-components

# Controlled vs Uncontrolled Components
- UnControlled component, parent have control over the children
- If the component is controlling itself then it is controlled component (it has it's own state which is controlling the components behavior)

# React Dev Tools
- React router adds few packages and that is why you will see few more components in the components->React Dev Tools

# Props Drilling
- If your data layer is good then your UI layer automatically becomes strong.
- Passing data from one component to other component becomes a challenge when the application is huge.
- React has one way data flow. One was data stream: top to bottom
- If we want to pass data in the hierarchy of components then we can't do it directly, we have to pass it to its parent and then from there it will reach to it.
- And sometimes the data which is being passed from components, the component have no use of it, it is just acting as a medium to pass data.
- This concept is known as props drilling
- https://react.dev/learn/passing-data-deeply-with-context
- So, we shouldn't just pass the props here and there. States and props are very important in react, without state and prop React component doesn't exists.
- One solution to props drilling is React Context.
- In, a large app it is a common scenario where we need to have some kind of a global data that can be accessed from anywhere in the app, wherever you are in app. To do this React gives you something called React Context.

# React Context
- Context is kind of a global place where we will kept our data and anybody can access that data. That is the power of React Context.
- Let's see how can we make our data layer more powerful with this.
- One such important data that you want to keep it in context is Logged in User data. It can be required in multiple pages.
- Eg. Theme info., 
- createContext() to create a context, useContext() hook to use a context.
- You can create as many context you want.
- Only the data which can be accessed from multiple places should be kept in the React Context.
- NOTE: In class based components you don't have hooks, so you can't use the useContext() there.
- To use in class based component:
    - To access a context we have two ways, 1. using the hooks, 2. using the consumer.
    - <UserContext.Consumer>
            {(data)=>{console.log(data)}}
          </UserContext.Consumer>
    - React gives access to data in the callback function inside the consumer. Both are the ways to consume the context.
- To update the value of Context we will use the context provider. And wrap your complete app with it.
- If you will use Provider for a portion then it will update context value in that portion only and anywhere else it will show default value.
- Here, react takes care of performance, you don't have to think about it.
- Can we have nested Context Providers? What will happen? Is it correct or not?
    - It is perfectly valid code. The context provider it is wrapped in it will take that value.
- You can even pass functions through context
- <UserContext.Provider value={{ loggedInUser: userInfo?.name, setUserInfo }}>
- Context value is also fetched in the code which is lazy and before showing it on UI it has updated value.
- Using this we make our app very sane, readable.
- Context is really good for small, mid app.
- When we will be using redux, we don't need Context. You should know how to manage data using context, even though you know how to work with redux.
- Redux is a state management library. The main advantage of using redux is it is scalable.
- Redux is now a standard in industry.
- Redux vs Context