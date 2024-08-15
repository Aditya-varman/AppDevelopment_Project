import React, { useState } from "react";
import {
  FaRegCopy,
  FaHeadset,
  FaUpload,
  FaCog,
} from "react-icons/fa";
import ClaimImitation from "./ClaimImitation";
import ClaimHelpdesk from "./ClaimHelpdesk";
import ClaimUpload from "./ClaimUpload";
import ClaimProcess from "./ClaimProcess";
// import ClaimStatus from "./ClaimStatus";

const ClaimTabs = () => {
  const [activeTab, setActiveTab] = useState("Claim Imitation");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-center">
        <button
          className={`${
            activeTab === "Claim Imitation"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          } px-4 py-2 rounded-lg mr-4`}
          onClick={() => handleTabClick("Claim Imitation")}
        >
          <FaRegCopy className="mr-2 inline-block" />
          Claim Intimation
        </button>
        <button
          className={`${
            activeTab === "Claim Helpdesk"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          } px-4 py-2 rounded-lg mr-4`}
          onClick={() => handleTabClick("Claim Helpdesk")}
        >
          <FaHeadset className="mr-2 inline-block" />
          Claim Helpdesk
        </button>
        <button
          className={`${
            activeTab === "Claim Upload"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          } px-4 py-2 rounded-lg mr-4`}
          onClick={() => handleTabClick("Claim Upload")}
        >
          <FaUpload className="mr-2 inline-block" />
          Claim Upload
        </button>
        <button
          className={`${
            activeTab === "Claim Process"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-800"
          } px-4 py-2 rounded-lg mr-4`}
          onClick={() => handleTabClick("Claim Process")}
        >
          <FaCog className="mr-2 inline-block" />
          Claim Process
        </button>
        
      </div>
      <div className="container mx-auto mt-8">
        {activeTab === "Claim Imitation" && <ClaimImitation />}
        {activeTab === "Claim Helpdesk" && <ClaimHelpdesk />}
        {activeTab === "Claim Upload" && <ClaimUpload />}
        {activeTab === "Claim Process" && <ClaimProcess />}
        {" "}
      </div>
    </div>
  );
};

export default ClaimTabs;
