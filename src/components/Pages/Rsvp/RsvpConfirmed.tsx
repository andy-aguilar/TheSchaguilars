import { FunctionComponent } from "react";

export const RsvpConfirmed: FunctionComponent = () => {
  return (
    <div className="submitted">
      <h5>
        Awesome!
        <br />
        Let's "I do" this shit!
      </h5>
      <p>
        Remember to book your shuttle from Guatemala City to Antigua{" "}
        <a href={"/travel-information"}>here</a>
      </p>
    </div>
  );
};
