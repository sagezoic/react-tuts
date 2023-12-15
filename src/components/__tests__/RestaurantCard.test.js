import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with Props Data", ()=>{
    render(<RestaurantCard res={MOCK_DATA} />);

    const name = screen.getByText("KFC");

    expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with Promoted label", ()=>{
    
    // Homework - test HOC : withPromotedLabel()
    // render(<RestaurantCard res={MOCK_DATA} />);

    // const name = screen.getByText("KFC");

    // expect(name).toBeInTheDocument();
});