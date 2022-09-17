import { Paper } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Rsvp, Guest } from "../../Model/Rsvp.interface";

export interface Props {
  currentRsvp: Rsvp;
  setCurrentRsvp: (rsvp: Rsvp) => void;
}

export const RsvpIsAttendingTiles: FunctionComponent<Props> = ({
  currentRsvp,
  setCurrentRsvp,
}) => {
  function handleRsvpYes(): void {
    if (currentRsvp) {
      setCurrentRsvp({
        ...currentRsvp,
        isFamilyAttending: true,
        hasRsvped: true,
      });
    }
  }

  function handleRsvpNo(): void {
    const updatedGuests: Guest[] = currentRsvp.guests.map((guest) => {
      return { ...guest, isAttending: false };
    });

    if (currentRsvp) {
      setCurrentRsvp({
        ...currentRsvp,
        isFamilyAttending: false,
        hasRsvped: true,
        guests: updatedGuests,
      });
    }
  }

  function isCurrentRsvpSelected(isSelected: boolean): boolean {
    if (isSelected) {
      return !!currentRsvp.hasRsvped && !!currentRsvp.isFamilyAttending;
    } else {
      return !!currentRsvp.hasRsvped && !currentRsvp.isFamilyAttending;
    }
  }

  return (
    <>
      <h3>{`Hello ${currentRsvp.addressLabel}!`}</h3>
      <h4>Will you be attending?</h4>
      <div className="response-buttons">
        <Paper
          className={
            isCurrentRsvpSelected(true)
              ? "response-button selected"
              : "response-button"
          }
          elevation={3}
          onClick={handleRsvpYes}
        >
          {currentRsvp.guests.length > 1
            ? "We joyfully accept the intivation!"
            : "I joyfully accept the invitation!"}
        </Paper>
        <Paper
          className={
            isCurrentRsvpSelected(false)
              ? "response-button selected"
              : "response-button"
          }
          elevation={3}
          onClick={handleRsvpNo}
        >
          {currentRsvp.guests.length > 1
            ? "We must regretfully decline."
            : "I must regretfully decline."}
        </Paper>
      </div>
    </>
  );
};
