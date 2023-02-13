import Input from "@/common/InputBox/Input";
import InputBox from "@/common/InputBox/InputBox";
import SelectBox from "@/common/InputBox/SelectBox";
import { useFormContext } from "react-hook-form";
import DetailsOlevel from "./DetailsOlevel";
import styles from "./fields.module.scss";
import { motion } from "framer-motion";
const options = {
  required: "This field is required",
};
const selectOptions = [
  { text: "O-level", value: "oLevel" },
  { text: "Matriculation", value: "matric" },
];
export default function EducationalDetails() {
  const { watch } = useFormContext();
  const certificate = watch("certificate");
  return (
    <motion.fieldset className={`${styles.fields} ${styles["fields__col-3"]}`}>
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
      {certificate === "oLevel" && <DetailsOlevel />}
    </motion.fieldset>
  );
}
