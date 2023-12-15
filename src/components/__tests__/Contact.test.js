import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import "@testing-library/jest-dom" // Importing whole library

describe("Contact Us Page Test Case", ()=>{
    test("Should load contact us component", ()=>{
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        // Assertion
        // At this point if your try to run your test cases it will throw error and 
        expect(heading).toBeInTheDocument(); // Whenever we have check for something is loaded in UI or not we will use this function.
    });
    
    test("Should load button inside Contact component", ()=>{
        render(<Contact/>);
        // const button = screen.getByRole("button");
        const button = screen.getByText("Submit"); // This get any element with the text submit anywhere in our rendered component.
        
        // Assertion
        expect(button).toBeInTheDocument();
    });
    
    test("Should load input name inside Contact component", ()=>{
        render(<Contact />);
        const input = screen.getByPlaceholderText("name");
    
        // Assertion
        expect(input).toBeInTheDocument();
    });
    
    test("Should load two input boxes on Contact component", ()=>{
        render(<Contact />);
    
        // This is known as Querying.
        const inputBoxes = screen.getAllByRole("textbox"); // This returns a JSX element -- React element (React fiber node) -- Virtual DOM Object
        // Assertion
        expect(inputBoxes.length).toBe(2);
    })
})
