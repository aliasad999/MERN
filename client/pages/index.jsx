import React from "react";
import Hero from "@/components/Hero/Hero";
import Layout from "@/components/Layout/Layout";
function HomePage() {
  return (
    <Layout>
      <main className="main">
        <Hero />
      </main>
    </Layout>
  );
}

export default HomePage;
