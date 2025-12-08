import { render, screen } from "@testing-library/react";
import Hero from "../pages/home/Hero/Hero";

test("Hero component renders correctly", () => {
  render(<Hero />);

  const ctaText = screen.getByText(/Umów się na wizytę!/i);
  const booksyLink = screen.getByText(/BOOKSY/i);

  expect(ctaText).toBeTruthy();
  expect(booksyLink).toBeTruthy();
});