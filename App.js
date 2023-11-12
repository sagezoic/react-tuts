import React from 'react';
import ReactDOM from 'react-dom/client';

// React Elements: Just in DOM we have DOM Elements in react we have React Elements.
// React.createElement => React Element - JS Object => HTMLElement(render)

// To deal with the browsers we will use ReactDOM
const heading = React.createElement("h1", { id: "heading"}, "Hello World!"); // We write elements this way in React Core
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// JSX
// JSX is not HTML inside JS, note this down.
// JSX is different from HTML.
// Creating React Element using JSX
const jsxHeading = <h1 id='heading' tabIndex="5" >Namaste Duniya!</h1> // We write elements this way in JSX

//Both are the same thing.
console.log(jsxHeading);
console.log(heading);

// root.render(jsxHeading);
//JSX is not part of React Core

// So from this point of time we are not going to use React Core way to write element.

// React Functional Component
const HeadingComponent = ()=>{
    return <h1>This is a Functional Component.</h1>
}

const HeadingComponent2 = ()=>(
                                <div id='container'>
                                    <HeadingComponent/> {/*Rendering another component inside other. This is known as component composition */ }
                                    {heading} {/* Rendering React component in component */}
                                    <h1 id='heading'>
                                        This is another way of writing Functional Component. Same thing as above one
                                    </h1>
                                </div>
                            );

// Rendering a component
// root.render(<HeadingComponent/ >);
root.render(<HeadingComponent2/ >);

// It is very easy to convert a React element to React component
const HeadingElementToComp = ()=><h1 id='heading' tabIndex="5" >Namaste Duniya!</h1>

// Nesting of React Element
const elem = <span>React Element, {heading}, < HeadingElementToComp /> { HeadingElementToComp() }</span>