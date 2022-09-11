import { Input } from "@mui/material";
import React, { FunctionComponent, useEffect, useState } from "react";
import { Footer } from "../../ReusableComponents/Footer";
import { Header } from "../../ReusableComponents/Header";
import { API } from "aws-amplify";
import { createRsvp } from "../../../graphql/mutations";
import { listRsvps } from "../../../graphql/queries";

const initialFormState = {
  lastName: "",
  emailAddress: "",
  guests: [],
  rsvpSubmitted: false,
  dietaryRestrictions: "",
};

export const Rsvp: FunctionComponent = () => {
  const [rsvps, setRsvps] = useState<any[]>([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchRsvps();
  }, []);

  async function fetchRsvps() {
    const apiData = await API.graphql({ query: listRsvps });
    console.log(apiData);
    // setRsvps(apiData.data.listRsvps.items)
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
          <h3>Please enter your email address</h3>
          <Input type={"email"} name={"email"} />
        </div>
        <Footer pageSize="small" />
      </div>
    </div>
  );
};
