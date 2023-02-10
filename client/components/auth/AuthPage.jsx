import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import styles from "./auth-page.module.scss";
import Hero from "./components/Hero/Hero";
import Form from "./components/Form/form";
function AuthForm() {
  const methods = useForm();
  const [isSignin, setIsSignin] = useState(true);
  function onSubmit(e) {
    console.log(e);
  }
  return (
    <FormProvider {...methods}>
      <div className={styles["form-wrapper"]}>
        <Hero />

        <Form
          isSignin={isSignin}
          onSubmit={methods.handleSubmit(onSubmit)}
          setIsSignin={setIsSignin}
        />
      </div>
    </FormProvider>
  );
}

export default AuthForm;
