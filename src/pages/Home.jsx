import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://github.com/TYRANNY905">Rudra Narayan</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/careerpage">CareerPage</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
