import { Link } from "react-router-dom";
import Heroimg from "../assets/Heroimg.jpg";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Mediterranean flavors with a modern twist. Join us in the heart of Chicago for an unforgettable dining experience.
          </p>
          <Link to="/booking">
            <button className="hero-cta">Reserve A Table</button>
          </Link>
        </div>
        <div className="hero-image-wrapper">
          <img src={Heroimg} className="hero-img" alt="Little Lemon Restaurant" />
        </div>
      </div>
    </header>
  );
};

export default CallToAction;
