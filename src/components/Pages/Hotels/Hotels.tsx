import { useMediaQuery } from "@mui/material";
import React, { FunctionComponent, ReactNode } from "react";
import { Footer } from "../../ReusableComponents/Footer";
import { Header } from "../../ReusableComponents/Header";
import "./hotels.css";

interface Hotel {
  name: string;
  imageUrl?: string;
  reserveUrl: string;
}

export const Hotels: FunctionComponent = () => {
  const narrow = useMediaQuery("(max-width:768px)");
  const hotels: Hotel[] = [
    {
      name: "Pensativo House",
      imageUrl: "",
      reserveUrl: "",
    },
    {
      name: "Porta Hotel",
      imageUrl: "",
      reserveUrl: "",
    },
  ];

  function renderHotels(): ReactNode {
    return hotels.map((hotel) => (
      <a key={hotel.name} href={hotel.reserveUrl || "/hotels"}>
        <div className={"hotel-card"}>
          {hotel.imageUrl ? (
            <img
              className={"hotel-image"}
              src={hotel.imageUrl}
              alt={hotel.name}
            ></img>
          ) : (
            <div className="hotel-image"></div>
          )}
          <h2>{hotel.name}</h2>
        </div>
      </a>
    ));
  }
  return (
    <div className="page-container">
      <Header />
      <div className={narrow ? "page-body large" : "page-body small"}>
        <div className={"hotels-container"}>{renderHotels()}</div>
      </div>
      <Footer pageSize={narrow ? "large" : "small"} />
    </div>
  );
};
