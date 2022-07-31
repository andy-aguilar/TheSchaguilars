import React, { FunctionComponent } from "react";
import { Footer } from "../../ReusableComponents/Footer";
import { Header } from "../../ReusableComponents/Header";
import "./about-antigua.css";

export const AboutAntigua: FunctionComponent = () => {
  return (
    <div className="page-container">
      <Header />
      <div className={"page-body-large"}>
        <section className="about-antigua">
          <h1>About Antigua</h1>
          <p>
            Antigua is a small city surrounded by volcanoes in southern
            Guatemala. This colorful town is renowned for its Spanish colonial
            buildings, and cobbled streets (arranged in an easy-to-navigate
            grid). It has been designated a UNESCO World Heritage Site since
            1979.
          </p>

          <h3>Weather</h3>
          <p>
            The average minimum temperature in Antigua Guatemala in March is
            59°F. The average maximum daytime temperature lies around 80°F.
            March is a dry month with an average of 0.3 inches rain across an
            average of 2 days.
          </p>

          <h3>Notable Sights</h3>
          <p>
            Santa Catalina Arch - The Santa Catalina Arch is one of the
            distinguishable landmarks in Antigua Guatemala, Guatemala, located
            on 5th Avenue North. Built in the 17th century, it originally
            connected the Santa Catalina convent to a school, allowing the
            cloistered nuns to pass from one building to the other without going
            out on the street.
          </p>
          <br />
          <p>
            Iglesia de la Merced - Destroyed twice by earthquakes, this 1548
            church was rebuilt in the 1700s to withstand earthquakes and boasts
            a lovely yellow facade and a huge stone fountain, reputed to be the
            largest in Central America.
          </p>
          <br />
          <p>
            Central Market - You'll find textiles, jewelry, clothes and Mayan
            crafts for reasonable prices at this permanent outdoor marketplace.
          </p>
          <br />
          <p>
            Central Park - Just one square block, it doesn't take much time to
            see the park. But it's a nice place to sit and rest while walking
            around the city.
          </p>
          <br />
          <p>
            Coffee Farms - There are several coffee plantations just outside
            Antigua that are perfect for a day tour.
          </p>
          <br />
          <h3>Getting Around</h3>
          <p>
            Antigua is very compact. Most tourist destinations are within an
            8-by-8 block area. You can walk across it in 15 min. However, the
            streets are cobbled and can pose a challenge for some. Be sure to
            wear comfortable walking shoes and watch your step. Tuk-tuks and
            taxis can take you to destinations within the city center for very
            little--negotiate the fare with the driver in advance.
          </p>
          <h3>Coffee</h3>
          <p>
            Coffee lovers, rejoice: thanks to its volcanic landscape, Antigua
            has the ideal climate for growing coffee and the beans produced here
            are some of the best in Latin America. A great way to spend an
            afternoon is by visiting one of the local coffee plantations.
          </p>
        </section>
      </div>
      <Footer size="large" />
    </div>
  );
};
