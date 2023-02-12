import InputBox from "@/common/InputBox/InputBox";
import styles from "./fields.module.scss";
const options = {
  required: "This field is required",
};
export default function PersonalInfo() {
  return (
    <fieldset className={styles.fields}>
      <legend>Personal Information*</legend>
      <InputBox
        name="firtName"
        label="First Name: "
        options={{
          ...options,
          pattern: {
            value: /^[a-zA-Z]+(?:[\s.]+[a-zA-Z]+)*$/,
            message: "No special characters allowed",
          },
        }}
      />
      <InputBox
        name="lastName"
        label="Last Name: "
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
        name="phoneNumber"
        label="Phone No: "
        type="number"
        options={{ ...options, minLength: { value: 8, message: "too short" } }}
      />
      <InputBox
        name="dateOfBirth"
        label="Date Of Birth: "
        type="date"
        options={options}
      />
      <InputBox
        name="address"
        label="Address: "
        type="text"
        options={{ ...options, minLength: { value: 8, message: "too short" } }}
      />
      <InputBox name="city" label="City: " type="text" options={options} />
    </fieldset>
  );
}
