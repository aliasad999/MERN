import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import BoxWrapper from "../BoxWrapper/BoxWrapper";
import Input from "./Input";
import Label from "../BoxWrapper/Label";

function InputBox({ name, options, label, type }) {
  return (
    <BoxWrapper name={name}>
      <Label label={label} name={name} />
      <Input type={type} name={name} options={options} />
    </BoxWrapper>
  );
}

export default InputBox;
