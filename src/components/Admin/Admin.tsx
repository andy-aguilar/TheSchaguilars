import {
  FunctionComponent,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { Guest, Rsvp } from "../Model/Rsvp.interface";
import { API } from "aws-amplify";
import { listRsvps } from "../../graphql/queries";
import { rsvpResponse } from "../Pages/Rsvp/RsvpSearchForm";
import {
  CircularProgress,
  Grid,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
} from "@mui/material";
import { TabPanel } from "./TabPanel";
import "./Admin.css";

export const AdminComponent: FunctionComponent = () => {
  const [rsvps, setRsvps] = useState<Rsvp[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentTab, setCurrentTab] = useState<number>(0);

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

  function getIndividualAttendeeRows(): ReactNode[] {
    const init: Guest[] = [];
    const individualAttendees: Guest[] = rsvps.reduce((prev, curr) => {
      const yeses: Guest[] = curr.guests.filter((guest) => guest.isAttending);
      if (yeses.length > 0) {
        return [...prev, ...yeses];
      } else {
        return prev;
      }
    }, init);

    return individualAttendees.map((guest, index) => (
      <TableRow key={index}>
        <TableCell>{`${guest.firstName} ${guest.lastName}`}</TableCell>
      </TableRow>
    ));
  }

  function getHasRsvpedNoRows(): ReactNode[] {
    const init: Guest[] = [];
    const notAttending: Guest[] = rsvps.reduce((prev, curr) => {
      if (!curr.hasRsvped) {
        return prev;
      }

      const nos = curr.guests.filter((guest) => !guest.isAttending);
      if (nos.length > 0) {
        return [...prev, ...nos];
      } else {
        return prev;
      }
    }, init);

    return notAttending.map((guest, index) => (
      <TableRow key={index}>
        <TableCell>{`${guest.firstName} ${guest.lastName}`}</TableCell>
      </TableRow>
    ));
  }

  function getOutstandingRsvps(): ReactElement[] {
    return rsvps
      .filter((rsvp) => !rsvp.hasRsvped)
      .map((rsvp) => (
        <TableRow key={rsvp.id}>
          <TableCell>{rsvp.addressLabel}</TableCell>
        </TableRow>
      ));
  }

  const rows: { name: string; data: number }[] = [
    { name: "Responses received:", data: getFamiliesResponded() },
    { name: "Outstanding invites:", data: getFamiliesNotResponded() },
    { name: "Attending (Individual):", data: getIndividualRsvpYeses() },
    { name: "Not Attending (Individual):", data: getIndividualRsvpNos() },
    { name: "Attending (Families):", data: getFamilyRsvpYeses() },
    { name: "Not Attending (Families):", data: getFamilyRsvpNos() },
  ];

  function generateTableRows(): ReactNode[] {
    return rows.map((row) => (
      <TableRow
        key={row.name}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell>{row.data}</TableCell>
      </TableRow>
    ));
  }

  return (
    <div className={"admin-body"}>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <Grid container spacing={2}>
          <Grid xs={12} md={4} sx={{ margin: "1em" }}>
            <TableContainer sx={{ maxWidth: 450 }} component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>RSVP Details</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>{generateTableRows()}</TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid xs={12} md={4} component={Paper} sx={{ margin: "1em" }}>
            <Tabs
              sx={{ padding: ".5em" }}
              value={currentTab}
              onChange={(_, newTab) => setCurrentTab(newTab)}
            >
              <Tab label="Attendees" />
              <Tab label="Outstanding" />
              <Tab label="Not Attending" />
            </Tabs>
            <TabPanel value={currentTab} index={0}>
              <TableContainer sx={{ width: "100%" }}>
                <Table>
                  <TableBody>{getIndividualAttendeeRows()}</TableBody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel value={currentTab} index={1}>
              <TableContainer sx={{ width: "100%" }}>
                <Table>
                  <TableBody>{getOutstandingRsvps()}</TableBody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel value={currentTab} index={2}>
              <TableContainer sx={{ width: "100%" }}>
                <Table>
                  <TableBody>{getHasRsvpedNoRows()}</TableBody>
                </Table>
              </TableContainer>
            </TabPanel>
          </Grid>
        </Grid>
      )}
    </div>
  );
};
