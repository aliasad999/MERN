import TextField from "@/common/TextField/TextField";
import Select from "@/common/Select/Select";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useFormContext } from "react-hook-form";
import styles from "./details.module.scss";
const options = {
  required: "This field is required",
};
const selectOptions = [
  { text: "3", value: "3" },
  { text: "4", value: "4" },
  { text: "5", value: "5" },
  { text: "6", value: "6" },
];
const DetailsOlevel = () => {
  const { watch } = useFormContext();
  const numOfSubjects = watch("numberOfSubjects");
  console.log(numOfSubjects);
  return (
    <div className={styles["wrapper"]}>
      <div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={styles["wrapper-details"]}
      >
        <Select
          label="Number of Subjects"
          name="numberOfSubjects"
          options={options}
          selectOptions={selectOptions}
        />
        {Array(Number.parseInt(numOfSubjects) || 3)
          .fill()
          .map((_, i) => {
            return (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={styles["subject"]}
                >
                  <TextField
                    name={`subject${i + 1}marks`}
                    label={`Subject ${i + 1}`}
                    options={options}
                    type="text"
                  />
                  <Select
                    options={options}
                    selectOptions={selectOptions}
                    label="label"
                    name={`subject${i + 1}grades`}
                  />
                </motion.div>
              </AnimatePresence>
            );
          })}
      </div>
    </div>
  );
};

export default DetailsOlevel;
