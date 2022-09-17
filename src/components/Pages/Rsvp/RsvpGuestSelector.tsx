import { Checkbox, FormControlLabel, FormLabel } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Rsvp } from "../../Model/Rsvp.interface";

export interface Props {
  currentRsvp: Rsvp;
  setCurrentRsvp: (rsvp: Rsvp) => void;
}

export const RsvpGuestSelector: FunctionComponent<Props> = ({
  currentRsvp,
  setCurrentRsvp,
}) => {
  function handleCheckboxChange(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ): void {
    if (currentRsvp) {
      const updatedCurrentRsvp = { ...currentRsvp };
      updatedCurrentRsvp.guests[index].isAttending = e.target.checked;

      setCurrentRsvp(updatedCurrentRsvp);
    }
  }

  return (
    <>
      <FormLabel>Who will be attending?</FormLabel>
      {currentRsvp?.guests?.map((guest, index) => (
        <FormControlLabel
          key={guest.name}
          label={guest.name}
          control={
            <Checkbox
              color="primary"
              checked={guest.isAttending}
              onChange={(e) => handleCheckboxChange(e, index)}
            />
          }
        />
      ))}
    </>
  );
};
