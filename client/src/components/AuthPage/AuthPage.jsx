import React, { useContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { registerUser } from "@/api/auth";
import { useNavigate } from "react-router-dom";
import styles from "./auth-page.module.scss";
import Hero from "./Hero/Hero";
import Form from "./Form/form";
import axios from "axios";
import { useAuthContext } from "@/context/AuthProvider";
import { toast } from "react-toastify";
function AuthPage() {
  const { loginUser } = useAuthContext();
  const navigate = useNavigate();
  const methods = useForm();
  const [isSignin, setIsSignin] = useState(true);
  useEffect(() => {
    methods.reset();
  }, [isSignin]);
  function onSubmit(userData) {
    // toast.loading("Loading", { toastId: "loading" });
    if (!isSignin) {
      const id = toast.loading("Loading", {
        autoClose: true,
        position: "top-center",
      });
      registerUser(userData).then((data) => {
        if (data.status === 406) {
          toast.update(id, {
            render: "Email already exists",
            type: "warning",
            autoClose: true,
            isLoading: false,
          });
        } else {
          toast.update(id, {
            render: "Success! Please log in to continue",
            type: "success",
            isLoading: false,
            autoClose: true,
          });
          setIsSignin(true);
        }
        console.log(data);
      });
    } else {
      toast
        .promise(
          () => loginUser(userData),
          {
            pending: "Loading...",
            success: "Logged in successfully",
            error: "Incorrect email or password",
          },
          {
            position: "top-center",
            autoClose: true,
          }
        )
        .then((data) => {
          console.log(data);
          setIsSignin(true);
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
