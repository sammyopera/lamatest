import React from "react";
import jetLama from "../images/jet_lama.png"; // Adjust the path as necessary

const Footer = () => {
  return (
    <div>
      <footer className="bg-serene_blue text-white text-center p-5">
        <div className="flex justify-center">
          {" "}
          <img
            src={jetLama}
            width={90}
            height={10}
            alt=""
            className="flex z-40 justify-center"
          />
        </div>

        <p className="text-sm font-cust">
          © 2021 Lama Token. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
