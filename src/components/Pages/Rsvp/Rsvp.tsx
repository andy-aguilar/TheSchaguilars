/* eslint-disable react-hooks/exhaustive-deps */
import "./Rsvp.css";
import { Button, FormGroup, Stack } from "@mui/material";
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
          {/* TODO: These classes may be incorrect might need to conditionally render small/large depending on step */}
          <div className={"page-body small"}>
            <Stack
              spacing={4}
              alignItems={"center"}
              justifyContent={"flex-start"}
            >
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
                  <Stack spacing={3}>
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
                  </Stack>
                </FormGroup>
              )}

              {/* Fields for RSVP No */}
              {hasRsvpedNo() && (
                <Button onClick={handleRsvpNoSubmit}>Submit</Button>
              )}
            </Stack>
          </div>
          <Footer pageSize={"large"} />
        </div>
      </div>
    </ThemeProvider>
  );
};
