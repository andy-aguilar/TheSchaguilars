import { Paper } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Rsvp, Guest } from "../../Model/Rsvp.interface";

export interface Props {
  currentRsvp: Rsvp;
  setCurrentRsvp: (rsvp: Rsvp) => void;
  advanceStepper: () => void;
  handleRsvpNoSubmit: (rsvp: Rsvp) => void;
}

export const RsvpIsAttendingTiles: FunctionComponent<Props> = ({
  currentRsvp,
  setCurrentRsvp,
  advanceStepper,
  handleRsvpNoSubmit,
}) => {
  function handleRsvpYes(): void {
    advanceStepper();
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

    handleRsvpNoSubmit({
      ...currentRsvp,
      isFamilyAttending: false,
      hasRsvped: true,
      guests: updatedGuests,
    });
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
          <p>
            {currentRsvp.guests.length > 1
              ? "We joyfully accept the intivation!"
              : "I joyfully accept the invitation!"}
          </p>
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
          <p>
            {currentRsvp.guests.length > 1
              ? "We must regretfully decline."
              : "I must regretfully decline."}
          </p>
        </Paper>
      </div>
    </>
  );
};
