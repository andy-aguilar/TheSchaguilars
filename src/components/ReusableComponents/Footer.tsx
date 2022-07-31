import React, { FunctionComponent } from "react";

export interface Props {
  size?: string;
}

export const Footer: FunctionComponent<Props> = ({ size }) => {
  return (
    <footer id={"app-footer"} className={size}>
      <h5>{`SITE BY KRISTIN & ANDY`}</h5>
    </footer>
  );
};
