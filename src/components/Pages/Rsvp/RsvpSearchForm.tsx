import { Button, Paper, Snackbar, Stack, TextField } from "@mui/material";
import React, {
  FormEvent,
  FunctionComponent,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { Rsvp, Guest } from "../../Model/Rsvp.interface";
import { Footer } from "../../ReusableComponents/Footer";
import { Header } from "../../ReusableComponents/Header";
import { API } from "aws-amplify";
import { listRsvps } from "../../../graphql/queries";
import { useNavigate } from "react-router-dom";
// import { createRsvp } from "../../../graphql/mutations";
// import { seedRsvps } from "../../Model/rsvpinitial.const";
import { MainTheme } from "../../../MainTheme";
import { ThemeProvider } from "@emotion/react";

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
  const [multipleFoundRsvps, setMultipleFoundRsvps] = useState<Rsvp[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchRsvps();
  }, []);

  async function fetchRsvps() {
    const apiData = (await API.graphql({ query: listRsvps })) as rsvpResponse;
    setRsvps(apiData.data.listRsvps.items);
  }

  // USED FOR SEEDING DATABASE, DO NOT DELETE
  //   async function createRsvpFromList(rsvp: Rsvp) {
  //     const rsvpResponse: any = await API.graphql({
  //       query: createRsvp,
  //       variables: { input: rsvp },
  //     });
  //     if (rsvpResponse) {
  //       console.log(rsvpResponse);
  //       //   fetchRsvps()
  //     }
  //   }

  //   async function createRsvps() {
  //     const result = await seedRsvps.forEach(createRsvpFromList);
  //     console.log(result);
  //     fetchRsvps();
  //   }

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();

    findCurrentRsvp(formData);
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
      setMultipleFoundRsvps(foundRsvps);
    } else if (foundRsvps.length === 1) {
      setFormData(initialFormState);
      const foundRsvp = foundRsvps[0];
      setShouldShowNotFound(false);
      navigate(`/rsvp/${foundRsvp.id}`);
    } else {
      setFormData(initialFormState);
      setShouldShowNotFound(true);
    }
  }

  function handleRsvpSelect(rsvp: Rsvp): void {
    navigate(`/rsvp/${rsvp.id}`);
  }

  function getFoundRsvpsTiles(): ReactNode {
    return (
      <div className="rsvp-tiles">
        {multipleFoundRsvps.map((rsvp: Rsvp) => (
          <Paper
            key={rsvp.id}
            className="rsvp-tile"
            elevation={3}
            onClick={() => handleRsvpSelect(rsvp)}
          >
            <h4>{rsvp.addressLabel}</h4>
            <p>{rsvp.streetAddress}</p>
            {rsvp.streetAddressLineTwo && <p>{rsvp.streetAddressLineTwo}</p>}
            <p>{`${rsvp.city}, ${rsvp.state} ${rsvp.zipCode}`}</p>
          </Paper>
        ))}
      </div>
    );
  }

  return (
    <ThemeProvider theme={MainTheme}>
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
            <h2>Please enter your first and last name</h2>

            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Stack spacing={4}>
                <Stack spacing={3}>
                  <TextField
                    value={formData.firstName}
                    id="standard-basic"
                    className="rsvp text-field"
                    label={"First Name"}
                    onChange={({ target }) =>
                      setFormData({ ...formData, firstName: target.value })
                    }
                  />
                  <TextField
                    value={formData.lastName}
                    id="standard-basic"
                    className="rsvp text-field"
                    label="Last Name"
                    onChange={({ target }) =>
                      setFormData({ ...formData, lastName: target.value })
                    }
                  />
                </Stack>
                <Button type="submit" name="submit" color="primary">
                  Submit
                </Button>
              </Stack>
            </form>

            {multipleFoundRsvps.length > 0 && (
              <>
                <p>
                  Multiple guests found by that name. Please select your party:
                </p>
                {getFoundRsvpsTiles()}
              </>
            )}
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
                  If you have any questions, please reach out to Kristin and
                  Andy.
                </p>
              </>
            }
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          />

          <Footer pageSize={"large"} />
        </div>
      </div>
    </ThemeProvider>
  );
};
