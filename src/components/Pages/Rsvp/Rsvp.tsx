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
import { API } from "aws-amplify";
import { listRsvps } from "../../../graphql/queries";
import { Rsvp as RsvpInterface } from "../../Model/Rsvp.interface";
import { RsvpSearchForm } from "./RsvpSearchForm";
import { RsvpIsAttendingTiles } from "./RsvpIsAttendingTiles";
import { RsvpGuestSelector } from "./RsvpGuestSelector";
import { RsvpAdditionalDetails } from "./RsvpAdditionalDetails";
// import { createRsvp } from "../../../graphql/mutations";
// import { seedRsvps } from "../../Model/rsvpinitial.const";

interface rsvpResponse {
  data: {
    listRsvps: { items: RsvpInterface[] };
  };
}

export const Rsvp: FunctionComponent = () => {
  const [rsvps, setRsvps] = useState<RsvpInterface[]>([]);

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

  function handleDetailSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: Add queries for updating rsvp
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
          {/* Find your RSVP form */}
          {!currentRsvp && (
            <RsvpSearchForm rsvps={rsvps} setCurrentRsvp={setCurrentRsvp} />
          )}

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
  );
};
