import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/resMenuApiData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("should add items to card from res menu", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Bucket Biryani's(4)");
  expect(accordionHeader).toBeInTheDocument();
  //click on accordion
  fireEvent.click(accordionHeader);

  // items under accordion
  const items = screen.getAllByTestId("food-item");
  expect(items.length).toBe(4);

  const addBtns = screen.getAllByRole("button", { name: "ADD" });
  const cart = screen.getByText("Cart-(0 items)");
  expect(cart).toBeInTheDocument();

  // clicks on fst item add button
  fireEvent.click(addBtns[0]);

  // now check the count of cart in header
  const cartAfterAdd = screen.getByText("Cart-(1 items)");
  expect(cartAfterAdd).toBeInTheDocument();

  // clicks on second item add button
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart-(2 items)")).toBeInTheDocument();

  //check Cart page

  const itemsInCart = screen.getAllByTestId("food-item");
  expect(itemsInCart.length).toBe(6); //items add is 2 but 6 includes the accordion items also

  //clear cart

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(
    screen.getByText("Your cart is empty. Please add items")
  ).toBeInTheDocument();
});
