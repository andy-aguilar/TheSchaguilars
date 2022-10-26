import { Checkbox, FormControlLabel, FormLabel } from "@mui/material";
import React, { FunctionComponent, ReactNode } from "react";
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

  function getGuestName(guest: Guest): ReactNode {
    const guestName: string = guest.middleName
      ? guest.firstName + " " + guest.middleName + " " + guest.lastName
      : guest.firstName + " " + guest.lastName;

    return <p className="checkbox-label">{guestName}</p>;
  }

  return (
    <div className="rsvp-field">
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
    </div>
  );
};
