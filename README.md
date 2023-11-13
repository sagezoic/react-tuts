# react-tuts

# Episode 4
Topics covered :
- How React code works behind the scenes.
- Building our first app from scratch.
- Various sections of a web page.
- Props/state
- Passing a prop to a component
- Destructuring the props
- Optional Chaining
- Config Driven Ul, Data layer, Ul layer
- Using the map() function

# Planning How your website look like
- Build a wireframe/ mock
- Components of our app
    - Header
        - Logo
        - Nav Items
    - Body
        - Search
        - RestaurantContainer
            - Restaurant Card
                - Img 
                - Name of Res
                - Star Rating
                - Cuisine
                - Delivery Time
    - Footer
        - Copyright
        - Links
        - Address
        - Contact

# Styling
- I JSX we can do styling using JS object, we have to give it as a JS object
- you can do the inline styling too
- style = {
            {color:"green"}
          }
- Not a preferred way to give styling inline
- So, we have three ways for styling:
    - 1. Our css file
    - 2. Inline
    - 3. Using CSS library (material UI, tailwind, bootstrap)

# Props
- Passing a prop to an Component is just like passing a argument to a function
- Props is an object
- React just wrap everything passed as prop inside props object
- When you have to dynamically pass some data to a component you pass as a prop
- You can pass any number of props
- Many developer do "Destructuring on the fly" to get separate props key. const ({resName, cuisine})=>{}.

# Config Driven UI
- Config driven UI, swiggy uses this technique
- Latest practice in industry
- In this frontend is controlled by config, all the UI is driven by config (the api response)
- This is how big applications are build for regions
- With this you can send different offers, themes for a area.
- UI layer + Data layer both together makes front-end.
- When you are building large scale applications you put all your images in CDN to make faster access

# Map fxn
- React says don't use index as keys, it is a bad practice. It is an anti-pattern.
- Not using keys (not acceptable) <<<<< Index as keys <<<<<<<<<< unique id (best practice)

# Unique key property
- Whenever you are looping over any list you have to give a key
- key is a reserved keyword, you have to pass a uniqueId here
- You always have to give keys, never forget about it
- Why, we need keys?
    - When we have components at same level (the components which we build through looping), so what happens these components need
    to have unique ids. Because without keys react will not able to identify which component is old and which newly added so it will
    re-render all the components. Even if it comes at start, middle, end, anywhere react don't have any way to tell which is new and which is old. So, it treat all the restaurant card as same.
    - This is a great optimization as you just add keys, and using it react will know it is new or old and this will be used for deciding render a component or not.
