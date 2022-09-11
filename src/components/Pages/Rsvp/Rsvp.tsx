import { Button, Input, TextField } from "@mui/material";
import React, {
  FormEvent,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { Footer } from "../../ReusableComponents/Footer";
import { Header } from "../../ReusableComponents/Header";
import { API } from "aws-amplify";
import { createRsvp } from "../../../graphql/mutations";
import { listRsvps } from "../../../graphql/queries";

import { Rsvp as RsvpInterface } from "../../Model/Rsvp.interface";
import { stringify } from "querystring";

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
  const [rsvps, setRsvps] = useState<any[]>([]);
  const [formData, setFormData] = useState(initialFormState);
  const [currentRsvp, setCurrentRsvp] = useState(null);

  useEffect(() => {
    fetchRsvps();
  }, []);

  async function fetchRsvps() {
    const apiData = (await API.graphql({ query: listRsvps })) as rsvpResponse;
    setRsvps(apiData.data.listRsvps.items);
  }

  // async function createRsvpFromList(rsvp: RsvpInterface){
  //   API.graphql({query: createRsvp, variables: {input: rsvp}})
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
          (guest: { name: string; isAttending: boolean }) =>
            guest.name === `${formData.firstName} ${formData.lastName}`
        )
    );
    if (foundRsvp) {
      setCurrentRsvp(foundRsvp);
    }
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
        </div>
        <Footer pageSize="small" />
      </div>
    </div>
  );
};
