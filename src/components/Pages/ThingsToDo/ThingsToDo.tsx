import React, { FunctionComponent } from "react";
import { Header } from "../../ReusableComponents/Header";
import { Footer } from "../../ReusableComponents/Footer";

export const ThingsToDo: FunctionComponent = () => {
  return (
    <div className="page-container">
      <Header />
      <div className={"page-body large"}>
        <h1>Things To Do</h1>
        <h3>In Antigua</h3>
        <p>
          <b>Santa Catalina Arch</b> - The Santa Catalina Arch is one of the
          distinguishable landmarks in Antigua Guatemala, Guatemala, located on
          5th Avenue North. Built in the 17th century, it originally connected
          the Santa Catalina convent to a school, allowing the cloistered nuns
          to pass from one building to the other without going out on the
          street.
        </p>
        <br />
        <p>
          <b>Iglesia de la Merced</b> - Destroyed twice by earthquakes, this
          1548 church was rebuilt in the 1700s to withstand earthquakes and
          boasts a lovely yellow facade and a huge stone fountain, reputed to be
          the largest in Central America.
        </p>
        <br />
        <p>
          <b>Central Market</b> - You'll find textiles, jewelry, clothes and
          Mayan crafts for reasonable prices at this permanent outdoor
          marketplace.
        </p>
        <br />
        <p>
          <b>Central Park</b> - Just one square block, it doesn't take much time
          to see the park. But it's a nice place to sit and rest while walking
          around the city.
        </p>
        <br />
        <p>
          <b>Coffee Farms</b> - There are several coffee plantations just
          outside Antigua that are perfect for a day tour.
        </p>
        <h3>Around Guatemala</h3>
        <p>
          Make a true vacation out of it! If you want to extend your time in
          Guatemala, the country has so much beauty to offer outside of Antigua.
          Here are a few that we recommend.
        </p>
        <p>
          <b>Lake Atitlán</b> - A beautiful volcanic lake about 3 hours from
          Antigua. The volcanoes Atitlán, Tolimán, and San Pedro on the shores
          of the lake form an impressive landscape. Around the lake you can
          visit the towns of Santiago, San Lucas, San Antonio Palopo, Santa
          Catarina Palopo, Panajachel, and San Pedro La Laguna.
        </p>
        <a
          className={"directions-link"}
          href="https://routinelynomadic.com/a-complete-guide-to-lake-atitlan/"
          target="_blank"
          rel="noreferrer"
        >
          <span>The Ultimate Guide to Visiting Lake Atitlán</span>
        </a>
        <p>
          <b>Tikal</b> - The ruins of an ancient Mayan city located in the
          northern part of the country.
        </p>
        <a
          className={"directions-link"}
          href="https://www.roadaffair.com/visiting-tikal-guide/"
          target="_blank"
          rel="noreferrer"
        >
          <span>The Ultimate Guide to Visiting Tikal</span>
        </a>
        <p>
          <b>Semuc Champey</b> - The pictures of this place alone explain why
          tourists love to visit. It's a natural limestone bridge atop which is
          a series of stepped, turquoise pools. It's many hours drive from
          Antigua, but is a beautiful place to visit for anyone hoping to see
          more of the country while you're there.
        </p>
        <a
          className={"directions-link"}
          href="https://www.roadaffair.com/the-ultimate-guide-to-visiting-semuc-champey/"
          target="_blank"
          rel="noreferrer"
        >
          <span>The Ultimate Guide to Visiting Semuc Champey</span>
        </a>
      </div>

      <Footer pageSize="large" />
    </div>
  );
};
