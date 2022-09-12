import "./Rsvp.css";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Paper,
  TextField,
} from "@mui/material";
import React, {
  FormEvent,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { Footer } from "../../ReusableComponents/Footer";
import { Header } from "../../ReusableComponents/Header";
import { API } from "aws-amplify";
import { listRsvps } from "../../../graphql/queries";
import { Rsvp as RsvpInterface, Guest } from "../../Model/Rsvp.interface";
// import { createRsvp } from "../../../graphql/mutations";
// import { seedRsvps } from "../../Model/rsvpinitial.const";

interface rsvpResponse {
  data: {
    listRsvps: { items: RsvpInterface[] };
  };
}

const initialFormState = {
  firstName: "",
  lastName: "",
};

export const Rsvp: FunctionComponent = () => {
  const [rsvps, setRsvps] = useState<RsvpInterface[]>([]);
  const [formData, setFormData] = useState(initialFormState);
  const [currentRsvp, setCurrentRsvp] = useState<RsvpInterface | null>(null);

  useEffect(() => {
    fetchRsvps();
  }, []);

  async function fetchRsvps() {
    const apiData = (await API.graphql({ query: listRsvps })) as rsvpResponse;
    setRsvps(apiData.data.listRsvps.items);
  }

  // USED FOR SEEDING DATABASE, DO NOT DELETE
  // async function createRsvpFromList(rsvp: RsvpInterface){
  //   const rsvpResponse: any =  await API.graphql({query: createRsvp, variables: {input: rsvp}})
  //   if(rsvpResponse){
  //     console.log(rsvpResponse)
  //     fetchRsvps()
  //   }
  // }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    findCurrentRsvp(formData);
    setFormData(initialFormState);
  }

  function findCurrentRsvp(formData: { firstName: string; lastName: string }) {
    const foundRsvp = rsvps.find(
      (rsvp) =>
        !!rsvp.guests.find(
          (guest: Guest) =>
            guest.name === `${formData.firstName} ${formData.lastName}`
        )
    );
    if (foundRsvp) {
      setCurrentRsvp(foundRsvp);
    }
  }

  function handleRsvpYes() {
    if (currentRsvp) {
      setCurrentRsvp({ ...currentRsvp, hasRsvped: true });
    }
  }
  function handleRsvpNo() {
    if (currentRsvp) {
      const updatedGuests: Guest[] = currentRsvp.guests.map((guest) => {
        return { ...guest, isAttending: false };
      });
      setCurrentRsvp({ ...currentRsvp, guests: updatedGuests });
    }
  }

  function handleCheckboxChange(
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    if (currentRsvp) {
      const updatedCurrentRsvp = { ...currentRsvp };
      updatedCurrentRsvp.guests[index].isAttending = e.target.checked;

      setCurrentRsvp(updatedCurrentRsvp);
    }
  }

  function handleDetailSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: Add queries for updating rsvp
  }

  return (
    <div className="page-container">
      <Header />
      <div className="real-page-body">
        <div
          className="sub-header"
          style={{
            backgroundImage: `url("https://the-schaguilars.s3.us-east-2.amazonaws.com/backgroundImage.jpeg")`,
          }}
        >
          <h1>RSVP</h1>
        </div>
        <div className={"page-body small"}>
          {!currentRsvp && (
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
          )}

          {currentRsvp && (
            <>
              <h3>{`Hello ${currentRsvp.addressLabel}!`}</h3>
              <h4>Will you be attending?</h4>
              <div className="response-buttons">
                <Paper
                  className="response-button"
                  elevation={3}
                  onClick={handleRsvpYes}
                >
                  {currentRsvp.guests.length > 1
                    ? "We joyfully accept the intivation!"
                    : "I joyfully accept the invitation!"}
                </Paper>
                <Paper
                  className="response-button"
                  elevation={3}
                  onClick={handleRsvpNo}
                >
                  {currentRsvp.guests.length > 1
                    ? "We must regretfully decline."
                    : "I must regretfully decline."}
                </Paper>
              </div>
            </>
          )}

          {currentRsvp && currentRsvp.hasRsvped && (
            <FormGroup onSubmit={handleDetailSubmit}>
              <FormLabel>Who will be attending?</FormLabel>
              {currentRsvp?.guests?.map((guest, index) => (
                <FormControlLabel
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

              <FormLabel>Please provide some additional information:</FormLabel>
              <TextField
                value={currentRsvp?.emailAddress}
                id="standard-basic"
                label="Email address"
                variant="standard"
                onChange={({ target }) =>
                  setCurrentRsvp({ ...currentRsvp, emailAddress: target.value })
                }
              />
              <TextField
                value={currentRsvp?.dietaryRestrictions}
                id="standard-basic"
                label="Dietary restrictions"
                variant="standard"
                onChange={({ target }) =>
                  setCurrentRsvp({
                    ...currentRsvp,
                    dietaryRestrictions: target.value,
                  })
                }
                multiline
              />
              <Button type="submit" name="submit">
                Submit
              </Button>
            </FormGroup>
          )}
        </div>
        <Footer pageSize="small" />
      </div>
    </div>
  );
};
