import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resListMock";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// writing the mock fetch function
// Here we are trying to make a dummy fetch function exactly like our fetch function.
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search Res List for pizza text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(9);
  
  console.log(document.body.innerHTML);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId('searchInput');

  fireEvent.change(searchInput, { target: {value: "pizza"}});

  fireEvent.click(searchBtn);

  // screen should load 3 res card
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  console.log(document.body.innerHTML);
  expect(cardsAfterSearch.length).toBe(2);
});

it("Should filter Top Rated Restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  
  const cardsBeforeFilter = screen.getAllByTestId('resCard');
  expect(cardsBeforeFilter.length).toBe(9);

  const topRatedBtn = screen.getByRole("button", {name:"Top Rated Restaurant"});

  fireEvent.click(topRatedBtn);
  
  const cardsAfterFilter = screen.getAllByTestId('resCard');
  expect(cardsAfterFilter.length).toBe(7);
});
