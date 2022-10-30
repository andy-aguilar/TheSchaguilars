import { FunctionComponent, useState } from "react";
import { createRsvp } from "../../graphql/mutations";
import { seedRsvps } from "../Model/rsvpinitial.const";
import { API } from "aws-amplify";
import { Button } from "@mui/material";
import { Rsvp } from "../Model/Rsvp.interface";

export const SeederComponent: FunctionComponent = () => {
  // State
  const [disabled, setDisabled] = useState<boolean>(false);
  // USED FOR SEEDING DATABASE, DO NOT DELETE
  async function createRsvpFromList(rsvp: Rsvp) {
    const rsvpResponse: any = await API.graphql({
      query: createRsvp,
      variables: { input: rsvp },
    });
    if (rsvpResponse) {
      console.log(rsvpResponse);
      //   fetchRsvps()
    }
  }

  async function createRsvps() {
    setDisabled(true);
    const result = await seedRsvps.forEach(createRsvpFromList);
    console.log(result);
  }

  return (
    <div>
      <Button onClick={createRsvps} disabled={disabled}>
        Seed the database
      </Button>
    </div>
  );
};
