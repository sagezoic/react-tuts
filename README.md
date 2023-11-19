# react-tuts

# Episode 8
- Class based components.
- Creating our own Class based components.
- Life cycle of Class based components.
- React Lifecycle Methods.

# Class Component
- It is normal JS Class
- This class is extends from React.Component
- It has a function render() will the JSX which will be displayed on the browser screen.
- A Function component is basically a function which returns a piece of JSX, whereas a Class Component is a class which extends React.Component and it has a render method which returns the JSX.
- We consume the both components in same way.
- Loading a class based component on browser is creating instance of a class.
- To get props in class based component we have to get it in constructor
    - constructor(props){
        super(props);

        console.log(props);
    }
    - Why do we require super(props)? Can we avoid it?
        - 

    - To use props inside the render() you need to used this keyword. E.g. this.props.name
- Creating state variables in Class Component
    - State is created when you create instance of a class.
    - Here we use state object to create a state variable. State object is collection of state variables (big object which contains all the states).
    - this.state = {
        count: 0,
    };
    - Updating the state variable: 
        - Never update state variables directly
        - We will use this.setState() to update the state.

    - React re-render the component when state changes and only update the part which is being updated in the browser.
    - batch update of states:
        -   this.setState({
                count: count+1,
                count2: count2+1,
            })
    - React only updates the states which is being passed from the setState function. It will not touch other states in state object.

# Life Cycle of React Class based Components
- When class component is mounted first constructor is called then render() is called.
- Nested class component:
    - Parent Constructor
    - Parent Render
    - Child Constructor
    - Child Render
- componentDidMount(): Given by React.Component to us. Once the render() is called after it this function is called (once component is mounted successfully on the browser).
    - constructor -> render -> componentDidMount()
    - parent constructor -> parent render -> child constructor -> child render -> child componentDidMount() -> parent componentDidMount()
- componentDidMount is used to make API calls (very important use case).
- Why API calls is made inside componentDidMount?
    - Because we want to render the component as fast as possible and then make api call and after that re-render the component with filled data.
    - We are not concerned with twice rendering as the reactDOM DOM manipulation capabilities is amazing and it do it so fast.
    - loads->render->API->render (twice rendering of component)
- Every parent/ child component in React goes through the lifecycle methods
- What if we have multiple child components?
    - parent constructor
    - parent render
        - child1 constructor
        - child1 render
        - child2 constructor
        - child2 render

        - child1 componentDidMount
        - child2 componentDidMount
    - parent componentDidMount
- Why react behaved in above way, why componentDidMount for both the child called lastly?
    - This was because in background react did optimization, react will batch the render phase(constructor+render) for all child and then commit phase(React updates DOM +  componentDidMount) will happen together. This is optimization of React. That is why the output is in this order.
        - parent render phase
            - child1 render phase
            - child2 render phase
            - DOM UPDATED IN SINGLE BATCH
            - child1 componentDidMount
            - child2 componentDidMount
        - parent commit phase

    - After the render phase finished, React tries to update the DOM and DOM Manipulation is most expensive thing when we are updating a component (it takes lot of time). So, react want to batch the render phase and do DOM Update in a single batch.
- React Life Cycle diagram
    - https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

![Alt text](image.png)

# API Calls in Class Component
- We can make the componentDidMount function as async
- Then inside it we can make a call to API

# Updating Cycle
- componentDidUpdate()
- This method is called after our component is updated with new values.

# Unmounting Cycle
- unmounting is disappearing from UI
- componentWillUnmount() is used for unmounting
- Just before the component will unmount, this function is called.
- Use Case of component did unMount:
    - While moving from one component to different in Single Page Application (SPA) we need to clear things up
    - Let's take a example we wrote, setInterval() inside the componentDidMount(), setInterval will start to execute a job after a fixed interval. What if now we change page (component), then you will see the setInterval didn't stop it still keeps executing the job. It's a mess, and if you visited the component which have setInterval it will again start executed. So, now two setInterval is in action. We need some kind of cleanup before moving to next component. This is problem with SPA, it is happening because we are not reloading a page, we are just updating components in DOM.
    - Do, call clearInterval(timer) in componentWillUnmount().
    - Note: "this" keyword is shared with all the methods of the class.

# Flow
- Mounting LifeCycle
    - Constructor (loaded state with dummy data)
    - Render (with dummy data) : HTML Dummy
    - Component Did Mount
        - API Call
        - this.setState -> State Variable is updated
- Update LifeCycle
    - render (API data) : HTML (new API Data)
    - componentDidUpdate
- Unmounting
    - componentDidUnmount()

# Going in depth for class based components
- Remember this: Never ever compare react lifecycle methods to functional components.
- Few people say useEffect() is similar to componentDidMount but it is not, there internals is different. Just because inside both we are making API calls doesn't make them similar.
- In modern react code they have removed the concept of lifecycle methods, they don't want to get confused with all these methods.

# Unmounting in Function based Components
- To unmount a component in functional component you just have to return a function from useEffect and this function will be called before unmounting the component. This is the unmounting phase in the functional component.
- render -> useEffect -> useEffect return

# We are able to use async in componentDidMount() but why we can't use it in useEffect()?
![Alt text](image-1.png)
- 