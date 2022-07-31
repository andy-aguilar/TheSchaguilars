import { useMediaQuery } from "@mui/material";
import React, { FunctionComponent } from "react";
import { Footer } from "../../ReusableComponents/Footer";
import { Header } from "../../ReusableComponents/Header";
import "./travel-information.css";

export const TravelInformation: FunctionComponent = () => {
  // Media query used to determine footer location
  const narrow = useMediaQuery("(max-width:768px)");

  return (
    <div className="page-container">
      <Header />
      <div className={narrow ? "page-body large" : "page-body small"}>
        <div className="travel-information-container">
          <h1>Travel Information</h1>
          <div className="flights">
            <h3>Flights</h3>
            <p>
              La Aurora (Guatemala City) International Airport (GUA) is the
              preferred airport for traveling to Antigua, Guatemala. It is
              located in Guatemala City and is about 15 miles from Antigua. It
              takes about an hour to drive from GUA to Antigua, so please
              consider this when choosing your arrival time.
            </p>

            <a
              className={"directions-link"}
              href="https://www.google.com/maps/place/La+Aurora+(Guatemala+City)+International+Airport+(GUA)/@14.5882062,-90.5327427,17z/data=!3m1!4b1!4m5!3m4!1s0x8589a15f18a23e65:0xa8d9f9b1ae2d4eca!8m2!3d14.5882062!4d-90.5305487?shorturl=1"
            >
              <span>See Location</span>
            </a>
          </div>
          <div className="shuttles">
            <h3>Shuttles</h3>
            <p>
              Andy and Kristin will be providing shuttle transportation for all
              guests from the Guatemala City airport to their hotels. Please
              visit the link below to provide the shuttle company with your
              flight information and arrange transportation.
            </p>
            <p>
              Guests will need to arrange their own transportation back to
              Guatemala City airport or onwards to their next destination. We
              recommend booking that travel through Antigua Tours as well.
            </p>

            <a
              className={"directions-link"}
              href="https://www.google.com/maps/place/La+Aurora+(Guatemala+City)+International+Airport+(GUA)/@14.5882062,-90.5327427,17z/data=!3m1!4b1!4m5!3m4!1s0x8589a15f18a23e65:0xa8d9f9b1ae2d4eca!8m2!3d14.5882062!4d-90.5305487?shorturl=1"
            >
              <span>See Location</span>
            </a>
          </div>
        </div>
      </div>
      <Footer pageSize={narrow ? "large" : "small"} />
    </div>
  );
};
