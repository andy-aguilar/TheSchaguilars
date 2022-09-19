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
  directionsUrl: string;
}

const events: EventInterface[] = [
  {
    name: "welcome party",
    date: "03 10 23",
    location: "Porta Hotel Antigua",
    time: "Six o'clock",
    attire: "Festive Cocktail Attire",
    imgUrl:
      "https://the-schaguilars.s3.us-east-2.amazonaws.com/welcome-party.jpeg",
    directionsUrl:
      "https://www.google.com/maps/place/Porta+Hotel+Antigua/@14.5531311,-90.7358909,17z/data=!3m1!4b1!4m8!3m7!1s0x85890e72a7e528ed:0x15ce28f4b679dde2!5m2!4m1!1i2!8m2!3d14.5531311!4d-90.7337022",
  },
  {
    name: "the ceremony",
    date: "03 11 23",
    location: "Convento Santa Clara",
    time: "Three o'clock",
    attire: "Formal Attire",
    imgUrl:
      "https://the-schaguilars.s3.us-east-2.amazonaws.com/santa-clara.jpeg",
    directionsUrl:
      "https://www.google.com/maps/place/Convento+Santa+Clara/@14.5551021,-90.7306821,17z/data=!3m1!4b1!4m5!3m4!1s0x85890e72482b6c03:0x91577c31f02ecc05!8m2!3d14.5551021!4d-90.7306821",
  },
  {
    name: "the reception",
    date: "03 11 23",
    location: "Pensativo House Hotel",
    time: "Five o'clock",
    attire: "Formal Attire",
    imgUrl: "https://the-schaguilars.s3.us-east-2.amazonaws.com/pensativo.jpeg",
    directionsUrl:
      "https://www.google.com/maps/place/Pensativo+House+Hotel/@14.5517165,-90.735557,17z/data=!3m1!4b1!4m8!3m7!1s0x85890e6d3d349ab5:0xaabaf4efdd3252f7!5m2!4m1!1i2!8m2!3d14.5517165!4d-90.7333683",
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

      <div className="real-page-body">
        <div
          className="sub-header"
          style={{
            backgroundImage: `url("https://the-schaguilars.s3.us-east-2.amazonaws.com/backgroundImage.jpeg")`,
          }}
        >
          <h1>The Weekend</h1>
        </div>

        <div className={"page-body large"}>
          <div className="event-container">{renderEvents()}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
