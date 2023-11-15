# react-tuts

# Episode 5
- Topics:
    - React File structure.
    - 2 types of Import & Export: named & multiple
    - what are React Hooks
    - useState Hook.
    - Virtual DOM
    - Reconciliation Algorithm
    - Diff Algorithm
    - What is React Fiber
    - React Fiber Architecture

- Today, we are going to learn another superpower of react
- Everything React does can be done with the normal HTML, CSS, JS then why react?
    - Using React you have to do less and make your development process easy, it will make you build apps fast.
- Best Practice while coding is to make separate files for separate components.
- Now, we will restructure our app and make our code more organized and break our code in multiple files.
- You can use jsx/ tsx/ js extension.
- First export then import components
- import { Header } from './components/Header' or './components/Header.js/ jsx/ tsx both way it works';

# Utils
- Never ever keep hard coded data like resData or urls in component folder.
- Try to keep all these kinds of things in a separate folder inside utils/ constant/ config/ common.
- It means utilities that will be used all across the app
- It's a good practice to give Constants name in upper-snake-case.

# Default Export vs Named Export
- Two types of imports:
    - Default import/ export
    - Named import/ export
- In one file we only have one default export
    - export default <name of function/ value>;
    - import <component> from "path"
- When you have to export multiple things from a file you go for named export
    - export const <name_of_component>;
    - import { component } from "path"
    - export const LOGO_URL='';
    - import { LOGO_URL } from './utils/constants'
- Its convention that use default export for components until multiple components are being exported from a file.
- Can I use both named and default exports together?
    - 
- It is always advised to keep your components clean, break your components in multiple files if it is exceeding 100 lines.

# Hooks
- Now, we will make our app dynamic
- Read about event handlers in JS and we do it in JS
- React is fast in DOM manipulation, it do efficient DOM manipulation. And only because of it, it is able to make our App fast.
- It would have been great if we have something as soon as our data array changes our UI gets automatically updated.
- So, we have something to keep your data and UI layer consistent to each other. This is where React comes into picture. This is what all the frameworks are trying to solve.
- To create State Variables - super powerful variables in React we use something called as hooks: useState() hook.
- A react hook is a normal JS function which is given by react. It is pre-build in React. The only thing this function comes with certain logic which gives us super powers. It is a utility function given by React.
- Whenever we say Hooks think it as a utility function. 
- There are multiple React Hooks
    - useState, useEffect most imp.
    - useState() - gives super powerful react variables - It is called state variable because it maintains the state of the component
    - useEffect() -
- State Variable
    - const [listOfRestaurants, setListOfRestaurants] = useState([]); convention in industry to name state set function set<name_of_state>.
    - You don't modify the state variable directly.
    - Whenever a state variable changes react will re-render component.

# How React update UI upon State change?
- Reconciliation Algorithm (React Fiber) introduced in React 16: It is a new to find the element and updating the DOM
- Virtual DOM(React Elements) is the representation of actual DOM (tags)
- Difference Algorithm : In this React tries to find the difference between the old and the new Virtual DOM and then calculate the difference and update the UI per render cycle
- Finding difference between two HTMLs is slow but between two JS Objects is fast
- Whenever there is change in any state variable, React will find the difference between the old and new DOM and it will re-render the component and update the DOM.
- Incremental Rendering: The ability to split rendering work into chunks and spread it out over multiple frames. Efficient way of manipulating DOM.
- Read about Reconciliation
- As soon as you call the setListOfRestraunt react will find out the diff and update the UI accordingly. This is the core of React.
So, the second return value from the useState() acts as a trigger to update the UI. That is why we needed two value for states.

NOTE: React is FAST because it is doing efficient DOM Manipulation. Because it has a virtual DOM. Virtual DOM as a concept existed long back, it is just JS representation of actual DOM. React took that and built its own algorithm over that virtual DOM. So, react can efficiently find out the difference between Virtual DOMs and update the UI.


