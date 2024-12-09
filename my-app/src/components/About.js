import React from "react";
import Adrian from "../assets/Adrian.jpg"
import { Link } from "react-router-dom";

const About = () => {
  return (
    <header className="header">
      <section>
        <div className="banner">
          <h2>About Us</h2>
          <p>
            Founder: Adrian Alvarez <br>
            </br><br></br>
            In the bustling heart of [Chicago], a
            culinary gem known as The Little Lemon was born, thanks to the
            vision and passion of its founder, Adrian. From its humble
            beginnings, Adrian aspired to create a haven where the rich flavors
            and aromas of the Mediterranean could be experienced and celebrated
            by all. <br></br>
            <br></br>
            The Little Lemon prides itself on offering authentic
            Mediterranean recipes that have been lovingly passed down through
            generations. The menu is a testament to Adrian's dedication to
            preserving traditional cooking methods and ingredients. Guests can
            savor dishes like fresh Greek salads drizzled with olive oil,
            succulent lamb kebabs marinated to perfection, and indulgent baklava
            that melts in the mouth. <br></br>
            <br></br>
            Adrian's philosophy is simple yet profound:
            to serve food that not only delights the taste buds but also
            nourishes the soul. With a warm ambiance and a commitment to
            exceptional service, The Little Lemon has become a beloved fixture
            in the community, where patrons can enjoy a true taste of the
            Mediterranean. <br></br>
            <br></br>
            Under Adrian's watchful eye, The Little Lemon
            continues to flourish, bringing people together over shared meals
            and creating unforgettable dining experiences. The legacy of
            authentic Mediterranean cuisine lives on in every dish, making every
            visit to The Little Lemon a journey worth savoring.<br></br>
            <br></br>
             <strong>A Note From Adrian</strong><br>
             </br> "At The Little Lemon, we believe that food is more than just
            sustenance; it's a way to connect with each other and our heritage.
            Our recipes are crafted with love and authenticity, ensuring that
            every bite is a celebration of the Mediterranean culture."<br></br>
            <br></br>
            From fresh, locally-sourced ingredients to time-honored cooking
            techniques, Adrian's dedication ensures that The Little Lemon
            remains a beacon of culinary excellence and authenticity. 🌿🍋🍴
          </p>

          <button aria-label="on Click">Reserve Table</button>
        </div>
        <Link to="/booking">
            <button aria-label="on Click">Reserve Table</button>
          </Link>
        <div className="banner-img">
          <img src={Adrian} alt="banner food image" />
        </div>
      </section>
    </header>
  );
};

export default About;
