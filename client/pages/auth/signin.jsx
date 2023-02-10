import AuthPage from "@/components/AuthPage/AuthPage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

function signin() {
  const router = useRouter();
  const { data: session } = useSession();
  if (!session) {
    return <AuthPage />;
  } else {
    router.push("/dashboard");
  }
}

export default signin;
