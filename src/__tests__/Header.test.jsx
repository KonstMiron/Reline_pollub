import { render, screen } from "@testing-library/react";
import Header from "../widgets/header/Header";

test("Header wyświetla logo i główne linki nawigacji", () => {
  render(<Header />);

  const logo = screen.getByAltText("R'LINE Logo");
  const homeLink = screen.getByText("STRONA GŁÓWNA");
  const priceLink = screen.getByText("CENNIK");

  expect(logo).toBeTruthy();
  expect(homeLink).toBeTruthy();
  expect(priceLink).toBeTruthy();
});