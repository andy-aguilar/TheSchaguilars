import { Button, Snackbar, TextField } from "@mui/material";
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
import { createRsvp } from "../../../graphql/mutations";
import { useNavigate } from "react-router-dom";
import { seedRsvps } from "../../Model/rsvpinitial.const";

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
  const [shouldShowNotFound, setShouldShowNotFound] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchRsvps();
  }, []);

  async function fetchRsvps() {
    const apiData = (await API.graphql({ query: listRsvps })) as rsvpResponse;
    setRsvps(apiData.data.listRsvps.items);
  }

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
    const result = await seedRsvps.forEach(createRsvpFromList);
    console.log(result);
    fetchRsvps();
  }

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();

    findCurrentRsvp(formData);
    setFormData(initialFormState);
  }

  function findCurrentRsvp(formData: { firstName: string; lastName: string }) {
    const foundRsvps = rsvps.filter(
      (rsvp) =>
        !!rsvp.guests.find(
          (guest: Guest) =>
            guest.firstName.toLowerCase() ===
              formData.firstName.toLowerCase() &&
            guest.lastName.toLowerCase() === formData.lastName.toLowerCase()
        )
    );

    if (foundRsvps.length > 1) {
      console.log("multifound workflow");
    } else if (foundRsvps.length === 1) {
      const foundRsvp = foundRsvps[0];
      setShouldShowNotFound(false);
      navigate(`/rsvp/${foundRsvp.id}`);
    } else {
      setShouldShowNotFound(true);
    }
  }

  return (
    <div className="page-container">
      <Header />
      <div className="real-page-body">
        <Button onClick={createRsvps}>SeedRSVPs</Button>
        <div
          className="sub-header"
          style={{
            backgroundImage: `url("https://the-schaguilars.s3.us-east-2.amazonaws.com/backgroundImage.jpeg")`,
          }}
        >
          <h1>RSVP</h1>
        </div>

        <div className={"page-body small"}>
          <h3>Please enter your first and last name</h3>

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
        <Snackbar
          open={shouldShowNotFound}
          autoHideDuration={6000}
          onClose={() => setShouldShowNotFound(false)}
          message={
            <>
              <p>
                No guests found. Did you enter your name as it appears on your
                invitation?
              </p>
              <p>
                If you have any questions, please reach out to Kristin and Andy.
              </p>
            </>
          }
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        />

        <Footer pageSize="small" />
      </div>
    </div>
  );
};
