import Layout from "@/components/Layout/Layout";
import Dashboard from "@/components/Dashboard/Dashboard";
import { useEffect, useState } from "react";
import { checkAuth } from "@/services/auth";
export default function Component() {
  const [session, setSession] = useState(false);
  useEffect(() => {
    checkAuth().then((res) => (res ? setSession(true) : setSession(false)));
  }, []);
  if (session) {
    return (
      <Layout>
        <Dashboard />
      </Layout>
    );
  }
}
