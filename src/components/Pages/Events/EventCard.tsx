import React, { FunctionComponent } from "react";
import { EventInterface } from "./Events";
import { useMediaQuery } from "@mui/material";

export interface Props {
  event: EventInterface;
  index: number;
}

export const EventCard: FunctionComponent<Props> = ({ event, index }) => {
  const narrow = useMediaQuery("(max-width:768px)");

  function getEventCardClass(): string {
    if (narrow) {
      return "event-card";
    } else {
      return index % 2 === 0 ? "event-card" : "event-card-right";
    }
  }

  return (
    <div className={getEventCardClass()}>
      <img src={event.imgUrl} alt="champagne glasses"></img>
      <div className={"event-details"}>
        <h2>{event.name}</h2>
        <h3>{event.date}</h3>
        <p>
          {event.location}
          <br />
          {event.time}
          <br />
          {event.attire}
        </p>
        {event.directionsUrl && (
          <a className={"directions-link"} href={event.directionsUrl}>
            <span>Directions</span>
          </a>
        )}
      </div>
    </div>
  );
};
