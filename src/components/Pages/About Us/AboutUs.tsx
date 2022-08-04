import React, { FunctionComponent, ReactNode } from "react";
import { Footer } from "../../ReusableComponents/Footer";
import { Header } from "../../ReusableComponents/Header";
import "./about-us.css";

interface AboutUsCard {
  content: string;
  subContent?: string;
  imageUrl: string;
  altText: string;
}

export const AboutUs: FunctionComponent = () => {
  const aboutUsCards: AboutUsCard[] = [
    {
      content:
        "Our love story began quite simply. We met online (as is the millennial way). But our story didn't stay simple for long",
      subContent: "(our first photo together)",
      imageUrl:
        "https://the-schaguilars.s3.us-east-2.amazonaws.com/envoy-hotel.jpeg",
      altText:
        "Kristin and Andy's first picture together at the envoy hotel in Boston (2019)",
    },
    {
      content:
        "Shortly after we started dating the pandemic began and our causal dates quickly turned into being stuck inside together for months.",
      subContent: "",
      imageUrl:
        "https://the-schaguilars.s3.us-east-2.amazonaws.com/bw-photoshoot.jpeg",
      altText: "Kristin and Andy (2022)",
    },
    {
      content:
        "In September of 2020 we canceled our leases, put all our stuff in storage, and moved to Florida for six months to escape the struggles of living in a city during a pandemic.",
      subContent: "",
      imageUrl:
        "https://the-schaguilars.s3.us-east-2.amazonaws.com/pensacola.jpeg",
      altText: "Kristin and Andy in Pensacola, FL (2021)",
    },
    {
      content:
        "In October of 2021 Andy popped the question on the terrace of the Kennedy Center in Washington, DC. Kristin (obviously) said yes!",
      subContent: "",
      imageUrl:
        "https://the-schaguilars.s3.us-east-2.amazonaws.com/engagement.jpeg",
      altText:
        "Andy proposing to Kristin on the terrace of the Kennedy Center (2021)",
    },
    {
      content:
        "We can’t talk about the engagement without mentioning the ring! The side stones are from Kristin’s mother’s and grandmother’s engagements rings. And the gold in the band is melted down from the gold in both of their bands.",
      subContent: "",
      imageUrl:
        "https://the-schaguilars.s3.us-east-2.amazonaws.com/engagement-ring.jpeg",
      altText: "Kristin's engagement ring (2021)",
    },
    {
      content:
        "Very touching, we know. Just check out Kristin’s reaction when Andy told her the story of her ring for the first time.",
      subContent: "",
      imageUrl:
        "https://the-schaguilars.s3.us-east-2.amazonaws.com/engagement-ring-story.jpeg",
      altText: "Kristin crying as Andy explains the story of her ring (2021)",
    },
    {
      content:
        "In April of 2022, we bought our first house together! And finally gave our two dogs the massive yard (by DC standards) they deserve!",
      subContent: "",
      imageUrl:
        "https://the-schaguilars.s3.us-east-2.amazonaws.com/new-house.jpeg",
      altText: "Kristin and Andy in front of their new house (2022)",
    },
    {
      content: "Said dogs, our pride and joy.",
      subContent: "",
      imageUrl:
        "https://the-schaguilars.s3.us-east-2.amazonaws.com/doggies.jpeg",
      altText: "the dogs, Crash and Nova, in Pensacola, FL (2020)",
    },
    {
      content:
        "We are so excited to celebrate our day with you in Guatemala, a country that captured our hearts.",
      subContent: "(photo from our first trip to Guatemala in 2019)",
      imageUrl:
        "https://the-schaguilars.s3.us-east-2.amazonaws.com/atitlan.jpeg",
      altText:
        "Kristin and Andy at the top of a volcano in Lake Atitlan, Guatemala (2019)",
    },
  ];

  function renderAboutUsCards(): ReactNode {
    return aboutUsCards.map((card, index) => (
      <div
        className={index % 2 === 0 ? "about-us-card" : "about-us-card right"}
      >
        <img src={card.imageUrl} alt={card.altText} />
        <div className="content-container">
          <p className={"content"}>{card.content}</p>
          <p className={"sub-content"}>{card.subContent}</p>
        </div>
      </div>
    ));
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
          <h1>About Us</h1>
        </div>
        <div className="page-body large wide">
          <div className="about-us-container">
            <div className="about-us-cards">{renderAboutUsCards()}</div>
            <div className="videos">
              <h3>
                If you would like to see more, check out these videos of our
                travels together:
              </h3>
            </div>
          </div>
        </div>
        <Footer pageSize={"large"} />
      </div>
    </div>
  );
};
