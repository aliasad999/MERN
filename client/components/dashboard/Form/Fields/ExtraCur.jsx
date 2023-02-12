import InputBox from "@/common/InputBox/InputBox";
import styles from "./fields.module.scss";
const options = {
  required: "This field is required",
};
export default function ExtraCur() {
  return (
    <fieldset className={styles.fields}>
      <legend>Extra Activities</legend>
      <InputBox name="activity" label="Activity: " options={options} />
      {/* <InputBox name="email" label="Email: " type="email" options={options} />
      <InputBox
        name="dateOfBirth"
        label="Date Of Birth: "
        type="date"
        options={options}
      /> */}
    </fieldset>
  );
}
