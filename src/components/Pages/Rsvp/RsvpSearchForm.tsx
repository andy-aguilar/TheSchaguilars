import { Button, TextField } from "@mui/material";
import React, {
  FormEvent,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { Rsvp, Guest } from "../../Model/Rsvp.interface";
import { Footer } from "../../ReusableComponents/Footer";
import { Header } from "../../ReusableComponents/Header";
import { API } from "aws-amplify";
import { listRsvps } from "../../../graphql/queries";
import { useNavigate } from "react-router-dom";

const initialFormState = {
  firstName: "",
  lastName: "",
};
interface rsvpResponse {
  data: {
    listRsvps: { items: Rsvp[] };
  };
}

export const RsvpSearchForm: FunctionComponent = () => {
  // State
  const [formData, setFormData] = useState(initialFormState);
  const [rsvps, setRsvps] = useState<Rsvp[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchRsvps();
  }, []);

  async function fetchRsvps() {
    const apiData = (await API.graphql({ query: listRsvps })) as rsvpResponse;
    setRsvps(apiData.data.listRsvps.items);
  }

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
      navigate(`/rsvp/${foundRsvp.id}`);
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
