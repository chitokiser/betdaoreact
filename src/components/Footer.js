import React from "react";

const Footer = () => {
  return (
    <footer className="d-flex flex-column flex-sm-row justify-content-center align-items-center py-4 my-4 border-top">
      <p>
        <img
          src="/images/logo.png" // `public/assets/images/logo.png`에 이미지 저장
          alt="Vantage Logo"
          width="20"
          height="20"
        />{" "}
        Tell the truth
      </p>
    </footer>
  );
};

export default Footer;
