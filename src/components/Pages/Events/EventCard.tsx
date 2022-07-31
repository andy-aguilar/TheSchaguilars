import React, { FunctionComponent } from "react";
import { EventInterface } from "./Events";

export interface Props {
  event: EventInterface;
  index: number;
}

export const EventCard: FunctionComponent<Props> = ({ event, index }) => {
  return (
    <div className={index % 2 === 0 ? "event-card" : "event-card-right"}>
      <img src={event.imgUrl} alt="champagne glasses"></img>
      <div className={"event-details"}>
        <h2>{event.name}</h2>
        <h3>{event.date}</h3>
        <p>{event.location}</p>
        <p>{event.time}</p>
        <p>{event.attire}</p>
      </div>
    </div>
  );
};
