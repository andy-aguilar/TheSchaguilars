/* eslint-disable react-hooks/exhaustive-deps */
import "./Rsvp.css";
import { Button, MobileStepper, Paper } from "@mui/material";
import React, {
  FormEvent,
  FunctionComponent,
  ReactNode,
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
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

interface RsvpResponse {
  data: {
    getRsvp: RsvpInterface;
  };
}

export const Rsvp: FunctionComponent = () => {
  const { rsvpId } = useParams();

  // State
  const [currentRsvp, setCurrentRsvp] = useState<RsvpInterface | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  function handleNext(): void {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  function handleBack(): void {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

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

  function handleDetailSubmit() {
    handleNext();
    console.log("submitted rsvp");
  }

  function handleRsvpNoSubmit(rsvp: RsvpInterface): void {
    setCurrentRsvp(rsvp);
    handleNext();
    console.log("rsvped no");
  }

  function shouldDisableNext(): boolean {
    if (activeStep >= getSteps().length - 1) {
      return true;
    } else if (activeStep === 0) {
      return !currentRsvp?.isFamilyAttending;
    } else if (activeStep === 1) {
      return !!currentRsvp?.guests.every((guest) => !guest.isAttending);
    } else if (activeStep === 2) {
      return true;
    } else {
      return false;
    }
  }

  function getSteps(): ReactNode[] {
    if (currentRsvp && currentRsvp.isFamilyAttending === null) {
      return [
        <RsvpIsAttendingTiles
          currentRsvp={currentRsvp}
          setCurrentRsvp={setCurrentRsvp}
          advanceStepper={handleNext}
          handleRsvpNoSubmit={handleRsvpNoSubmit}
        />,
      ];
    } else if (currentRsvp && currentRsvp.isFamilyAttending) {
      return [
        <RsvpIsAttendingTiles
          currentRsvp={currentRsvp}
          setCurrentRsvp={setCurrentRsvp}
          advanceStepper={handleNext}
          handleRsvpNoSubmit={handleRsvpNoSubmit}
        />,
        <RsvpGuestSelector
          currentRsvp={currentRsvp}
          setCurrentRsvp={setCurrentRsvp}
        />,
        <RsvpAdditionalDetails
          currentRsvp={currentRsvp}
          setCurrentRsvp={setCurrentRsvp}
          handleSubmit={handleDetailSubmit}
        />,
        <div className="submitted">
          <h5>
            Awesome!
            <br />
            Let's "I do" this shit!
          </h5>
        </div>,
      ];
    } else if (currentRsvp && !currentRsvp.isFamilyAttending) {
      return [
        <RsvpIsAttendingTiles
          currentRsvp={currentRsvp}
          setCurrentRsvp={setCurrentRsvp}
          advanceStepper={handleNext}
          handleRsvpNoSubmit={handleRsvpNoSubmit}
        />,
        <div className="submitted">
          <h5>Thank you for letting us know. You will be missed!</h5>
        </div>,
      ];
    }
    return [];
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
          <div className={"page-body large rsvp-page"}>
            <Paper elevation={0} className="rsvp field-container">
              {currentRsvp && (
                <h2 className="address-label">{currentRsvp.addressLabel}</h2>
              )}
              <div className="stepper-content">{getSteps()[activeStep]}</div>
              {getSteps().length > 1 && (
                <MobileStepper
                  variant="dots"
                  steps={getSteps().length}
                  position="static"
                  activeStep={activeStep}
                  sx={{
                    minWidth: "275px",
                    maxWidth: "700px",
                    flexGrow: 1,
                  }}
                  nextButton={
                    <Button
                      size="small"
                      onClick={handleNext}
                      disabled={shouldDisableNext()}
                    >
                      Next
                      <KeyboardArrowRight />
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      onClick={handleBack}
                      disabled={activeStep === 0}
                    >
                      <KeyboardArrowLeft />
                      Back
                    </Button>
                  }
                />
              )}
            </Paper>
          </div>
          <Footer pageSize={"large"} />
        </div>
      </div>
    </ThemeProvider>
  );
};
