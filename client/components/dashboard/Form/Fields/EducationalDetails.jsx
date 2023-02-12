import Input from "@/common/InputBox/Input";
import InputBox from "@/common/InputBox/InputBox";
import SelectBox from "@/common/InputBox/SelectBox";
import { useFormContext } from "react-hook-form";
import styles from "./fields.module.scss";
const options = {
  required: "This field is required",
};
const selectOptions = [
  { text: "O-level", value: "oLevel" },
  { text: "Matriculation", value: "matric" },
];
export default function EducationalDetails() {
  const { watch } = useFormContext();
  return (
    <fieldset className={styles.fields}>
      <legend>Educational Details*</legend>
      <SelectBox
        label="Degree/Certificate"
        name="certificate"
        options={options}
        selectOptions={selectOptions}
      />
      <InputBox
        name="school"
        label="School/College: "
        type="text"
        options={options}
      />
      <InputBox
        name="board"
        label="Name of Board: "
        type="text"
        options={options}
      />
    </fieldset>
  );
}
