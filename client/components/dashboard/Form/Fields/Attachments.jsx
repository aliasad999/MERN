import Upload from "@/common/Upload/Input";
import styles from "./fields.module.scss";
const options = {
  required: "This field is required",
};
export default function Attachments() {
  return (
    <fieldset className={styles.fields}>
      <legend>Attachments*</legend>
      <Upload
        name="interMarksheet"
        type="file"
        label="Inter Mark Sheet"
        options={options}
      />
      <Upload
        name="oLevelsMarksheet"
        type="file"
        label="O Levels Marksheet"
        options={options}
      />
      <Upload name="CNIC" type="file" label="CNIC/B-FORM" options={options} />
      <Upload
        name="fatherCNIC"
        type="file"
        label="CNIC Father"
        options={options}
      />
    </fieldset>
  );
}
