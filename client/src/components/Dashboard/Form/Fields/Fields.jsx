import React from "react";
import Attachments from "./Attachments";
import EducationalDetails from "./EducationalDetails";
import ExtraCur from "./ExtraCur";
import PersonalInfo from "./PersonalInfo";

function Fields() {
  return (
    <>
      <PersonalInfo />
      <EducationalDetails />
      <ExtraCur />
      <Attachments />
    </>
  );
}

export default Fields;
