import React, { useState } from "react";
import AuthFormHero from "./components/AuthPageHero/AuthPageHero";
import AuthFormBody from "./components/AuthPageBody/AuthPageForm";
import { FormProvider, useForm } from "react-hook-form";
import styles from "./auth-page.module.scss";
function AuthForm() {
  const methods = useForm();
  const [isSignin, setIsSignin] = useState(true);
  function onSubmit(e) {
    console.log(e);
  }
  return (
    <FormProvider {...methods}>
      <div className={styles["form-wrapper"]}>
        <AuthFormHero />

        <AuthFormBody
          isSignin={isSignin}
          onSubmit={methods.handleSubmit(onSubmit)}
          setIsSignin={setIsSignin}
        />
      </div>
    </FormProvider>
  );
}

export default AuthForm;
