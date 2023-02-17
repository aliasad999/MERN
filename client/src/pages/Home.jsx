import React from "react";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
function Home() {
  return (
    <Layout>
      <main className="main">
        <Hero />
      </main>
    </Layout>
  );
}

export default Home;
