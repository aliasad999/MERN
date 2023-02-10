import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import PersonalInfo from "./fields/PersonalInfo";
import Button from "@/components/common/Button";
import Attachments from "./fields/Attachments";
import styles from "./form.module.scss";
import ExtraCur from "./fields/ExtraCur";
function Form() {
  const methods = useForm();

  function onSubmit(e) {
    console.log(e);
  }

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
        <PersonalInfo />
        <ExtraCur />
        <Attachments />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
}

export default Form;
