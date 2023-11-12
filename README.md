# react-tuts

# Episode 3

# Scripts
- If you are going to a new company and you want to know how to start the app, just go to package.json and look for scripts
- To run a script use "npm run <name_of_script>"
- For start you can use npm run start or npm start (it is only applicable for start)
- If you are doing "npm start", that means you are calling "npm run start" and this "npm run start" behind the scene calling parcel index.html
- So, now you don't have to write long command like "npx parcel index.html"

# React Element
- In the end of the day React Element is just a obj stored inside a variable.

# JSX
- It was clear that if you will use React.createElement to create elements will not be developer friendly. So, FB developers created JSX
to help developer community.
- We can write react without JSX also but it will be really tiresome.
- JSX is HTML-like or XML-like syntax. REMEMBER: JSX is a syntax
- JS is a code that our JS Engine can understand.
- JSX is not a pure valid JS as it can't be understood by JS Engine.
- JSX is transpiled before it reaches the JS Engine. It means it is converted to a code which JS Engine can understand.
- Parcel does the transpiling, Parcel uses Babel to transpile the code. JSX => Babel => JS
- Babel is not developed by FB guys
- JSX => Babel transpiles it to React.createElement => React Element - JS Object => HTMLElement(render)
- Bracket Pair Colorizer, Better Comments
- {} Inside these curly braces you can run any piece of JS Code and will work with JSX
- See, what if our data to be printed is coming from an api, and somehow that api sends something malicious code and we know anything inside {} will execute the code. This can steal a lot of things from browser by executing JS on browser. This is known as Cross-side-scripting.
- JSX prevents cross-side-scripting attack. It prevents it by sanitizing the code which is going to be executed.

# React Component
- Everything in react is a component
- A header, footer, heading, card, search bar, ....
- There are two types of components in React:
    - Class based components - Old way
    - Functional components - New way - It is just a normal JS function. A function which returns a piece of JSX code. or You 
    can say a function which returns a react component.
- Every time you create a component start its name in caps, otherwise you will get error. It's react way to understand it is a 
component.
- Difference between the React Element and React Component?
- Component Composition
- You can compose Component, element inside another component. And vice-versa is possible to.
- <Component/> or <Component></Component> both things are same. Use it to place your component inside other in JSX.
- You can even call a component like { Component() }, it will give the same result.

NOTE: Your code is readable because you are using JSX.

