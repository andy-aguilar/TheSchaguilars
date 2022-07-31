import React, { FunctionComponent } from "react";

export interface Props {
  pageSize?: string;
}

export const Footer: FunctionComponent<Props> = ({ pageSize }) => {
  return (
    <footer id={"app-footer"} className={pageSize}>
      <h5>{`SITE BY KRISTIN & ANDY`}</h5>
    </footer>
  );
};
