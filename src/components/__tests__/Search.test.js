import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import MOCK_DATA from "../mocks/resListApiData.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("Should Search Res List for pizza input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const searchButton = screen.getByRole("button", { name: "search" });
  const inputBox = screen.getByTestId("search-input");

  //before search res list to be 8
  const resCards = screen.getAllByTestId("res-card");
  expect(resCards.length).toBe(9);

  //trigger search by onchange and click events

  fireEvent.change(inputBox, { target: { value: "pizza" } });
  fireEvent.click(searchButton);
  const resCardsAfterSearch = screen.getAllByTestId("res-card");

  expect(resCardsAfterSearch.length).toBe(1);
});

it("Should Filter Top Rated resto", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const filterButton = screen.getByRole("button", {
    name: "Top rated restaurants",
  });
  expect(filterButton).toBeInTheDocument();
  const resList = screen.getAllByTestId("res-card");
  expect(resList.length).toBe(9);
  fireEvent.click(filterButton);
  const resAfterFilter = screen.getAllByTestId("res-card");
  expect(resAfterFilter.length).toBe(6);
});
