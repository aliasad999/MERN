import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import PersonalInfo from "./fields/PersonalInfo";
import Button from "@/components/common/Button";
function Form() {
  const methods = useForm();

  function onSubmit(e) {
    console.log(e);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <PersonalInfo />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
}

export default Form;
