import React from "react";
import { useFormContext } from "react-hook-form";
import BoxWrapper from "../BoxWrapper/BoxWrapper";
import Label from "../BoxWrapper/Label";
import styles from "./select-box.module.scss";
function SelectBox({ name, selectOptions, options, label }) {
  const { register } = useFormContext();
  return (
    <BoxWrapper name={name}>
      <Label name={name} label={label} />
      <select
        className={styles["select"]}
        {...register(name, options)}
        id={name}
      >
        {selectOptions.map((opt, i) => {
          return (
            <option key={i} value={opt.value}>
              {opt.text}
            </option>
          );
        })}
      </select>
    </BoxWrapper>
  );
}

export default SelectBox;
