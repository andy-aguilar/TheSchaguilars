import React, { FunctionComponent, ReactNode } from "react";
import { Footer } from "../../ReusableComponents/Footer";
import { Header } from "../../ReusableComponents/Header";
import { EventCard } from "./EventCard";
import "./event.css";

export interface EventInterface {
  name: string;
  date: string;
  location: string;
  time: string;
  attire: string;
  imgUrl: string;
}

const events: EventInterface[] = [
  {
    name: "welcome party",
    date: "03 10 23",
    location: "Porta Hotel Antigua",
    time: "Six o'clock",
    attire: "Festive Cocktail Attire",
    imgUrl: "/welcome-party.jpeg",
  },
  {
    name: "the ceremony",
    date: "03 11 23",
    location: "Convento Santa Clara",
    time: "Four o'clock",
    attire: "Formal Attire",
    imgUrl: "/santa-clara.jpeg",
  },
  {
    name: "the reception",
    date: "03 11 23",
    location: "Pensativo House Hotel",
    time: "Six o'clock",
    attire: "Formal Attire",
    imgUrl: "/pensativo.jpeg",
  },
  {
    name: "farewell brunch",
    date: "03 12 23",
    location: "LOCATION TBD",
    time: "TIME TBD",
    attire: "Casual Attire",
    imgUrl: "/brunch.jpeg",
  },
];

export const Events: FunctionComponent = () => {
  function renderEvents(): ReactNode[] {
    return events.map((event, index) => (
      <EventCard event={event} index={index} />
    ));
  }
  return (
    <div className="page-container">
      <Header />

      <div className={"page-body-large"}>
        <div className="event-container">{renderEvents()}</div>
      </div>
      <Footer />
    </div>
  );
};
