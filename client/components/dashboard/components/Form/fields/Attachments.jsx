import InputBox from "@/components/common/InputBox";
import styles from "./fields.module.scss";
const options = {
  required: "This field is required",
};
export default function Attachments() {
  return (
    <fieldset className={styles.fields}>
      <legend>Attachments</legend>
      <InputBox
        name="interMarksheet"
        type="file"
        label="Inter Mark Sheet"
        options={options}
      />
      <InputBox
        name="oLevelsMarksheet"
        type="file"
        label="O Levels Marksheet"
        options={options}
      />
      <InputBox name="CNIC" type="file" label="CNIC/B-FORM" options={options} />
      <InputBox
        name="fatherCNIC"
        type="file"
        label="CNIC Father"
        options={options}
      />
    </fieldset>
  );
}
