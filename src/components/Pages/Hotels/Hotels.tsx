import React, { FunctionComponent, ReactNode } from "react";
import { Footer } from "../../ReusableComponents/Footer";
import { Header } from "../../ReusableComponents/Header";
import "./hotels.css";

interface Hotel {
  name: string;
  imageUrl?: string;
  reserveUrl: string;
  description: string;
}

export const Hotels: FunctionComponent = () => {
  const hotels: Hotel[] = [
    {
      name: "Porta Hotel",
      imageUrl:
        "https://the-schaguilars.s3.us-east-2.amazonaws.com/porta-hotel.jpeg",
      reserveUrl:
        "https://reservations.portahotelantigua.com/85281?groupID=3605262#/guestsandrooms",
      description:
        "Porta Hotel is just one block away from Pensativo House and is the location where the welcome event will be held. They have also set aside rooms for our guests, so be sure to use this unique link to book your room there.",
    },
    {
      name: "Posada del Angel",
      imageUrl:
        "https://the-schaguilars.s3.us-east-2.amazonaws.com/posada-del-angel.jpeg",
      description:
        "Posada del Angel is a boutique hotel offering just seven rooms. It is directly next door to Pensativo House, making it a very convenient option for anyone who would like to stay there.",
      reserveUrl:
        "https://direct-book.com/properties/gua311?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2023-03-09&checkOutDate=2023-03-12&trackPage=yes",
    },
  ];

  function renderHotels(): ReactNode {
    return hotels.map((hotel) => (
      <div className={"hotel-card"} key={hotel.name}>
        <img
          className={"hotel-image"}
          src={hotel.imageUrl}
          alt={hotel.name}
        ></img>
        <h3>{hotel.name}</h3>
        <p>{hotel.description}</p>
        <a
          href={hotel.reserveUrl}
          className="directions-link"
          target="_blank"
          rel="noreferrer"
        >
          <span>Book Here</span>
        </a>
      </div>
    ));
  }

  return (
    <div className="page-container">
      <Header />
      <div className="real-page-body">
        <div className={"page-body large wide"}>
          <div className="hotels-container">
            <div className={"event-hotel"}>
              <img
                src="https://the-schaguilars.s3.us-east-2.amazonaws.com/pensativo2.jpeg"
                alt="pensativo house hotel"
              />
              <h1>Event Hotel</h1>
              <h3>Pensativo House</h3>
              <p>
                The wedding reception will be held at Pensativo House. This
                hotel has set aside rooms for our guests at a special rate, so
                please be sure to use this unique link to book your room.
              </p>
              <a
                className="directions-link"
                target="_blank"
                rel="noreferrer"
                href="https://bit.ly/kristinandandy-phh"
              >
                <span>Book Here</span>
              </a>
            </div>
            <div className="other-hotels">
              <h1>Other Hotels</h1>
              <div className="hotel-cards">{renderHotels()}</div>
            </div>
          </div>
        </div>
        <Footer pageSize={"large"} />
      </div>
    </div>
  );
};
