import {
  findByTestId,
  fireEvent,
  getByTestId,
  render,
  screen,
} from "@testing-library/react";
import Home from "./index";
import EventCard from "../../components/EventCard";

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
  it("should display a list of events", () => {
    const { container } = render(<Home />);
    expect(container.querySelector("#events")).toBeInTheDocument();
  });
  // CHANGE: added test here

  it("should display a list of people", async () => {
    render(<Home />);
    await screen.findByText("Samira");
    await screen.findByText("Directeur marketing");
    await screen.findByText("VP communication");

    const name = document.getElementsByClassName("PeopleCard__name");
    expect(name).toBeInTheDocument;
  });
  // CHANGE: added a test here

  it("should display a footer", () => {
    const { getByTestId } = render(<Home />);
    const footer = getByTestId("footer");
    expect(footer).toBeInTheDocument();
  });
  // CHANGE: added a test here.

  it("should display an event card with the last event", () => {
    render(
      <>
        <Home />
        <EventCard />
      </>
    );
    const lastEvent = screen.getByTestId("card-testid");
    const lastImage = screen.getAllByTestId("card-image-testid");
    expect(lastEvent).toBeInTheDocument();
    expect(lastEvent.getAttribute("class").includes("Eventcard--small"));
    expect(lastImage).not.toBeNaN();
    expect(lastImage).toBeDefined();
  });
  // CHANGE added a test here
});
