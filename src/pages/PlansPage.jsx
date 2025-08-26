import React from "react";
import Navbar from "../components/Navbar";
import Plans from "../components/Plans";
import Footer from "../components/Footer";

const PlansPage = () => {
  return (
    <div className="App font-sans">
      <Navbar />
      <main className="pt-24">
        <Plans />
      </main>
      <Footer />
    </div>
  );
};

export default PlansPage;
