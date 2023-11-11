// npm doesn't mean node package manager, it doesn't have any full form.
// npm manages packages, it is a package manager, it is standard repository for all the js packages

// package.json is the configuration for the npm

// packages vs dependencies

// There are two types of dependencies that can be installed:
// 1. Dev Dependencies: This dependency is required in the development phase
// 2. Normal Dependencies: These dependencies are used in production also.

// The most important package in our project is the "bundler". When you have normal html, css, js so our whole code need to get cleaned
// and packed in one packages and it will bundle your app so that it can be shipped to production. E.g. web pack, parcel, vite.
// create-react-app behind the scenes uses webpack bundler.

// In this project we will use parcel bundler as it is easy to configure and powerful too
// npm install -D parcel, we are installing parcel as dev dependency
// "parcel": "^2.10.2" ^ : "this is known as caret" (it automatically upgrades to minor version E.g. 2.8.1 to 2.10.1), 
// you can put ~ (it automatically upgrades to major version E.g. 2 to 3) over the caret. So, prefer caret over tilde as it can break your code.
// Read about caret and tilde in package.json

// We also got a new file called package-lock.json Why we have this file? Do we need both the files package.json and package-lock.json?
// package.json: It keeps track of the approx. package's version.
// package-lock.json: It keeps the track of the exact version of package which is installed.
// Why package-lock.json is imp?
// It helps to keep the integrity of the package, so that same code goes to production if any kind of change happens then SHA will change
// node_modules has all the code that npm have fetched from its repository. It is collection of dependencies. It has many packages due to transitive dependencies (parcel 
// depends on another packages and other packages can have further dependencies so npm fetch everything required)

// How many package.json and package-lock.json can our project have?
// Each node_module package have its package-lock.json and package.json.
// It is important to put package.json and package-lock.json on the github repo., you can ignore node_modules for git as if you have package.json
// and package-lock.json you can recreate all the node_modules.
// So, whatever you can regenerate don't put it on git, git is only for essential things.

// bundling our app with parcel
// npx parcel source_file_of_app --> With this a local server will be created and ignite your app, it will make a development build and
// host it to the localhost:1234
// npx means executing a package 

// cdn links are not a good way to bring react into your application
// Reason:
// 1. Fetching from cdn is a costly operation, 
// 2. It is good if you have these packages on machine

// npm install react or npm i react
// npm install react-dom

// 

// import React from "react"; // This react refers to the node_modules and we are importing from there
// import ReactDOM from "react-dom";

// Error coming after adding the above imports
// @parcel/transformer-js: Browser scripts cannot have imports or exports.
// /Users/rakeshpandey/Dev/Learning/react-tuts/App.js:51:1
//   50 | 
// > 51 | import React from "react"; // This react refers to the node_modules and w
// >    | ^^^^^^^^^^^^^^^^^^^^^^^^^^
//   52 | import ReactDOM from "react-dom";
//   53 | 
// /Users/rakeshpandey/Dev/Learning/react-tuts/index.html:42:5
// 💡 Add the type="module" attribute to the <script> tag.
// 📝 Learn more

// This error is coming because normal JS files can't have import
// So, we have to tell the browser that this is not a normal JS file, it is a module. You have to change the type="module"
// module vs normal js

// What parcel is doing for us?
// -Creates a Dev Build
// -Creates a Local Server
// -Automatically refreshing the webpage as you do some change in the code, HMR=Hot Module Replacement
// -Parcel uses File Watcher Algorithm to keep track of all the file changes, this algorithm is written in C++, 
// every time you save your code parcel re-builds the app
// -It uses Caching for Faster Builds
// -It can also do Image Optimization
// -Minification of code (Needed for making production app)
// -Bundling of code (Needed for making production app)
// -Compression of code (Needed for making production app)
// NOTE: React is making our app fast but there are so many things which make our aap fast like the bundler. And parcel also can't do 
// everything on its own so you need other dependent libraries
// -It also do something called consistent hashing
// -Code splitting
// -Differential Bundling: It just bundle your app according to browsers- support older browsers
// -Diagnostics
// -Error Handling
// -HTTPS Hosting
// -Tree Shaking: remove unused code for you
// Read parcel documentation
// Diff dev and prod bundles, prod bundle is more optimized as compared to dev
// npx parcel build index.html --gives prod bundle

// As you will execute above command you will get error
// Build failed.

// @parcel/namer-default: Target "main" declares an output file path of "App.js" which does not match the compiled bundle type "html".

// /Users/rakeshpandey/Dev/Learning/react-tuts/package.json:5:11
//   4 |   "description": "This is my react tuts notes",
// > 5 |   "main": "App.js",
// >   |           ^^^^^^^^ Did you mean "App.html"?
//   6 |   "scripts": {
//   7 |     "test": "jest"

// 💡 Try changing the file extension of "main" in package.json.

// The error mainly came due to the main file got conflict with the main given in the package.json. So, you have to remove that from
// package.json

// dist: it contains the dev build and this build is then hosted on local server by parcel. This directory contains the prod build also
// when we execute the command
// parcel-cache: it contains cache of our app, this is cache is used by the parcel to rebuild our app, it modifies this cache whenever we
// make any changes to our app and re-builds app in dist

//dist, .parcel-cache from parcel can be reproduced so we will not push it to git

// Browserslist
// go to browserslist.dev
// this will help us to make our app compatible with different browsers
// our app will definitely work in these browsers, others might or might not work
// e.g. "last 2 Chrome version",
//   "last 2 Firefox version",
// parcel takes care of this, using this list parcel will only add code which will make it run on these browsers and make sure it runs
// on these browsers and creates bundle
// add it inside package.json

//This will make our app faster.

// Parcel is a beast, it gives super power to our app

// So, react+parcel is making our app fast.
// How?
// 1. By optimizing our code
// 2. Tree Shaking
// 3. Code splitting
// 4. Bundling our app
// + Whatever parcel is doing

// vscode icons cool extension

// __**__ = is dunder
import React from 'react';
import ReactDOM from 'react-dom/client';
const child1 = React.createElement("div", 
    { id: "child" }, 
    [
        React.createElement("h1", {}, "Are you ready 🚀"),
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