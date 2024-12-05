import React, { useEffect, useState } from "react";
import axios from "axios";
import { ethers } from "ethers";

const TopData = () => {
  const [bnbPrice, setBnbPrice] = useState("-");
  const [bnbToBet, setBnbToBet] = useState("-");
  const [tvl, setTvl] = useState("-");
  const [gpBalance, setGpBalance] = useState("-");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch BNB price
        const responseBinanceTicker = await axios.get(
          "https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT"
        );
        const bnbPriceValue = parseFloat(responseBinanceTicker.data.price);
        setBnbPrice(bnbPriceValue.toFixed(4));
        setBnbToBet((1 / bnbPriceValue).toFixed(4));

        // Set up ethers provider and contracts
        const provider = new ethers.providers.JsonRpcProvider("https://1rpc.io/opbnb");
        const cyadexAddr = "0x40A29c38cA258020c6e2EdbcE9BD99f006f6260e";
        const betgpAddr = "0x35575D072f2974414Bd1679047aD2EaD11EA8CF7";
        const cyadexAbi = ["function balance() public view returns(uint256)"];
        const betgpAbi = ["function g1() public view returns(uint256)"];

        const cyadexContract = new ethers.Contract(cyadexAddr, cyadexAbi, provider);
        const betgpContract = new ethers.Contract(betgpAddr, betgpAbi, provider);

        // Fetch data from contracts
        const dexBal = await cyadexContract.balance();
        const gpbal = await betgpContract.g1();

        setTvl((dexBal / 1e18).toFixed(4));
        setGpBalance((gpbal / 1e18).toFixed(4));
      } catch (e) {
        console.error("Error in fetchData:", e.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="alert alert-primary" role="alert">
      <div className="container-box">
        <div className="row row-cols-2 row-cols-md-4 g-2 g-md-3">
          <div className="col">
            <div className="card">
              <div className="card-header">1BNB = ${bnbPrice}</div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-header">1BET = $1</div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-header">1BET = {bnbToBet} BNB</div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div
                className="card-header"
                style={{ backgroundColor: "#e1f5fe", color: "#000", fontWeight: "bold" }}
              >
                BNB TVL = {tvl}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopData;
