import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "../../components/ui/Button";
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
  });
  if (session) {
    return (
      <main className="main">
        <h2>Welcome {session.user.name}</h2>
        <Button href="api/auth/signout">Logout</Button>
      </main>
    );
  }
}
