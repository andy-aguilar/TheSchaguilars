import "./Rsvp.css";
import { Button, FormGroup } from "@mui/material";
import React, {
  FormEvent,
  FunctionComponent,
  useEffect,
  useState,
} from "react";
import { Footer } from "../../ReusableComponents/Footer";
import { Header } from "../../ReusableComponents/Header";
import { API, graphqlOperation } from "aws-amplify";
import { getRsvp } from "../../../graphql/queries";
import { Rsvp as RsvpInterface } from "../../Model/Rsvp.interface";
import { RsvpIsAttendingTiles } from "./RsvpIsAttendingTiles";
import { RsvpGuestSelector } from "./RsvpGuestSelector";
import { RsvpAdditionalDetails } from "./RsvpAdditionalDetails";
import { useParams } from "react-router-dom";
import { MainTheme } from "../../../MainTheme";
import { ThemeProvider } from "@emotion/react";

interface RsvpResponse {
  data: {
    getRsvp: RsvpInterface;
  };
}

export const Rsvp: FunctionComponent = () => {
  const { rsvpId } = useParams();

  const [currentRsvp, setCurrentRsvp] = useState<RsvpInterface | null>(null);

  useEffect(() => {
    if (rsvpId) {
      fetchRsvp();
    }
  }, [rsvpId]);

  async function fetchRsvp(): Promise<void> {
    if (rsvpId) {
      const apiData = (await API.graphql(
        graphqlOperation(getRsvp, { id: rsvpId })
      )) as RsvpResponse;
      setCurrentRsvp(apiData.data.getRsvp);
    }
  }

  function handleDetailSubmit(e: FormEvent) {
    e.preventDefault();
  }

  function hasRsvped(): boolean {
    return !!currentRsvp && !!currentRsvp.hasRsvped;
  }

  function hasRsvpedNo(): boolean {
    return (
      !!currentRsvp && !!currentRsvp.hasRsvped && !currentRsvp.isFamilyAttending
    );
  }

  function handleRsvpNoSubmit(): void {
    console.log("rsvped no");
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
            {/* Select if party is attending */}
            {currentRsvp && (
              <RsvpIsAttendingTiles
                currentRsvp={currentRsvp}
                setCurrentRsvp={setCurrentRsvp}
              />
            )}

            {/* Fields for attending parties */}
            {currentRsvp && currentRsvp.isFamilyAttending && (
              <FormGroup onSubmit={handleDetailSubmit}>
                {/* Select which guests will be attending */}
                <RsvpGuestSelector
                  currentRsvp={currentRsvp}
                  setCurrentRsvp={setCurrentRsvp}
                />

                {/* Provide extra details */}
                <RsvpAdditionalDetails
                  currentRsvp={currentRsvp}
                  setCurrentRsvp={setCurrentRsvp}
                />

                <Button type="submit" name="submit">
                  Submit
                </Button>
              </FormGroup>
            )}

            {/* Fields for RSVP No */}
            {hasRsvpedNo() && (
              <Button onClick={handleRsvpNoSubmit}>Submit</Button>
            )}
          </div>

          <Footer pageSize={hasRsvped() ? "large" : "small"} />
        </div>
      </div>
    </ThemeProvider>
  );
};
