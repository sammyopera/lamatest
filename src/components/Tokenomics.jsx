import React from "react";
import tokenomicWeb from "../images/tokenomicWeb.png";
import tokenomicMobile from "../images/tokenomicMobile.png";
import { useState } from "react";
import "../styles/token.css";
import Jet from "../images/jet_lama.png";
import logo from "../images/crop.png";

const Tokenomics = () => {
  // manage spin states
  const [spinStates, setSpinStates] = useState({
    phase1: false,
    phase2: false,
    phase3: false,
    phase4: false,
    phase5: false,
    phase6: false,
  });

  const toggleSpin = (phase) => {
    setSpinStates((prevState) => ({
      ...prevState,
      [phase]: !prevState[phase],
    }));
  };
  return (
    <>
      <div className="bg-dalai_red">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center mt-2">
            <div className="text-4xl font-extrabold text-[#ffff] font-cust1">
              LAMANOMICS
            </div>
            {/* Display only on md and larger screens */}
            <img
              src={tokenomicWeb}
              className="hidden md:block"
              width={1000}
              alt=""
            />
            {/* Display only on smaller than md screens */}
            <img
              src={tokenomicMobile}
              className="md:hidden"
              width={500}
              alt=""
            />
          </div>

          <div
            className="flex flex-row flex-wrap bg-serene_blue bg-opacity-30 p-3 rounded-2xl justify-between text-[#ffff] mx-10"
            xyz="fade flip-up flip-left"
          >
            <div className="mx-2 px-4 my-3 md:mx-10 md:px-10 md:my-5 xyz-in">
              <p className="font-bold text-sm md:text-base">Total Supply</p>
              <p className="font-bold font-cust1 text-sm md:text-base">
                100,000,000
              </p>
            </div>
            <div className="mx-2 px-4 my-3 md:mx-10 md:px-10 md:my-5 xyz-in">
              <p className="font-bold text-sm md:text-base">Liquidity</p>
              <p className="font-bold font-cust1 text-sm md:text-base">
                Burned
              </p>
            </div>
            <div className="mx-2 px-4 my-3 md:mx-10 md:px-10 md:my-5 xyz-in">
              <p className="font-bold text-sm md:text-base">CA</p>
              <p className="font-bold font-cust1 text-sm md:text-base">TBA</p>
            </div>
          </div>
          {/* <div>
            Join our pride and become a part of the Mufasa Journey to the moon.
            Whether you're here to hodl, create, or simply enjoy the memes,
            there's a place for you in our jungle.
          </div> */}
        </div>
        <div>
          <div className="flex justify-center text-3xl font-extrabold pt-10 pl-5 text-[#ffff] font-cust1 my-8">
            $Lama Utilities
          </div>
          <div className="flex justify-center">
            {" "}
            <img src={logo} width={100} alt="" />-
          </div>

          <div>
            <div>
              <div className="flex justify-center text-[#ffff] font-cust bg-serene_blue bg-opacity-10 shadow-4xl mx-10 p-3 rounded-2xl border border-gold">
                To create a sense of exclusivity and engagement for community
                members, $LAMA offers the following types of access:
              </div>
            </div>
            <div className="flex flex-col md:flex-row m-10 md:space-x-10">
              <div className="  bg-gold bg-gradient-to-bl from-dalai_red font-cust text-[#fff] bg-opacity-40 p-5 rounded-2xl drop-shadow-2xl mb-5">
                <ul>
                  <li>
                    <span className="font-extrabold text-gold">
                      Exclusive Events :{" "}
                    </span>{" "}
                    Host special events such as virtual meet-and-greets, Q&A
                    sessions, or live streams with the creators and other
                    influential figures involved in the project.
                  </li>
                  <br />
                  <li>
                    <span className="font-extrabold text-gold">
                      Special Merchandise :{" "}
                    </span>
                    Special Offer limited-edition or exclusive Uncle Lama
                    merchandise that is only available to community members.
                  </li>
                  <br />
                  <li>
                    <span className="font-extrabold text-gold">
                      Interactive Experiences :{" "}
                    </span>{" "}
                    Create interactive experiences or activities, like guided
                    meditation sessions, mindfulness workshops, or storytelling
                    events featuring Uncle Lama.
                  </li>
                  <br />
                  <li>
                    <span className="font-extrabold text-gold">
                      Membership Tiers:{" "}
                    </span>{" "}
                    Create different membership tiers with varying levels of
                    access and benefits, allowing members to choose the level of
                    involvement that suits them best.
                  </li>
                </ul>
              </div>
              <div className="  bg-gold bg-gradient-to-bl from-dalai_red font-cust text-[#fff] bg-opacity-40 p-5 rounded-2xl drop-shadow-2xl mb-5">
                <ul>
                  <li>
                    <span className="font-extrabold text-gold">
                      Beta Testing:
                    </span>{" "}
                    Give community members the opportunity to beta test new
                    features or products, allowing them to provide feedback and
                    influence the final outcome.
                  </li>
                  <br />
                  <li>
                    <span className="font-extrabold text-gold">
                      Private Forums and Groups:
                    </span>
                    Establish private online forums or social media groups where
                    members can connect, share experiences, and discuss topics
                    related to Uncle Lama and Buddhism.
                  </li>
                  <br />
                  <li>
                    <span className="font-extrabold text-gold">
                      Personalized Content:
                    </span>{" "}
                    Offer personalized content, such as custom messages from
                    Uncle Lama or tailored mindfulness practices based on member
                    preferences.
                  </li>
                  <br />
                  <li>
                    <span className="font-extrabold text-gold">
                      Exclusive Discounts:
                    </span>
                    Provide members with special discounts on merchandise,
                    events, or other offerings related to the project.
                  </li>
                  <br />
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-2">
          <div className="flex justify-center">
            <div className="text-4xl font-extrabold text-[#ffff] font-cust1">
              ROADMAP
            </div>
            <div>
              <img src={Jet} width={100} alt="" />
            </div>
          </div>
          <div className="m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -gap-6 gap-y-4">
            {/* Phase 1 */}
            <div
              onClick={() => toggleSpin("phase1")}
              className={`bg-serene_blue bg-gradient-to-br from-[#ffff] drop-shadow-2xl p-2 z-45 rotate-6 rounded-xl font-cust text-dalai_red ${
                spinStates.phase1 ? "spin" : ""
              }`}
            >
              <div className="flex justify-center font-extrabold">Phase 1</div>
              <br />
              <div className="flex justify-center text-sm">
                Community Building (Months 1-3)
              </div>{" "}
              <br />
              <ul>
                <li>* Inception and Planning:</li> <br />
                <li>* Community Outreach:</li>
                <br />
                <li>* Initial Release:</li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div
              onClick={() => toggleSpin("phase2")}
              className={`bg-serene_blue  bg-gradient-to-br from-[#ffff] drop-shadow-2xl p-2 z-40 rotate-6 rounded-xl font-cust text-dalai_red ${
                spinStates.phase2 ? "spin" : ""
              }`}
            >
              <div className="flex justify-center font-extrabold">Phase 2</div>
              <br />

              <div className="flex justify-center text-sm">
                Token & Wallet Dev. (Months 4-6)
              </div>

              <br />
              <ul>
                <li>* Community Token Creation</li> <br />
                <li> *Pre-launch Marketing</li>
                <br />
                <li>* Token Launch</li>
                <br />
                <li>* Crypto Wallet Development</li>
                <br />
                <li>* Wallet Launch</li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div
              onClick={() => toggleSpin("phase3")}
              className={`bg-serene_blue bg-gradient-to-br from-[#ffff] drop-shadow-2xl p-2 z-30 rotate-6 rounded-xl font-cust text-dalai_red ${
                spinStates.phase3 ? "spin" : ""
              }`}
            >
              <div className="flex justify-center font-extrabold">Phase 3</div>
              <br />
              <div className="flex justify-center text-sm">
                Engagement & NFT Launch (Months 7-9)
              </div>{" "}
              <br />
              <ul>
                <li>* NFT Development</li> <br />
                <li>* Community Outreach:</li>
                <br />
                <li>* Staking and Rewards Program</li>
                <br />
                <li>* NFT Launch</li>
              </ul>
            </div>

            {/* Phase 4 */}
            <div
              onClick={() => toggleSpin("phase4")}
              className={`bg-serene_blue  bg-gradient-to-br from-[#ffff] drop-shadow-2xl p-2 z-20 rotate-6 rounded-xl font-cust text-dalai_red ${
                spinStates.phase4 ? "spin" : ""
              }`}
            >
              <div className="flex justify-center font-extrabold">Phase 4</div>
              <br />
              <div className="flex justify-center text-sm">
                Exclusive Access and Virtual Experiences (Months 10-12)
              </div>{" "}
              <br />
              <ul>
                <li>* Exclusive Content and Events:</li> <br />
                <li>* Augmented Reality (AR) Experiences</li>
                <br />
                <li>* Private Forums and Groups</li>
              </ul>
            </div>

            {/* Phase 5 */}
            <div
              onClick={() => toggleSpin("phase5")}
              className={`bg-serene_blue bg-gradient-to-br from-[#ffff] drop-shadow-2xl p-2 z-10 rotate-6 rounded-xl font-cust text-dalai_red ${
                spinStates.phase5 ? "spin" : ""
              }`}
            >
              <div className="flex justify-center font-extrabold">Phase 5</div>
              <br />
              <div className="flex justify-center text-sm">
                Merchandise Store & Charity Integration (Months 13-18)
              </div>{" "}
              <br />
              <ul>
                <li>* Merchandise Store and Charity Integraton</li> <br />
                <li>* Merchandise Store</li>
                <br />
                <li>* Educational Content</li>
                <br />
                <li>* Charity and Donations Platform</li>
              </ul>
            </div>

            {/* Phase 6 */}
            <div
              onClick={() => toggleSpin("phase6")}
              className={`bg-serene_blue bg-gradient-to-br from-[#ffff] drop-shadow-2xl p-2 z-0 rotate-6 rounded-xl font-cust text-dalai_red ${
                spinStates.phase6 ? "spin" : ""
              }`}
            >
              <div className="flex justify-center font-extrabold">Phase 6</div>
              <br />
              <div className="flex justify-center text-sm">
                Metaverse Integration and Continuous Improvement (Months 19-24)
              </div>{" "}
              <br />
              <ul>
                <li>* Metaverse Integration</li> <br />
                <li>* Community Governance</li>
                <br />
                <li>* Loyalty Programs</li>
                <br />
                <li>* Ongoing Development</li>{" "}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tokenomics;
