import SigninForm from "@/components/auth/SigninForm";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

function signin() {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (!session) {
    return <SigninForm />;
  } else {
    router.push("/dashboard");
  }
}

export default signin;
