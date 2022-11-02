import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import { Rsvp } from "../Model/Rsvp.interface";
import { API } from "aws-amplify";
import { listRsvps } from "../../graphql/queries";
import { rsvpResponse } from "../Pages/Rsvp/RsvpSearchForm";
import { CircularProgress } from "@mui/material";

export const AdminComponent: FunctionComponent = () => {
  const [rsvps, setRsvps] = useState<Rsvp[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchRsvps();
  }, []);

  async function fetchRsvps() {
    const apiData = (await API.graphql({ query: listRsvps })) as rsvpResponse;
    if (apiData?.data?.listRsvps?.items) {
      setRsvps(apiData.data.listRsvps.items);
      setIsLoading(false);
    } else {
      console.error("error while fetching rsvps");
    }
  }

  function getFamiliesResponded(): number {
    return rsvps && rsvps.filter((rsvp) => rsvp.hasRsvped).length;
  }

  function getFamiliesNotResponded(): number {
    return rsvps && rsvps.filter((rsvp) => !rsvp.hasRsvped).length;
  }

  function getFamilyRsvpYeses(): number {
    return rsvps && rsvps.filter((rsvp) => rsvp.isFamilyAttending).length;
  }

  function getFamilyRsvpNos(): number {
    return (
      rsvps && rsvps.filter((rsvp) => rsvp.isFamilyAttending === false).length
    );
  }

  function getIndividualRsvpYeses(): number {
    return rsvps?.reduce((prev, curr) => {
      if (curr.isFamilyAttending) {
        const membersAttending: number = curr.guests.filter(
          (guest) => guest.isAttending
        ).length;
        return prev + membersAttending;
      } else {
        return prev;
      }
    }, 0);
  }

  function getIndividualRsvpNos(): number {
    return rsvps?.reduce((prev, curr) => {
      if (curr.isFamilyAttending === false) {
        return prev + curr.guests.length;
      } else {
        return prev;
      }
    }, 0);
  }

  function getOutstandingRsvps(): ReactElement[] {
    return rsvps
      .filter((rsvp) => !rsvp.hasRsvped)
      .map((rsvp) => <li key={rsvp.id}>{rsvp.addressLabel}</li>);
  }

  return (
    <div>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <div>
          <h1># of Families that have responded:</h1>
          <p>{getFamiliesResponded()}</p>

          <h1># of Families that have not responded:</h1>
          <p>{getFamiliesNotResponded()}</p>

          <h1># of Familes that have said yes</h1>
          <p>{getFamilyRsvpYeses()}</p>

          <h1># ofFamiles that have said no</h1>
          <p>{getFamilyRsvpNos()}</p>

          <h1># of individual attendees</h1>
          <p>{getIndividualRsvpYeses()}</p>

          <h1># of individual declinees</h1>
          <p>{getIndividualRsvpNos()}</p>

          <h1>Still waiting on rsvps from</h1>
          <ul>{getOutstandingRsvps()}</ul>
        </div>
      )}
    </div>
  );
};
