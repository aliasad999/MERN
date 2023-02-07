import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "../../components/common/Button";
import Layout from "@/components/Layout/Layout";
import Dashboard from "@/components/dashboard/Dashboard";
export default function Component() {
  const [session, setSession] = useState();
  const router = useRouter();
  useEffect(() => {
    getSession().then((session) => {
      if (!session) {
        router.push("/");
      } else {
        setSession(session);
      }
    });
  }, []);
  if (session) {
    return (
      <Layout>
        <Dashboard />
      </Layout>
    );
  }
}
