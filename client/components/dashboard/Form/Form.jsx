import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Button from "@/common/Button";
import styles from "./form.module.scss";
import Fields from "./Fields/Fields";
function Form() {
  const methods = useForm();

  function onSubmit(e) {
    console.log(e);
  }

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
        <Fields />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
}

export default Form;
