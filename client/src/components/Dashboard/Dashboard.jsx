import React, { useState } from "react";
import Menu from "./Menu/Menu";
import Universities from "./Universities";
import UserInfo from "./UserInfo";

function Dashboard() {
  const [isUserInfo, setIsUserInfo] = useState(true);
  return (
    <main className="main">
      <Menu pageState={{ isUserInfo, setIsUserInfo }} />
      {isUserInfo ? <UserInfo /> : <Universities />}
    </main>
  );
}

export default Dashboard;
