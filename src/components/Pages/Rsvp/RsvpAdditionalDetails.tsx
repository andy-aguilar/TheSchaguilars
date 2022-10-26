import { FormLabel, Stack, TextField } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Rsvp } from "../../Model/Rsvp.interface";

export interface Props {
  currentRsvp: Rsvp;
  setCurrentRsvp: (rsvp: Rsvp) => void;
}

export const RsvpAdditionalDetails: FunctionComponent<Props> = ({
  currentRsvp,
  setCurrentRsvp,
}) => {
  return (
    <div className="rsvp-field">
      <Stack spacing={2}>
        <FormLabel>Please provide some additional information:</FormLabel>
        <TextField
          value={currentRsvp?.emailAddress}
          id="standard-basic"
          label="Email address"
          color="primary"
          onChange={({ target }) =>
            setCurrentRsvp({ ...currentRsvp, emailAddress: target.value })
          }
        />
        <TextField
          value={currentRsvp?.dietaryRestrictions}
          id="standard-basic"
          label="Dietary restrictions"
          color="primary"
          onChange={({ target }) =>
            setCurrentRsvp({
              ...currentRsvp,
              dietaryRestrictions: target.value,
            })
          }
          multiline
          minRows={4}
        />
      </Stack>
    </div>
  );
};
