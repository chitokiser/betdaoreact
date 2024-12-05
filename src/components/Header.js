import React from "react";


const Header = () => {
  const addTokenBet = async () => {
    if (window.ethereum) {
      await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: "0xBF93D17Dbb666a552bf8De43C8002FE3a3638449", // BET Token Address
            symbol: "BET",
            decimals: 18,
          },
        },
      });
    } else {
      alert("MetaMask is not installed!");
    }
  };

  const addTokenBut = async () => {
    if (window.ethereum) {
      await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: "0xaCdA496b1f65F19Bb64E89B1D8fB89f10a47A163", // BUT Token Address
            symbol: "BUT",
            decimals: 18,
          },
        },
      });
    } else {
      alert("MetaMask is not installed!");
    }
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light mb-4">
      <div className="container">
        <a className="navbar-brand" href="/index.html">
        <img src="/images/logo.png" alt="Logo" width="58" height="62" />
        </a>
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
              <a className="nav-link" href="/mypage.html">
                My page
              </a>
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
                  <a className="dropdown-item" href="/p2e/mt5.html">
                    MT5 Simulated investment
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/p2e/dicefootball.html">
                    Blockchain Soccer
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/p2e/wordle.html">
                    Blockchain Wordle
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/p2e/RelayLotto.html">
                    RelayLotto
                  </a>
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
                  <a className="dropdown-item" href="/defi/farm.html">
                    Blockchain InterestFarm
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/defi/betswap.html">
                    BetSwap
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/trust/match.html">
                    Matching
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/trust/trust.html">
                    Payment Management
                  </a>
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
                  <a className="dropdown-item" href="/alliance/affiliate.html">
                    Myanmar
                  </a>
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
                  <a className="dropdown-item" href="/betex.html">
                    BET Token
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/butex.html">
                    BUT Token
                  </a>
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
                  <a className="dropdown-item" href="/memberjoin.html">
                    Sign up
                  </a>
                </li>
                <li>
                  <button className="dropdown-item" onClick={addTokenBet}>
                    Add BET
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={addTokenBut}>
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
