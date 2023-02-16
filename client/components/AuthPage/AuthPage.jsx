import React, { useContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { loginUser, registerUser } from "@/services/auth";
import { useRouter } from "next/router";
import styles from "./auth-page.module.scss";
import Hero from "./Hero/Hero";
import Form from "./Form/form";
import { setCookie } from "cookies-next";
import axios from "axios";
function AuthPage() {
  const router = useRouter();
  const methods = useForm();
  const [isSignin, setIsSignin] = useState(true);
  useEffect(() => {
    methods.reset();
  }, [isSignin]);
  function onSubmit(userData) {
    if (!isSignin) {
      registerUser(userData).then((data) => {
        setIsSignin(true);
      });
    } else {
      loginUser(userData).then((data) => {
        console.log(data);
        setCookie("refresh", data.refreshToken);
        setCookie("email", userData.email);
        setCookie("access", data.accessToken);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.accessToken}`;
        router.replace("/dashboard");
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
