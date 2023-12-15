import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { Header } from "../Header";
import  Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>Promise.resolve(MOCK_DATA),
    })
});

it("Should Load Restaurant Menu Component", async ()=>{
    await act (async ()=>render(
        <BrowserRouter>
        <Provider store = {appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
        </Provider>
        </BrowserRouter>
    ));
    const accordianHeader = screen.getByText("Burgers (13)");

    fireEvent.click(accordianHeader);

    const foodItems = screen.getAllByTestId('foodItems');
    
    expect(foodItems.length).toBe(13);

    const addBtns = screen.getAllByRole('button', {name: 'Add +'});

    fireEvent.click(addBtns[0]);

    expect(screen.getByText('Cart - (1 items)')).toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    expect(screen.getByText('Cart - (2 items)')).toBeInTheDocument();

    // Checking the cart page have 2 items or not, below one is going to give the total no of food items
    // 13 original and 2 from the cart = 15 items.
    expect(screen.getAllByTestId('foodItems').length).toBe(15);

    fireEvent.click(screen.getByRole('button', {name:'Clear Cart'}));
    
    expect(screen.getByText('Cart is empty Add Items to the cart!')).toBeInTheDocument();
    expect(screen.getAllByTestId('foodItems').length).toBe(13);
});