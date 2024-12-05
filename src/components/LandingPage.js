import React from "react";

const LandingPage = () => {
  return (
    <div>
      {/* Welcome Section */}
      <div className="container my-4">
        <div className="card-body text-center">
          <p>
            <strong>BET (Belief Equity Token)</strong>
          </p>
          <p>Decentralized P2E, DeFi, Alliance, Dex Service</p>
          <p>
            <strong>1 BET token = 1 USD</strong>
          </p>
          <p>
            The value of BET is guaranteed by <strong>opBNB coin</strong>.
          </p>
          <p>
            Anyone who holds BUT can participate in the decision-making of
            BetDAO.
          </p>
          <p>
            <strong>100%</strong> of the platform's profits are distributed to
            BUT owners.
          </p>
          <p>Transparent and fair distribution is made according to platform contribution.</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="card mb-4">
        <div className="card-header text-center bg-secondary text-white">
          <h4>BetDAO Services</h4>
        </div>
        <div className="card-body">
          <div className="row g-4">
            {/* Service Cards */}
            {serviceData.map((service, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100">
                  <img src={service.image} className="card-img-top" alt={service.title} />
                  <div className="card-body">
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="list-group-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="card-body text-center">
                    <a href={service.link} className="btn btn-primary w-100">
                      Go
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Service data for mapping
const serviceData = [
  {
    image: "/images/MT5.png",
    title: "MetaTrader5 Simulated Investment",
    description:
      "Open an MT5 demo account ($5000) and register on the blockchain. Earn token rewards upon profit realization.",
    features: ["Deposit: $5000", "Leverage: Free", "Reward: 100 BET per $1000 profit"],
    link: "../p2e/mt5.html",
  },
  {
    image: "/images/bs.png",
    title: "Blockchain Soccer",
    description: "Blockchain-based trustless random number game.",
    features: ["Bet on Wins, Draws, and Losses", "Rewards proportional to score differences"],
    link: "../p2e/dicefootball.html",
  },
  {
    image: "/images/byf.png",
    title: "Blockchain Interest Farm",
    description: "Plant money tree seeds and harvest profits.",
    features: ["Seed Price: 10 Game Points (GP)", "Harvest by random number", "Special reward for planting 10 seeds"],
    link: "../defi/farm.html",
  },
  {
    image: "/images/payment.png",
    title: "Blockchain Payment Management",
    description: "Essential services for living in Southeast Asia for a month",
    features: ["Labor costs, real estate rent, car rental", "Pay a set amount weekly", "Stop paying if unused"],
    link: "../trust/trust.html",
  },
  {
    image: "/images/affiliate/4.png",
    title: "Blockchain affiliated store",
    description: "Myanmar Affiliate Store",
    features: ["Affiliate Cashback Leverage", "Jackpots greater than the payout amount", "Anyone can register as an affiliate"],
    link: "../alliance/affiliate.html",
  },
  {
    image: "/images/wordle.png",
    title: "Blockchain Wordle",
    description: "Guess the WORDLE in five tries.",
    features: [
      "Each guess must be a valid six-letter word.",
      "Members can register their own quizzes",
      "Win accumulated rewards for correct answers",
    ],
    link: "../p2e/wordle.html",
  },
  {
    image: "/images/RelayLotto.png",
    title: "RelayLotto",
    description: "Enter 5 numbers from 1 to 45",
    features: ["Match 5 numbers in order to win", "Proportional rewards to jackpot", "Two-way member registration game"],
    link: "../p2e/RelayLotto.html",
  },
  {
    image: "/images/miyanma/1.png",
    title: "Matching",
    description: "Global Blockchain Wedding Service.",
    features: ["First Marriage or Remarriage", "Support Fund Trust", "Blockchain Proposal"],
    link: "../trust/match.html",
  },
];

export default LandingPage;
