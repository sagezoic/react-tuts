// first arg: tag name, second arg: attributes for tag, thrid arg: Content
const heading = React.createElement(
    "h1", 
    { id: "heading",
      abc: "xyz" },
    "Hello World from React!"
); // This will just create a h1 element

console.log(heading); // It is a react object (Just a normal JS object in the end.)
//Props are children and the attributes that we are passing (id, abc, hello msg).

// React needs root where it can do all DOM manipulation stuff! Everything that will be rendered will be here.
// const root = ReactDOM.createRoot(document.getElementById("root")); // This will render heading element inside root.
// root.render(heading); // This function is just taking the React object and converting it into a HTML tag and putting on the browser

// Nesting of elements using react

/*
 * <div id="parent">
 *  <div id="child">
 *      <h1>Nested Heading1....</h1>
 *      <h2>Nested Heading2....</h2>
 *  </div>
 * </div>
 * 
 * ReactElement(Object) => HTML(Browser Understands)
 */
// const child = React.createElement("div", 
//     { id: "child" }, 
//     [
//         React.createElement("h1", {}, "Nested Heading1...."),
//         React.createElement("h2", {}, "Nested Heading2....")
//     ]
// );

// const parent = React.createElement("div", { id: "parent" }, child);

/*
 * <div id="parent">
 *  <div id="child1">
 *      <h1>Nested Heading1....</h1>
 *      <h2>Nested Heading2....</h2>
 *  </div>
 *  <div id="child2">
 *      <h1>Nested Heading1....</h1>
 *      <h2>Nested Heading2....</h2>
 *  </div>
 * </div>
 *
 */

const child1 = React.createElement("div", 
    { id: "child" }, 
    [
        React.createElement("h1", {}, "Nested Heading1...."),
        React.createElement("h2", {}, "Nested Heading2....")
    ]
);

const child2 = React.createElement("div", 
    { id: "child" }, 
    [
        React.createElement("h1", {}, "Nested Heading1...."),
        React.createElement("h2", {}, "Nested Heading2....")
    ]
);

const parent = React.createElement("div", { id: "parent" }, [child1, child2]);

// You can see your code doesn't look good and it will even harder to read once it will become complex. But we have something that will save
// us which is JSX. This will make our life easy and help us to make HTML tags. After this point we will not use React.createElement() directly.

const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(parent); 