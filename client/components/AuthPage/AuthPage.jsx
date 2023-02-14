import React, { useContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { loginUser, registerUser } from "@/services/auth";
import { useRouter } from "next/router";
import styles from "./auth-page.module.scss";
import Hero from "./Hero/Hero";
import Form from "./Form/form";
function AuthPage() {
  const router = useRouter();
  const methods = useForm();
  const [isSignin, setIsSignin] = useState(true);
  useEffect(() => {
    methods.reset();
  }, [isSignin]);
  function onSubmit(data) {
    if (!isSignin) {
      registerUser(data).then((data) => {
        setIsSignin(true);
      });
    } else {
      loginUser(data).then((data) => {
        window.localStorage.setItem("data", JSON.stringify(data));
      });
    }
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

export default AuthPage;
