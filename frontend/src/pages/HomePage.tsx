import "../css/HomePage.css";
import { Carousel } from "react-bootstrap";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useState } from "react";
import CookieConsent from "react-cookie-consent";
// import AuthorizeView, { AuthorizedUser } from "../components/AuthorizeView";
// import Logout from "../components/Logout";

function HomePage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close the answer if the same question is clicked
    } else {
      setActiveIndex(index); // Open the answer
    }
  };

  const carouselItems = [
    {
      title: "Streaming Classics in Hi-Fi",
      subtitle: "Retro vibes. Timeless cinema.",
      image: "/images/Fatima.jpg",
    },
    {
      title: "Lights, Camera, Nostalgia",
      subtitle: "Relive the golden age of film.",
      image: "/images/roma.jpg",
    },
    {
      title: "Watch It Like It's 1979",
      subtitle: "Old-school stories on demand.",
      image: "/images/MoonriseKingdom.webp",
    },
    {
      title: "Watch It Like It's 1979",
      subtitle: "Old-school stories on demand.",
      image: "/images/Zion.jpg",
    },
    {
      title: "Watch It Like It's 1979",
      subtitle: "Old-school stories on demand.",
      image: "/images/Zion.jpg",
    },
  ];

  const top10Movies = [
    "/images/Grand Hotel.jpg",
    "/images/Zion.jpg",
    "/images/Zenda.jpg",
    "/images/Young Tiger.jpg",
    "/images/Without Gorky.jpg",
    "/images/White Boy.jpg",
    "/images/Giri  Haji.jpg",
    "/images/Gelo.jpg",
    "/images/Flavors of Youth International Version.jpg",
    "/images/Fatima.jpg",
  ];

  const faqItems = [
    {
      question: "What is this service?",
      answer: "We stream retro films with hi-fi flavor and analog heart.",
    },
    {
      question: "How much does it cost?",
      answer: "Less than a vinyl record. Plans start at $4.99/month.",
    },
    {
      question: "Can I watch on any device?",
      answer: "Yep—TV, tablet, laptop, VHS (just kidding).",
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel anytime via your account settings.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 7-day free trial for new users.",
    },
  ];

  return (
    <>
      {/* <AuthorizeView>
        <span>
          <Logout>
            Logout
            <AuthorizedUser value="email" />
          </Logout>
        </span> */}
      {/* HOME PAGE */}
      <div className="homepage">
        {/* HEADER CAROUSEL */}
        <section className="hero-carousel">
          <nav>
            <NavBar />
          </nav>
          <Carousel controls={true} indicators={true} fade interval={4000}>
            {carouselItems.map((item, index) => (
              <Carousel.Item key={index}>
                <div className="carousel-background">
                  <img src={item.image} className="carousel-img" alt="Slide" />
                  <div className="carousel-overlay">
                    <div className="carousel-text">
                      <h1>{item.title}</h1>
                      <p>{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </section>

        {/* FIND SOMETHING NEW SECTION */}
        <section className="find-new">
          <h2>Find Something New</h2>
          <div className="movie-grid">
            {top10Movies.map((src, idx) => (
              <div className="movie-item" key={idx}>
                <span className="ranking">{idx + 1}</span>
                <img src={src} alt={`Top ${idx + 1}`} />
              </div>
            ))}
          </div>
        </section>

        {/* MORE REASONS TO JOIN */}
        <section className="reasons-to-join">
          <h2>More Reasons to Join</h2>
          <div className="reason-cards">
            <div className="card">
              Options Tailored to You
              <div className="subtext">
                Discover your next favorite movie effortlessly with our smart
                filters and personalized recommendations.
              </div>
            </div>
            <div className="card">
              Endless Choices
              <div className="subtext">
                Explore a vast library of movies and shows, from timeless
                classics to the latest releases.
              </div>
            </div>
            <div className="card">
              Exclusive Access
              <div className="subtext">
                Get early access to new releases and special screenings, just
                for our members.
              </div>
            </div>
            <div className="card">
              Personalized Experience
              <div className="subtext">
                Enjoy a viewing experience tailored to your preferences, with
                recommendations you'll love.
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="faq">
          <h2>Frequently Asked Questions</h2>
          <br />
          <br />
          {faqItems.map((faq, index) => (
            <div key={index} className="faq-card">
              <div className="faq-question" onClick={() => toggleAnswer(index)}>
                <h5>{faq.question}</h5>
                <div className="faq-plus-icon">+</div>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </section>

        <CookieConsent
          location="bottom"
          buttonText="I Agree"
          cookieName="userConsentGiven"
          style={{ background: "#2B373B", color: "#fff", fontSize: "14px" }}
          buttonStyle={{
            background: "#4CAF50",
            color: "#fff",
            fontSize: "14px",
            padding: "10px 20px",
            borderRadius: "5px",
          }}
          expires={365}
        >
          This website uses cookies to ensure you get the best experience on our
          website.{" "}
          <a
            href="/privacy-policy"
            style={{ color: "#fff", textDecoration: "underline" }}
          >
            Learn more
          </a>
        </CookieConsent>
        {/* FOOTER */}
        <div>
          <Footer />
        </div>
      </div>
      {/* </AuthorizeView> */}
    </>
  );
}

export default HomePage;
