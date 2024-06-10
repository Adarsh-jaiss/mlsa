/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Xray",
    description:
      "An open source library for Simplifying database structure extraction for databases in Go. Implemented methods for extracting database schema for MySQL and PostgreSQL, Snowflake, Bigquery. Added unit tests to test the library functionality and reliability. Created a library to provide developers with a reliable tool for simplifying database structure extraction in Go projects.",
    url: "", // URL not provided
  },
  {
    title: "Toolcraft: A Microservice Tool Calculator",
    description:
      "A microservice application that calculates the real-time distance travelled by a vehicle and creates a toll tax invoice accordingly. Integrated with WebSocket for real-time data visualization & Apache Kafka for real-time data processing. Implemented GRPC for microservice communication. The application has Prometheus and Grafana integrated for monitoring and alerting.",
    url: "", // URL not provided
  },
  {
    title: "Book My Hotel",
    description:
      "A fully fledged backend system that facilitates hotel management (an OYO MVP). Implemented JWT Token based Authentication. Added Admin panel for Hotel and room management. Added Database seeding using MongoDB.",
    url: "", // URL not provided
  },
  {
    title: "Ubuntu-Github-Notifier",
    description:
      "A Linux service that sends your GitHub notifications directly into your Ubuntu's centralized notification center. Built for automating your repetitive notifications rechecking. Used GitHub API for fetching real-time notifications. Used Linux kernel built-in package 'notify-send' to send the notification.",
    url: "", // URL not provided
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
