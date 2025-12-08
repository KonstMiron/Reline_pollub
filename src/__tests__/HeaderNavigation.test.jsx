import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../widgets/header/Header";

test("kliknięcie w link KONTAKT jest możliwe", async () => {
  render(<Header />);
  const user = userEvent.setup();

  const contactLink = screen.getByText(/KONTAKT/i);
  expect(contactLink).toBeTruthy();

  await user.click(contactLink);

  expect(contactLink).toBeTruthy();
});