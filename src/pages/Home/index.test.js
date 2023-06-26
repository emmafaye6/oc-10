import {
  findByTestId,
  fireEvent,
  getByTestId,
  render,
  screen,
} from "@testing-library/react";
import Home from "./index";
import { toContainElement } from "@testing-library/jest-dom/dist/matchers";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});

describe("When a page is created", () => {
  it("should display a list of events", async () => {
    //  to implement functional test
  });

  // // it("should display a list of people", () => {
  // //   // to implement, functional test
  // // });

  it("should display a footer", async () => {
    const { getByTestId } = render(<Home />);
    const footer = getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
  // CHANGE: added a unit test here.

  it("should display an event card with the last event", () => {
    //  to implement functional test
  });
});
