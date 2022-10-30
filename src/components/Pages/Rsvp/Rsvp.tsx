/* eslint-disable react-hooks/exhaustive-deps */
import "./Rsvp.css";
import { Button, CircularProgress, MobileStepper, Paper } from "@mui/material";
import React, {
  FunctionComponent,
  ReactNode,
  useContext,
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
import { useNavigate, useParams } from "react-router-dom";
import { MainTheme } from "../../../MainTheme";
import { ThemeProvider } from "@emotion/react";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { RsvpConfirmed } from "./RsvpConfirmed";
import { updateRsvp } from "../../../graphql/mutations";
import { ErrorContext } from "../../../App";

interface RsvpResponse {
  data: {
    getRsvp: RsvpInterface;
  };
}

export const Rsvp: FunctionComponent = () => {
  const { rsvpId } = useParams();
  const navigate = useNavigate();

  // State
  const [currentRsvp, setCurrentRsvp] = useState<RsvpInterface | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const { errorMessages, setErrorMessages } = useContext(ErrorContext);

  useEffect(() => {
    if (rsvpId) {
      fetchRsvp();
    }
  }, [rsvpId]);

  function handleNext(): void {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  function handleBack(): void {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  async function fetchRsvp(): Promise<void> {
    if (rsvpId) {
      try {
        setIsLoading(true);
        const apiData = (await API.graphql(
          graphqlOperation(getRsvp, { id: rsvpId })
        )) as RsvpResponse;
        if (apiData?.data?.getRsvp.hasRsvped) {
          setIsLoading(false);
          setCurrentRsvp(apiData.data.getRsvp);
          setHasSubmitted(true);
        } else if (apiData?.data?.getRsvp) {
          setIsLoading(false);
          setCurrentRsvp(apiData.data.getRsvp);
        } else {
          setIsLoading(false);
          setErrorMessages([
            ...errorMessages,
            "Could not load guest info. Please try again.",
          ]);
          navigate("/rsvp");
        }
      } catch (error) {
        setErrorMessages([
          ...errorMessages,
          "Could not load guest info. Please try again.",
        ]);
      }
    }
  }

  async function submitRsvp(rsvp: RsvpInterface): Promise<void> {
    setIsLoading(true);
    try {
      const rsvpResponse: any = await API.graphql({
        query: updateRsvp,
        variables: { input: prepareRsvpForSubmission(rsvp) },
      });
      if (rsvpResponse) {
        console.log(rsvpResponse);
        return rsvpResponse;
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  function prepareRsvpForSubmission(rsvp: RsvpInterface): RsvpInterface {
    return {
      id: rsvp.id,
      emailAddress: rsvp.emailAddress,
      guests: rsvp.guests,
      hasRsvped: rsvp.hasRsvped,
      dietaryRestrictions: rsvp.dietaryRestrictions,
      addressLabel: rsvp.addressLabel,
      city: rsvp.city,
      state: rsvp.state,
      zipCode: rsvp.zipCode,
      isFamilyAttending: rsvp.isFamilyAttending,
    };
  }

  async function handleDetailSubmit(): Promise<void> {
    if (currentRsvp) {
      submitRsvp(currentRsvp).then((resp) => {
        console.log(resp);
        setIsLoading(false);
        handleNext();
      });
    }
  }

  function handleRsvpNoSubmit(rsvp: RsvpInterface): void {
    if (rsvp) {
      submitRsvp(rsvp).then(() => {
        setIsLoading(false);
        setCurrentRsvp(rsvp);
        handleNext();
      });
    }
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
        <RsvpConfirmed />,
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
          {/* Loading Spinner */}
          {isLoading && (
            <div className="loading-spinner">
              <CircularProgress size={80} />
            </div>
          )}

          {/* Rsvp form */}
          {!isLoading && (
            <div className={"page-body large rsvp-page"}>
              <Paper elevation={0} className="rsvp field-container">
                {currentRsvp && (
                  <h2 className="address-label">{currentRsvp.addressLabel}</h2>
                )}
                {hasSubmitted && (
                  <>
                    <p>
                      Looks like you've already RSVPed. Do you want to update
                      your rsvp?
                    </p>
                    <Button onClick={() => setHasSubmitted(false)}>Yes</Button>
                  </>
                )}
                {!hasSubmitted && (
                  <>
                    <div className="stepper-content">
                      {getSteps()[activeStep]}
                    </div>
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
                  </>
                )}
              </Paper>
            </div>
          )}
          <Footer pageSize={"large"} />
        </div>
      </div>
    </ThemeProvider>
  );
};
