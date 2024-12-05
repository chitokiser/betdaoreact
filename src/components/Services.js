import React from "react";
import Card from "./Card";

const Services = () => {
  const services = [
    {
      title: "MetaTrader5 Simulated Investment",
      description: "Open an MT5 demo account ($5000) and register on the blockchain. Earn token rewards upon profit realization.",
      image: "/images/MT5.png",
      link: "../p2e/mt5.html",
    },
    {
      title: "Blockchain Soccer",
      description: "Blockchain-based trustless random number game.",
      image: "/images/bs.png",
      link: "../p2e/dicefootball.html",
    },
    {
      title: "Blockchain Interest Farm",
      description: "Plant money tree seeds and harvest profits.",
      image: "/images/byf.png",
      link: "../defi/farm.html",
    },
    // Add other services here...
  ];

  return (
    <div className="container my-4">
      <div className="row g-4">
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            link={service.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
