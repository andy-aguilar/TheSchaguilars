import React, { FunctionComponent, useEffect, useState } from "react";
import { Header } from "../../ReusableComponents/Header";
import { Footer } from "../../ReusableComponents/Footer";
import "./faqs.css";

export const Faqs: FunctionComponent = () => {
  const [guatemalaTime, setGuatemalaTime] = useState<string>("");

  useEffect(() => {
    getGuatemalaTime();
    const interval = setInterval(getGuatemalaTime, 30000);

    return () => clearInterval(interval);
  }, []);

  function getGuatemalaTime(): void {
    const date = new Date();
    const timeNow = new Intl.DateTimeFormat("en-US", {
      dateStyle: "short",
      timeStyle: "short",
      timeZone: "America/Guatemala",
    }).format(date);

    setGuatemalaTime(timeNow.split(",")[1]);
  }

  return (
    <div className="page-container">
      <Header />
      <div className="real-page-body">
        <div className={"page-body large"} id={"faq-page"}>
          <h1>Frequently Asked Questions</h1>
          <h4>What timezone is Guatemala in?</h4>
          <p>
            Guatemala is in the Central Standard time zone. The current time
            there is {guatemalaTime}.
          </p>

          <h4>What currency is used in Guatemala?</h4>
          <p>
            The quetzal is the currency of Guatemala and the conversion is
            currently about 8 quetzales to 1 USD.
          </p>
          <p>
            It's a good idea to have some cash on you. Most, but not all places
            accept credit cards. And you may want some cash for tipping.
          </p>
          <p>
            Most US banks will be able to exchange your dollars for Quetzales.
            There is also an ATM in the lobby of Porta Hotel.
          </p>

          <h4>What is the tipping etiquette in Guatemala?</h4>
          <p>A 10% tip for service is customary in Guatemala.</p>

          <h4>Is there a dress code for the wedding?</h4>
          <p>
            The dress code for the wedding is formal. The dress code for the
            other events can be found on the{" "}
            <a href="/the-weekend">events page</a>.
          </p>

          <h4>What in the world is 'festive cocktail' attire?</h4>
          <p>
            <i>
              (For those of you that have checked out the{" "}
              <a href="/the-weekend">events page</a>, you will see that the
              welcome party has a festive cocktail dress code.)
            </i>
          </p>
          <p>
            Cocktail attire with some flair! Think fancy dinner on vacation.
            This is the night to bust out the brighter colors and fun patterns.
          </p>

          <h4>Will the wedding take place indoors or outdoors?</h4>
          <p>
            Pray for good weather! The wedding ceremony and wedding reception
            will both be held in outdoor locations.
          </p>

          <h4>What is the weather like in Antigua?</h4>
          <p>
            Riquísimo! The average maximum daytime temperature is around 80°F.
            The average minimum temperature in March is around 60°F. March is a
            dry month with an average of 0.3 inches of rain across an average of
            2 days.
          </p>

          <h4>What is the best way to get from the airport to the hotel?</h4>
          <p>
            Shuttle transportation will be provided for all guests from the
            Guatemala City airport to their hotels. Visit the link here to
            provide your flight information to the shuttle company and arrange
            transport.{" "}
          </p>
          <p>
            Guests will need to arrange their own transportation back to
            Guatemala City airport or onwards to their next destination. We
            recommend booking that transportation through Antigua Tours as well.
          </p>

          <h4>What is the best way to get from the hotel to the ceremony?</h4>
          <p>
            We will be providing shuttles from Pensativo House and Porta Hotel
            to the ceremony location. Shuttles will run between (add time when
            known).
          </p>

          <h4>Have you booked hotel room blocks for your guests?</h4>
          <p>
            Yes! Please visit our <a href={"/hotels"}>hotels page</a> for more
            information.
          </p>

          <h4>What is the best way to get around Antigua?</h4>
          <p>
            Antigua is very compact. Most tourist destinations are within an
            8-by-8 block area. You can walk across it in 15 min. However, the
            streets are cobbled and can pose a challenge for some. Be sure to
            wear comfortable walking shoes and watch your step.
          </p>
          <p>
            Tuk-tuks and taxis can take you to destinations within the city
            center for very little--negotiate the fare with the driver in
            advance.
          </p>

          <h4>Can I bring a +1 to the wedding?</h4>
          <p>
            Ooh la la! In order to stay within our venue's capacity we are only
            able to accommodate those guests formally invited on your wedding
            invitation. Please feel free to contact Kristin or Andy with any
            questions!
          </p>

          <h4>Are children invited to the wedding?</h4>
          <p>
            As much as we love your little ones, this will be an adults-only
            celebration. We hope this will allow you a much-deserved night off
            to celebrate with us!
          </p>
          <p>
            For those of you traveling with children, Porta Hotel offers
            child-care options on site.
          </p>

          <h4>Are there any COVID precautions that I should be aware of?</h4>
          <p>
            The Government of Guatemala no longer requires passengers arriving
            by air to present proof of a negative COVID test or proof of a
            complete COVID vaccine course to enter Guatemala.
          </p>
          <p>
            Mask wearing in Guatemala is still widespread and common in places
            even where it is not required.
          </p>
          <p>
            The most up-to-date information regarding COVID restrictions on
            travel from the U.S. to Guatemala can be found{" "}
            <a
              href="https://gt.usembassy.gov/alert-covid-19-2/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
          </p>

          <h4>What is the emergency contact number in Guatemala?</h4>
          <p>
            110 is the emergency number for police. Other emergency numbers can
            be found{" "}
            <a
              href="https://help.unhcr.org/guatemala/en/donde-encontrar-ayuda/"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>

          <h4>What is the deadline to RSVP?</h4>
          <p>Please RSVP no later than December 11, 2022</p>

          <h4>Will there be an open bar?</h4>
          <p>You know it! </p>

          <h4>Will you accomodate dietary restrictions?</h4>
          <p>
            We will provide vegetarian and gluten free options at the wedding.
            If you have other dietary restrictions please contact us and we will
            try to accommodate.
          </p>

          <h4>Why did you pick Guatemala as your wedding destination? </h4>
          <p>
            Guatemala is the first country that we traveled to as a couple. We
            fell in love with the country's beauty, hisotry, and culture. And we
            know you will too. Just wait until you see it!
          </p>

          <h4>What is the typical cuisine of Guatemala?</h4>
          <p>
            Corn, beans, rice, pork, beef, chicken, cheese and tortillas are the
            primary indgredients of traditional Guatemalan cuisine.{" "}
            <a href="https://theculturetrip.com/central-america/guatemala/articles/the-10-most-traditional-dishes-from-guatemala/">
              Here
            </a>{" "}
            are a few typical dishes that you may want to try while you are
            there.
          </p>

          <h4>What do you recommend doing in and around Antigua?</h4>
          <p>
            Check out our list of recommendations of things to do in Antigua and
            other places in visit in Guatemala <a href="/things-to-do">here</a>.
          </p>

          <h4>What's your wedding hashtag?</h4>
          <p>#theschaguilars -- start posting!</p>

          <h4>
            I have a question that hasn't been answered here, who should I
            contact?
          </h4>
          <p>
            Feel free to contact Kristin or Andy directly with any questions. We
            want to make sure your trip is as enjoyable as possible!
          </p>
          {/* TODO : add joint email address when setup */}
        </div>
        <Footer pageSize={"large"} />
      </div>
    </div>
  );
};
