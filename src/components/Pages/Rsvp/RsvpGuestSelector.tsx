import { Checkbox, FormControlLabel, FormLabel } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Rsvp, Guest } from "../../Model/Rsvp.interface";

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

  function getGuestName(guest: Guest): string {
    if (guest.middleName) {
      return guest.firstName + " " + guest.middleName + " " + guest.lastName;
    } else {
      return guest.firstName + " " + guest.lastName;
    }
  }

  return (
    <>
      <FormLabel>Who will be attending?</FormLabel>
      {currentRsvp?.guests?.map((guest, index) => (
        <FormControlLabel
          key={guest.firstName}
          label={getGuestName(guest)}
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
