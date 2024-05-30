import { render, screen } from "@testing-library/react";
import RestoCard from "../RestoCard";
import { withPromotedLabel } from "../RestoCard";
import MOCK_DATA from "../mocks/restoCard.json";
import "@testing-library/jest-dom";

it("Should render Resto Card with props data", () => {
  render(<RestoCard resData={MOCK_DATA} />);
  const name = screen.getByText("Pizza Hut");
  expect(name).toBeInTheDocument();
});

it("Should render Resto Card with promoted label", () => {
  // test case for HOC: Promoted Label

  const RestaurantPromoted = withPromotedLabel(RestoCard);
  render(<RestaurantPromoted resData={MOCK_DATA} />);
  const promoted = screen.getByText("Promoted");
  expect(promoted).toBeInTheDocument();
});
