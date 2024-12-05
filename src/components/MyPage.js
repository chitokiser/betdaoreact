import React, { useState } from "react";
import { ethers } from "ethers";

const MyPage = () => {
  const [level, setLevel] = useState("-");
  const [experience, setExperience] = useState("-");
  const [expNeeded, setExpNeeded] = useState("-");
  const [point, setPoint] = useState("-");
  const [mentor, setMentor] = useState("-");
  const [levelBar, setLevelBar] = useState(0);
  const [addresses, setAddresses] = useState([]);

  const contractAddress = {
    cutbank: "0x7af12A131182b966b813369Eb45393657a5a1bd5", // new butbank
  };

  const contractAbi = {
    cutbank: [
      "function myinfo(address user) public view returns(uint256,uint256,uint256,address,uint256)",
      "function levelup() public",
      "function withdraw() public",
      "function buffing() public",
      "function getmymenty(address user) public view returns (address[] memory)",
    ],
  };

  const initializeProvider = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
      await provider.send("eth_requestAccounts", []);
      return provider.getSigner();
    } catch (error) {
      console.error("Error initializing provider:", error);
    }
  };

  const handleMemberLogin = async () => {
    const signer = await initializeProvider();
    const contract = new ethers.Contract(
      contractAddress.cutbank,
      contractAbi.cutbank,
      signer
    );
    const address = await signer.getAddress();
    const [bonus, level, exp, mentor, currentExp] = await contract.myinfo(address);

    setPoint((bonus / 1e18).toFixed(4));
    setLevel(level);
    setMentor(mentor);
    setExperience(currentExp);
    const expNeeded = 2 ** level * 10000;
    setExpNeeded(expNeeded);
    setLevelBar((currentExp / expNeeded) * 100);
  };

  const handleLevelUp = async () => {
    try {
      const signer = await initializeProvider();
      const contract = new ethers.Contract(
        contractAddress.cutbank,
        contractAbi.cutbank,
        signer
      );
      await contract.levelup();
      alert("Level up successful!");
    } catch (error) {
      console.error("Level up error:", error);
    }
  };

  const handleBonusWithdraw = async () => {
    try {
      const signer = await initializeProvider();
      const contract = new ethers.Contract(
        contractAddress.cutbank,
        contractAbi.cutbank,
        signer
      );
      await contract.withdraw();
      alert("Bonus withdrawn successfully!");
    } catch (error) {
      console.error("Withdraw error:", error);
    }
  };

  const handleBuff = async () => {
    try {
      const signer = await initializeProvider();
      const contract = new ethers.Contract(
        contractAddress.cutbank,
        contractAbi.cutbank,
        signer
      );
      await contract.buffing();
      alert("Buff applied successfully!");
    } catch (error) {
      console.error("Buff error:", error);
    }
  };

  const fetchAddresses = async () => {
    try {
      const signer = await initializeProvider();
      const contract = new ethers.Contract(
        contractAddress.cutbank,
        contractAbi.cutbank,
        signer
      );
      const address = await signer.getAddress();
      const mentees = await contract.getmymenty(address);
      setAddresses(mentees.length > 0 ? mentees : ["No mentees found"]);
    } catch (error) {
      console.error("Fetch addresses error:", error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h5>My Page</h5>
        </div>
        <div className="card-body">
          <button
            className="btn btn-outline-success w-100 mb-3"
            onClick={handleMemberLogin}
          >
            View My Status
          </button>
          <ul className="list-group mb-3">
            <li className="list-group-item">Level: {level}</li>
            <li className="list-group-item">Experience: {experience} exp</li>
            <li className="list-group-item">
              Experience Points Required for Leveling Up: {expNeeded} exp
            </li>
            <li className="list-group-item">Point: {point} p</li>
            <li className="list-group-item">My Mentor: {mentor}</li>
            <li className="list-group-item">
              <div className="d-flex justify-content-between align-items-center">
                <button
                  className="btn btn-outline-dark position-relative"
                  onClick={handleLevelUp}
                >
                  Level Up
                </button>
                <div className="progress w-75 ms-3">
                  <div
                    className="progress-bar progress-bar-striped bg-success"
                    role="progressbar"
                    style={{ width: `${levelBar}%` }}
                  ></div>
                </div>
              </div>
            </li>
          </ul>
          <button
            className="btn btn-outline-success w-50 me-2"
            onClick={handleBonusWithdraw}
          >
            Point Withdrawal
          </button>
          <button
            className="btn btn-outline-primary w-50 ms-2"
            onClick={fetchAddresses}
          >
            My Mentees
          </button>
          <ul className="list-group mt-3">
            {addresses.map((addr, index) => (
              <li key={index} className="list-group-item">
                {addr}
              </li>
            ))}
          </ul>
          <button
            className="btn btn-outline-warning w-100 mt-3"
            onClick={handleBuff}
          >
            Buff
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
