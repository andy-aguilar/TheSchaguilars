import { Button, FormLabel, Stack, TextField } from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import { Rsvp } from "../../Model/Rsvp.interface";

export interface Props {
  currentRsvp: Rsvp;
  setCurrentRsvp: (rsvp: Rsvp) => void;
  handleSubmit: () => void;
}

export const RsvpAdditionalDetails: FunctionComponent<Props> = ({
  currentRsvp,
  setCurrentRsvp,
  handleSubmit,
}) => {
  // State
  const [hasEmailAddressBeenBlurred, setHasEmailAddressBeenBlurred] =
    useState<boolean>(false);
  const [
    hasDietaryRestrictionsBeenBlurred,
    setHasDietaryRestrictionsBeenBlurred,
  ] = useState<boolean>(false);

  function shouldDisableSubmit(): boolean {
    return !areDietaryRestrictionsValid() || !isEmailAddressValid();
  }

  function areDietaryRestrictionsValid(): boolean {
    return !!currentRsvp?.dietaryRestrictions;
  }

  function isEmailAddressValid(): boolean {
    return !!currentRsvp?.emailAddress;
  }

  return (
    <div className="rsvp-field">
      <Stack spacing={2}>
        <FormLabel>Please provide some additional information:</FormLabel>
        <TextField
          value={currentRsvp?.emailAddress}
          id="standard-basic"
          label="Email address"
          color="primary"
          onChange={({ target }) => {
            setCurrentRsvp({ ...currentRsvp, emailAddress: target.value });
          }}
          onBlur={() => setHasEmailAddressBeenBlurred(true)}
          error={hasEmailAddressBeenBlurred && !isEmailAddressValid()}
        />
        <TextField
          value={currentRsvp?.dietaryRestrictions}
          id="standard-basic"
          label="Dietary restrictions"
          color="primary"
          onBlur={() => setHasDietaryRestrictionsBeenBlurred(true)}
          error={
            hasDietaryRestrictionsBeenBlurred && !areDietaryRestrictionsValid()
          }
          onChange={({ target }) =>
            setCurrentRsvp({
              ...currentRsvp,
              dietaryRestrictions: target.value,
            })
          }
          multiline
          minRows={4}
        />
        <Button onClick={handleSubmit} disabled={shouldDisableSubmit()}>
          Submit
        </Button>
      </Stack>
    </div>
  );
};
