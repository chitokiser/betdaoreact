import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const addToken = async (tokenAddress, symbol, decimals) => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: "wallet_watchAsset",
          params: {
            type: "ERC20",
            options: {
              address: tokenAddress,
              symbol: symbol,
              decimals: decimals,
            },
          },
        });
      } catch (error) {
        console.error("Error adding token:", error);
      }
    } else {
      alert("MetaMask is not installed!");
    }
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/images/logo.png" alt="Logo" width="58" height="62" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link className="nav-link" to="/mypage">
                My page
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                P2E
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/p2e/mt5">
                    MT5 Simulated Investment
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/p2e/dicefootball">
                    Blockchain Soccer
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/p2e/wordle">
                    Blockchain Wordle
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/p2e/relaylotto">
                    Relay Lotto
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Defi
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/defi/farm">
                    Blockchain InterestFarm
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/defi/betswap">
                    BetSwap
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/trust/match">
                    Matching
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/trust/trust">
                    Payment Management
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Alliance
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/alliance/affiliate">
                    Myanmar
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Token Exchange
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/betex">
                    BET Token
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/butex">
                    BUT Token
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Connection Wallet
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/memberjoin">
                    Sign up
                  </Link>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() =>
                      addToken(
                        "0xBF93D17Dbb666a552bf8De43C8002FE3a3638449",
                        "BET",
                        18
                      )
                    }
                  >
                    Add BET
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() =>
                      addToken(
                        "0xaCdA496b1f65F19Bb64E89B1D8fB89f10a47A163",
                        "BUT",
                        18
                      )
                    }
                  >
                    Add BUT
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
