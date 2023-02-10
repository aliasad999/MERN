import InputBox from "@/components/common/InputBox";
import styles from "./fields.module.scss";
const options = {
  required: "This field is required",
};
export default function PersonalInfo() {
  return (
    <fieldset className={styles.fields}>
      <legend>Personal Information</legend>
      <InputBox
        name="fullName"
        label="Full Name: "
        options={{
          ...options,
          pattern: {
            value: /^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/,
            message: "No special characters allowed",
          },
        }}
      />
      <InputBox name="email" label="Email: " type="email" options={options} />
      <InputBox
        name="dateOfBirth"
        label="Date Of Birth: "
        type="date"
        options={options}
      />
    </fieldset>
  );
}
