import React from "react";
import Footer from "./Components/Footer/Footer";
import DropMenu from "./Components/DropMenu/DropMenu";
import "./App.scss";
import TopHeader from "./Components/TopHeader/TopHeader";
import NavBar from "./Components/NavBar/NavBar";
import ContentArea from "./Components/ContentArea/ContentArea";

function App() {
  return (
    <main>
      <TopHeader />
      <NavBar />
      <ContentArea />
      <Footer />
    </main>
  );
}

export default App;
