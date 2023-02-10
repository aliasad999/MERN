import InputBox from "@/common/InputBox";
import styles from "./fields.module.scss";
const options = {
  required: "This field is required",
};
export default function EducationalDetails() {
  return (
    <fieldset className={styles.fields}>
      <legend>Educational Details</legend>
    </fieldset>
  );
}
