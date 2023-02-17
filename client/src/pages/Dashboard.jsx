import Layout from "@/components/Layout/Layout";
import Dashboard from "@/components/Dashboard/Dashboard";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
export default function Component() {
  const axiosPrivate = useAxiosPrivate();
  const [user, setUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      axiosPrivate
        .post("/")
        .then((res) => {
          if (res.status === 200) {
            setUser(true);
          }
        })
        .catch((err) => {
          setUser(false);
          navigate("/", { replace: true });
        });
    })();
  }, []);
  if (user) {
    return (
      <Layout>
        <Dashboard />
      </Layout>
    );
  }
}
