import { Button, TextField } from "@mui/material";
import React, { FormEvent, FunctionComponent, useState } from "react";
import { Rsvp, Guest } from "../../Model/Rsvp.interface";

export interface Props {
  rsvps: Rsvp[];
  setCurrentRsvp: (rsvp: Rsvp) => void;
}

const initialFormState = {
  firstName: "",
  lastName: "",
};

export const RsvpSearchForm: FunctionComponent<Props> = ({
  rsvps,
  setCurrentRsvp,
}: Props) => {
  // State
  const [formData, setFormData] = useState(initialFormState);

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();

    findCurrentRsvp(formData);
  }

  function findCurrentRsvp(formData: { firstName: string; lastName: string }) {
    const foundRsvp = rsvps.find(
      (rsvp) =>
        !!rsvp.guests.find(
          (guest: Guest) =>
            guest.name.toLowerCase() ===
            `${formData.firstName.toLowerCase()} ${formData.lastName.toLowerCase()}`
        )
    );
    if (foundRsvp) {
      setCurrentRsvp(foundRsvp);
    }
  }

  return (
    <>
      <>
        <h3>
          Please enter your first and last name as they appear on your
          invitation
        </h3>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <TextField
            value={formData.firstName}
            id="standard-basic"
            label="First Name"
            variant="standard"
            onChange={({ target }) =>
              setFormData({ ...formData, firstName: target.value })
            }
          />
          <TextField
            value={formData.lastName}
            id="standard-basic"
            label="Last Name"
            variant="standard"
            onChange={({ target }) =>
              setFormData({ ...formData, lastName: target.value })
            }
          />
          <Button type="submit" name="submit">
            Submit
          </Button>
        </form>
      </>
    </>
  );
};
