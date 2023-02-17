import React, { useState } from "react";
import BoxWrapper from "../BoxWrapper/BoxWrapper";
import Input from "./Input";
import Label from "./Label";
import svg from "../../../public/svg/camera-icon.svg";
import { useFormContext } from "react-hook-form";
function Upload({ name, options, label }) {
  const [imgSrc, setImgSrc] = useState({
    src: svg,
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
      <Input name={name} onChange={handleChange} options={options} />
      <Label name={name} src={imgSrc} label={label} />
    </BoxWrapper>
  );
}

export default Upload;
