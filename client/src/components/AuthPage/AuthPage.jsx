import React, { useContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { registerUser } from "@/api/auth";
import { useNavigate } from "react-router-dom";
import styles from "./auth-page.module.scss";
import Hero from "./Hero/Hero";
import Form from "./Form/form";
import axios from "axios";
import { useAuthContext } from "@/context/AuthProvider";
function AuthPage() {
  const { loginUser } = useAuthContext();
  const navigate = useNavigate();
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
      loginUser(userData);
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
