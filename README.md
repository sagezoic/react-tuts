# react-tuts

# Episode 13
- Testing your app
- JEST framework

# Why Testing?
- Even if we write one single line of code anywhere in our app, that may cause bug somewhere else in our app.
- WE SHOULD BE WORRY ABOUT EVERY SINGLE LINE OF THE CODE THAT WE WRITE IN OUR APP.
- Testing is very very important in our app, it will become more important when it comes to large scale application.

# Types of Testing (Developer)
- Manual Testing
- Unit Testing: You test your react component in isolation. Testing one component in isolation.
- Integration Testing: In integration testing, there are multiple components and they are talking to each other and they develop a flow and action in our react application and that we will test.
- End-to-End Testing - e2e Testing: From user landing to our app to leaving our app. Simulating what the user will do throughout the app.
- As a developer we are majorly concerned about the first two types of testing.

# Testing Library
- React Testing Library: It is the standard way of writing test cases for your app
- History of React Testing Library: There used to be DOM Testing Library, and from there they have developed a specific library for testing react only. And they have similar libraries to test other frameworks too.
- React Testing Library is built on DOM Testing Library.
- React Testing Library also uses a framework called JEST which is a delightful JS Testing Framework.
- JEST is a standard to write test cases when it comes to JS.
- JEST internally uses Babel.
- So, we will be needing React Testing Library and JEST.
- React Testing Library: npm install -D @testing-library/react
- Jest: npm install -D jest

# JEST
- We are going to use JEST along with babel, so we will also require few other dependencies too
- https://jestjs.io/docs/getting-started
- Since, parcel also uses the Babel internally so we have to make some changes so that it can work with the testing library. It happens because parcel have its own configuration for babel and now we are trying to add extra configuration, so parcel gets confused.
- Read it: https://parceljs.org/languages/javascript/#babel
- 

# Setting up the testing
- Install React Testing Library
- Installed JEST
- Installed Babel Dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- JEST Configuration: npx jest --init

# JSDOM
- When you run test cases there is no server running, no browser running. They need an environment to run, they need a runtime where testing code will be executed. For that we uses jsdom.
- JSDOM is a library which parses and interacts with assembled HTML just like a browser. The benefit is that it isn't actually a browser. Instead, it implements web standards like browsers do. You can feed it some HTML, and it will parse that HTML.
- npm install --save-dev jest-environment-jsdom (note: --save-dev is same as -D)

# Basics of Testing
- __tests__ .js/.ts files will be considered as a test file
- Headers.test.js/ Headers.test.ts/ Headers.spec.js, Headers.spec.ts all these files will be considered as test files.
- __ it is known as dunder, we create folder with this name as it is rare that someone will create 

# Writing a test case
- test("description of your test", function_to_test)
- In every test we expect an assertion (expect().toBe()).
- Even if you write empty test case it will work (i.e. it will pass the test).

# Running test cases
- To run test cases we can use npm run test

# Writing test cases in React
- You will need render() from @testing-library/react to render the react component.
- We will use screen.getByRole() to get a rendered element
- Getting error: Add @babel/preset-react
- We have to add above library in our application because JSX is not working. So, to make JSX work in test cases. Command: npm i -D @babel/preset-react 
- Include @babel/preset-react inside babel config
- This babel preset-react is helping our testing library (react-testing-library) to convert the JSX code to HTML so that it can read properly.
- Now, try again running the app. But it will fail again, error "toBeInTheDocument is not a function".
- This error is coming because we haven't installed a library. So, we have to take help from one more library, npm i -D @testing-library/jest-dom
- Test Cases : Render --> Query --> Assert

# Grouping Test Cases
- You can group multiple test cases inside describe block
- Everything works same as working individual test cases
- You can have nesting of describe block
- Jest tells you that you can name the test() block as it() also. There is no difference between test and it, they are just alias of each other.
- They name it like this just because "it" is easier to read with the message "Should...."
- It is recommended to use one of the two conventions.

# Testing the Header
- The js-dom understands the JSX but it doesn't understand the react-redux code. 
- So, as we are running the test cases in isolation it is throwing error to resolve it we have to provide the redux store to it.
- Now, the next error it will throw, it is not able to understand the Link. To resolve it you have to wrap your component around the BrowserRouter.
- fireEvent: with this you can perform an action while testing

# Testing Restaurant Card
- test component which is expecting props.
- to pass this prop we will be requiring some mock data {Mocks}.
- H/W: Write test case for the "with promoted label".

# Testing multiple components- Integration Testing - Search Flow
- When you will try to run your test case to test Body, it is going to throw error "fetch is not defined". It is because fetch is a browser API, it is not in the JS DOM (which is a browser like thing). So, it doesn't understand the fetch. So, we have to fake the fetch, writing mockFetch function.
- You can define a global mock function using the function given by jest jest.fn().
- These test cases can't make any actual api calls, cuz they are working in a browser like environment rather than browser.
- You can add "watch-test": "jest --watch" so that your test cases will be automatically run after any change.
- Whenever you have any async operation or state update wrap render into act fxn which comes from 'react-dom/test-utils'.
- When you don't have anything to search on you can use data-testid, give it to your tag and you can select you tag by it.
- Use fireEvent.change() to change a element.
- You can use fireEvent to do some kind of event in jsdom.

# Writing Last Testing Suit
- beforeAll(callback fx) : This function will be called before running all the test.
- beforeEach(callback fx) : This function will be called every time before running each the test. This is very helpful if you have to do some cleanup task.
- afterAll(callback fx) : It will run after completing all the test. It is called when all the test cases are done.f
- afterEach(callback fx) : This is called after each test.
- These all are helper functions,

# Setting up Testing in our app
- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel 
- Configure Parcel Config file to disable default babel transpilation 
- Jest  - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- npm i -D @testing-library/jest-dom
