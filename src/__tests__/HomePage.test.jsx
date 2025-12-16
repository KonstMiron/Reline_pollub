import { render, screen } from "@testing-library/react";
import HomePage from "../pages/home";

test("Strona główna wyświetla sekcje Hero, Laser oraz About", () => {
  render(<HomePage />);

  const heroTexts = screen.getAllByText(/Umów się na wizytę!/i);
  expect(heroTexts.length).toBeGreaterThan(0);

  const laserTitle = screen.getByRole("heading", { name: /LASEROWE USUWANIE/i, level: 2 });
  expect(laserTitle).toBeTruthy();

  const aboutTitles = screen.getAllByText(/SKIN & INK/i);
  expect(aboutTitles.length).toBeGreaterThan(0);
});