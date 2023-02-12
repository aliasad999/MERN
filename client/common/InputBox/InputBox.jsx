import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import BoxWrapper from "./BoxWrapper";
import Input from "./Input";
import Label from "./Label";

function InputBox({ name, options, label, type }) {
  const [imgSrc, setImgSrc] = useState({
    src: "/svg/camera-icon.svg",
    default: true,
  });
  const { trigger } = useFormContext();
  function handleChange(e) {
    console.log("handling");
    trigger(e.target.name);
    getImgData(e.target.files[0]);
  }
  function getImgData(files) {
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
        setImgSrc({
          src: this.result,
          default: false,
        });
      });
    }
  }

  return (
    <BoxWrapper name={name}>
      <Label type={type} label={label} name={name} src={imgSrc} />
      <Input
        type={type}
        onChange={handleChange}
        name={name}
        options={options}
      />
    </BoxWrapper>
  );
}

export default InputBox;
